import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icons } from "../../../constants";
import { getProfile } from '../../../utils/api';
import Notification from '../Notifications/Notifications';
import { io } from 'socket.io-client';



const socket = io('https://dashstack-90hs.onrender.com');


const Navbar = () => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);


  useEffect(() => {
    const initializeSocket = async () => {
      await fetchUserData();

      socket.on("new-notification", (data) => {
        addNotification(data.message, data.type);
      });
      console.log("in socket ", user);
      if (socket) {
        const token = localStorage.getItem('token');
        const societyId = await getProfile(token);
        const society = societyId.data.profile.society;
        const societyIdObj = societyId.data.profile.societyId;

        const id = (society && society._id) ? society._id : (societyIdObj && societyIdObj._id);

        if (id) {
          console.log("societyId", id);
          socket.emit('join-society', id);
        } else {
          console.error('Society ID not found');
        }
      }
    };

    initializeSocket();

    return () => {
      socket.off("new-notification");
    };
  }, [socket]);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };


  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProfile(token);
      console.log(response);
      setUser(response.data.profile);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const addNotification = (message , type) => {
    const newNotification = {
      id: Date.now(),
      notificationMessage: message,
      notificationType: type,
    };
    console.log("newNotification",newNotification); 
    setNotifications((prev) => [...prev, newNotification]);
  };

  return (
    <div className='sticky  top-0 left-0 z-10'>
      <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm  top-0 z-10">
        {/* Search Bar - hidden on smaller screens */}
        <div className="flex items-center flex-1">
          <input
            type="search"
            placeholder="Search Here"
            className="hidden md:block p-2 pl-4 bg-gray-50 rounded-lg w-full max-w-xs border-2 border-transparent focus:border-orange-500 focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => addNotification()}
            className="p-2 border rounded-lg hover:bg-gray-100"
          >
            {Icons.Bell}
          </button>

          {/* Display Notifications */}
          {notifications.map((notification) => (
            <Notification
              key={notification._id}
              message={notification.notificationMessage}
              type={notification.notificationType}
              onClose={() => removeNotification(notification.id)}
            />
          ))}

          {/* Profile Section */}
          <div className='profile'>
            <Link to="/admin/editprofile" className="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
              <span
                className="w-8 h-8  rounded-full border-2 border-gray-300 hover:border-orange-500 flex items-center justify-center"
                style={{ backgroundColor: user ? user.color : 'gray' }}
              >
                {(user ? (user.firstname || user.fullName || '?') : '?').charAt(0)}
              </span>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user ? (user.firstname || user.fullName || 'Loading...') : 'Loading...'}</p>
                <p className="text-xs text-gray-500">{user ? user.role : 'Loading...'}</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar