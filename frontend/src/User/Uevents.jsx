import React, { useState, useEffect, useRef } from 'react';
import UAside from './UAside'
import { Bell, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Uevents = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [activeTab, setActiveTab] = useState('events')

    const events = [
        {
            name: "Cody Fisher",
            description: "Event and recreational activities.",
            time: "2:45 PM",
            date: "11/02/2024",
            event: "Holi Festival"
        },
        {
            name: "Esther Howard",
            description: "Securing critica government systems.",
            time: "1:45 AM",
            date: "12/02/2024",
            event: "Ganesh Chaturthi"
        },
        {
            name: "Brooklyn Simmons",
            description: "Implementing surveillan public spaces.",
            time: "2:00 PM",
            date: "13/02/2024",
            event: "Navratri Festival"
        },
        {
            name: "Jenny Wilson",
            description: "Event and recreational activities.",
            time: "4:00 AM",
            date: "14/02/2024",
            event: "Holi Festival"
        },
        {
            name: "Guy Hawkins",
            description: "Expenses will way sense for you.",
            time: "5:30 PM",
            date: "15/02/2024",
            event: "Ganesh Chaturthi"
        }
    ]

    const eventssecond = [
        {
            name: "Cody Fisher",
            description: "Event and recreational activities.",
            time: "2:45 PM",
            date: "10/02/2024",
            activity: "Society Meeting"
        },
        {
            name: "Esther Howard",
            description: "Securing critica government systems.",
            time: "1:45 PM",
            date: "11/02/2024",
            activity: "Holi Festival"
        },
        {
            name: "Jenny Wilson",
            description: "Implementing surveillan public spaces.",
            time: "7:00 PM",
            date: "12/02/2024",
            activity: "Navratri Festival"
        },
        {
            name: "Robert Fox",
            description: "Event and recreational activities.",
            time: "4:45 PM",
            date: "13/02/2024",
            activity: "Ganesh Chaturthi"
        },
        {
            name: "Albert Flores",
            description: "Securing critica government systems.",
            time: "1:00 PM",
            date: "14/02/2024",
            activity: "Society Meeting"
        },
        {
            name: "Floyd Miles",
            description: "Implementing surveillan public spaces.",
            time: "6:45 PM",
            date: "15/02/2024",
            activity: "Holi Festival"
        },
        {
            name: "Albert Flores",
            description: "Event and recreational activities.",
            time: "7:35 PM",
            date: "16/02/2024",
            activity: "Navratri Festival"
        },
        {
            name: "Floyd Miles",
            description: "Securing critica government systems.",
            time: "4:30 PM",
            date: "17/02/2024",
            activity: "Ganesh Chaturthi"
        },
        {
            name: "Cody Fisher",
            description: "Implementing surveillan public spaces.",
            time: "1:30 PM",
            date: "18/02/2024",
            activity: "Society Meeting"
        },
        {
            name: "Cody Fisher",
            description: "Event and recreational activities.",
            time: "3:45 PM",
            date: "19/02/2024",
            activity: "Holi Festival"
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
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
                <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm sticky  top-0 z-10">
                    {/* Search Bar - hidden on smaller screens */}
                    <div className="flex items-center ms-3 gap-2 text-sm">
                        <span className="text-gray-500">Home</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-blue-500">Events Particapants</span>
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
                <div className="w-full mx-auto p-4">
                    <div className="mb-4 flex flex-col sm:flex-row">
                        <button
                            className={`px-4 py-2 rounded-tl-lg rounded-tr-lg ${activeTab === 'events' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'
                                }`}
                            onClick={() => setActiveTab('events')}
                        >
                            Events Participate
                        </button>
                        <button
                            className={`mt-2 sm:mt-0 sm:ml-2 px-4 py-2 rounded-tl-lg rounded-tr-lg ${activeTab === 'activity' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'
                                }`}
                            onClick={() => setActiveTab('activity')}
                        >
                            Activity Participate
                        </button>
                    </div>
                    {activeTab === 'events' && (
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-8">
                                <h2 className="text-xl font-semibold mb-6">Events Participation</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 px-4 py-2 bg-gray-50 rounded-t-lg">
                                    <div className="font-medium text-gray-700 p-2">Participator Name</div>
                                    <div className="font-medium text-gray-700 p-2">Description</div>
                                    <div className="font-medium text-gray-700 p-2">Event Time</div>
                                    <div className="font-medium text-gray-700 p-2">Event Date</div>
                                    <div className="font-medium text-gray-700 p-2">Event Name</div>
                                </div>
                                <div className="divide-y">
                                    {events.map((event, index) => (
                                        <div key={index} className="grid grid-cols-1 sm:grid-cols-5 gap-6 px-4 py-5 items-center hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                    {event.name.charAt(0)}
                                                </div>
                                                <span className="font-medium">{event.name}</span>
                                            </div>
                                            <div className="text-gray-600">{event.description}</div>
                                            <div className="text-gray-600">{event.time}</div>
                                            <div className="text-gray-600">{event.date}</div>
                                            <div className="text-gray-600">{event.event}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'activity' && (
                        <div className="w-full mx-auto">
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="p-8">
                                    <h2 className="text-xl font-semibold mb-6">Events Participation</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 px-4 py-3 bg-gray-50 rounded-t-lg">
                                        <div className="font-medium text-gray-700 p-2">Participator Name</div>
                                        <div className="font-medium text-gray-700 p-2">Description</div>
                                        <div className="font-medium text-gray-700 p-2">Activity Time</div>
                                        <div className="font-medium text-gray-700 p-2">Activity Date</div>
                                        <div className="font-medium text-gray-700 p-2">Activity Name</div>
                                    </div>
                                    <div className="divide-y divide-gray-200">
                                        {eventssecond.map((event, index) => (
                                            <div key={index} className="grid grid-cols-1 sm:grid-cols-5 gap-4 px-4 py-5 items-center hover:bg-gray-50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                                                        {event.name.charAt(0)}
                                                    </div>
                                                    <span className="font-medium text-gray-900">{event.name}</span>
                                                </div>
                                                <div className="text-gray-600">{event.description}</div>
                                                <div className="text-gray-600">{event.time}</div>
                                                <div className="text-gray-600">{event.date}</div>
                                                <div className="text-gray-600">{event.activity}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Uevents
