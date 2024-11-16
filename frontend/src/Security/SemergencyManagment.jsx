import { Bell } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SemergencyManagment = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);

    const handleAddModel = () => {
        setOpenModel(true);
    };

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
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
                {/* Search Bar - hidden on smaller screens */}
                <div className="flex items-center flex-1">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-500">Home</span>
                        <span className="text-gray-500">/</span>
                        <Link className={`text-blue-500 ${window.location.pathname === '/security/Semergency' ? 'font-xxl-bold' : 'text-gray-600'}`} to={'/admin/Facilitymanagment'}>Emergency Managment</Link>
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
                    <Link to="/admin/editprofile" className="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
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

            {/* Main Content */}
            <main className="flex items-center justify-center p-4" style={{ height: "92vh" }}>
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
                    <h1 className="mb-6 text-xl font-semibold">Alert</h1>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="alertType" className="block text-sm font-medium text-gray-700">
                                Alert Type*
                            </label>
                            <select
                                id="alertType"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Alert</option>
                                <option value="emergency">Emergency</option>
                                <option value="warning">Warning</option>
                                <option value="info">Information</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description*
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="An emergency description typically refers to a detailed account or explanation of an emergency situation..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default SemergencyManagment