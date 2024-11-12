import React, { useEffect, useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, Bell, Calendar, Clock , X } from 'lucide-react'
import { Link } from 'react-router-dom';
import Aside from './Aside';
import { Info, MoreVertical } from "lucide-react"



function Announcment() {
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [description, setDescription] = useState("");
  const [announcementDate, setAnnouncementDate] = useState("");
  const [announcementTime, setAnnouncementTime] = useState("");
  const [title, setTitle] = useState("Community Initiatives");
  const [descriptionn, setDescriptionn] = useState("The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident.");
  const [date, setDate] = useState("01/02/2024");
  const [time, setTime] = useState("10:15 AM");
    const [isOpen, setIsOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [openEditModel, setOpenEditModel] = useState(false);
    const [openViewModel, setOpenViewModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., saving the data)
    
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., saving or sending the data
  
  };




    const handleAddModel = () => {
        setOpenModel(true);
    };
    const handleEditModel = () => {
        setOpenEditModel(true);
    };
    const handleViewModel = () => {
        setOpenViewModel(true);
    };
    const handleDeleteModel = () => {
        setOpenDeleteModel(true);
    };

    const announcements = [
        {
            date: "01/02/2024",
            time: "10:15 AM",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        },
        {
            date: "01/02/2024",
            time: "10:15 AM",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        },
        {
            date: "01/02/2024",
            time: "10:15 AM",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        },
        {
            date: "01/02/2024",
            time: "10:15 AM",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        },
        {
            date: "01/02/2024",
            time: "10:15 AM",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        },
        {
            date: "01/02/2024",
            time: "10:15 AM",
            description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
        }
    ]


    const notifications = [
        {
            id: 1,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a fund of',
            amount: '1000 rupees for Navratri.',
            time: '30 Minutes ago',
            avatar: '/api/placeholder/40/40',
            type: 'fund'
        },
        {
            id: 2,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a',
            linkText: 'Maintenance',
            amount: ' of 1000 rupees.',
            time: '2 days ago',
            avatar: '/api/placeholder/40/40',
            type: 'maintenance'
        },
        {
            id: 3,
            user: 'Ganesh Chaturthi',
            userCode: 'A- 101',
            amount: '₹ 1,500',
            subtitle: 'Per Person Amount :',
            description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
            time: '2 days ago',
            type: 'event'
        }
    ];

    return (
        <div>
            <Aside />
            <div className="main">
                <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
                    {/* Search Bar - hidden on smaller screens */}
                    <div className="flex items-center flex-1">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">Home</span>
                            <span className="text-gray-500">/</span>
                          
                            <Link className={`text-blue-500 ${window.location.pathname === '/announcment' ? 'font-bold' : 'text-gray-600'}`} to={'/otherincome'}>Announcment</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            {/* Notification Bell Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Notification Dropdown Panel */}
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-lg border overflow-hidden z-20">
                                    <div className="flex justify-between items-center p-4 border-b">
                                        <h2 className="font-semibold text-gray-800">Notifications</h2>
                                        <button
                                            onClick={() => { }}
                                            className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                    <div className="max-h-96 overflow-hidden">
                                        {notifications.map((notification) => (
                                            <div key={notification.id} className="p-4 border-b hover:bg-gray-50 transition-colors">
                                                <div className="flex gap-3">
                                                    {/* Avatar or Icon */}
                                                    {notification.type !== 'event' ? (
                                                        <img
                                                            src='/image/3504bec22d3fe96515e7c73aeadb9d13.jpg'
                                                            alt=""
                                                            className="w-10 h-10 rounded-full"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <span className="text-blue-500 text-xl">G</span>
                                                        </div>
                                                    )}

                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-800">
                                                            <span className="font-medium">{notification.user}</span> {notification.message}
                                                            {notification.linkText && (
                                                                <span className="text-blue-500"> {notification.linkText}</span>
                                                            )}
                                                        </p>
                                                        <span className="text-xs text-gray-400">{notification.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile Section */}
                        <Link to="/editprofile" className="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
                            <img
                                src="/api/placeholder/32/32"
                                alt="Profile"
                                className="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-500 transition-all"
                            />
                            <div className="hidden md:block">
                                <p className="text-sm font-medium">Moni Roy</p>
                                <p className="text-xs text-gray-500">admin</p>
                            </div>
                        </Link>
                    </div>
                </header>
                {/* Summary Cards */}
                <div className="container p-2">

                    <div className="p-6 bg-gray-50 min-h-screen">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-semibold text-gray-900">Announcement</h1>
                            <button onClick={handleAddModel} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                                Create Announcement
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {announcements.map((announcement, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden">
                                    <div className="bg-[#4F6BF6] text-white p-4 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <h2 className="font-medium">Community Initiatives</h2>
                                          
                                        </div>
                                        {/* Attach dropdown to all cards */}
                                        <div className="relative group">
    <button className="text-white hover:bg-blue-600 p-1 rounded">
        <MoreVertical className="w-5 h-5" />
    </button>
    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out">
        <div className="py-1">
            <button onClick={handleEditModel} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Edit
            </button>
            <button onClick={handleViewModel} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                View
            </button>
            <button onClick={handleDeleteModel} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Delete
            </button>
        </div>
    </div>
</div>

                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-600">Announcement Date</p>
                                                    <p className="text-sm font-medium">{announcement.date}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-600">Announcement Time</p>
                                                    <p className="text-sm font-medium">{announcement.time}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Description</p>
                                                <p className="text-sm">{announcement.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {openModel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                        <h1 className="text-xl font-semibold mb-6">Add Announcement</h1>
        
        <div className="space-y-4">
        <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm mb-1">
          Announcement Title<span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          value={announcementTitle}
          onChange={(e) => setAnnouncementTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-h-[80px]"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Announcement Date Input */}
        <div>
          <label className="block text-sm mb-1">
            Announcement Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={announcementDate}
            onChange={(e) => setAnnouncementDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        {/* Announcement Time Input */}
        <div>
          <label className="block text-sm mb-1">
            Announcement Time<span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            value={announcementTime}
            onChange={(e) => setAnnouncementTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button 
          type="button" 
          onClick={() => setOpenModel(false)} 
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Save
        </button>
      </div>
    </form>
        </div>
                        </div>
                    </div>
                </div>
            )}

            {openDeleteModel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-900 p-3">
                                Delete Ganesh Chaturthi?
                            </h2>
                            <p className="text-gray-500 p-3">
                                Are you sure you want to delete this?
                            </p>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <button
                                    onClick={() => setOpenDeleteModel(false)}
                                    className="px-6 py-2.5 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2.5 text-white font-medium bg-[#f1523d] rounded-lg hover:bg-[#d13d2a] focus:outline-none focus:ring-2 focus:ring-[#f1523d]"
                                >
                                    Delete
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            )}

{openEditModel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                        <h1 className="text-xl font-semibold mb-6">Edit Announcement</h1>
        
        <div className="space-y-4">
        <form onSubmit={handleEditSubmit}>
      <div>
        <label className="block text-sm mb-1">
          Announcement Title<span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          value={descriptionn}
          onChange={(e) => setDescriptionn(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-h-[80px]"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">
            Announcement Date<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <Calendar className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">
            Announcement Time<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <Clock className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <button 
          type="button" 
          onClick={() => setOpenEditModel(false)} 
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Save
        </button>
      </div>
    </form>
        </div>
    
                        </div>
                    </div>
                </div>
            )}
{openViewModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">View Security Protocol</h1>
          <button onClick={()=> setOpenViewModel(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Title
            </label>
            <div className="text-sm">
              Physical Security
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Description
            </label>
            <div className="text-sm">
            The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Date
              </label>
              <div className="text-sm">
                01/02/2024
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Time
              </label>
              <div className="text-sm">
            10:15 AM
              </div>
            </div>
          </div>
        </div>
        </div>
          </div>
        </div>
      )}

{openDeleteModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Delete Announcement?</h2>
          
          <p className="text-gray-500">
            Are you sure you want to delete this security?
          </p>
          
          <div className="flex gap-4 pt-2">
            <button onClick={()=>setOpenDeleteModel(false)}
              type="button"
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        </div>
          </div>
        </div>
      )}


        </div>



    )
}

export default Announcment
