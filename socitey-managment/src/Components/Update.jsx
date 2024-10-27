import React, { useState } from 'react';
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import Aside from './Aside';


const Update = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  

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
      <>
      <Aside/>
        <div className="main">
        <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
            {/* Search Bar - hidden on smaller screens */}
            <div className="flex items-center flex-1">
                <input
                    type="search"
                    placeholder="Search Here"
                    className="hidden md:block p-2 pl-4 bg-gray-50 rounded-lg w-full max-w-xs border-2 border-transparent focus:border-orange-500 focus:outline-none transition-all duration-300"
                />
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
                                    onClick={() => {}}
                                    className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                                >
                                    Clear all
                                </button>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
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

        <div className="w-full">
  <img src="/image/blacnk.png" alt="Background" className="w-full" />
</div>
<div className="max-w-[1000px] mx-auto mt-[-100px] flex justify-center p-4">
  <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg">
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <div className="relative w-40 h-40">
            <img
              src="/image/profile.png"
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
              <button>
                <Pencil className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mt-4">Arlene McCoy</h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'First Name', value: '' },
            { label: 'Last Name', value: '' },
            { label: 'Phone Number', value: '' },
            { label: 'Email Address', value: '' },
            { label: 'Select Society', value: '' },
            { label: 'Country', value: '' },
            { label: 'State', value: '' },
            { label: 'City', value: '' },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-medium text-gray-700">{field.label}*</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={field.value}
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/dashboard">
          <button className="bg-orange-500 flex items-center hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
            <Pencil className="w-4 h-4 mr-2" />
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

        </div>
      </>
    );
};



export default Update;




