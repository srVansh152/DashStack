import React, { useState, useEffect, useRef } from 'react';
import UAside from './UAside'
import { Bell, X, ChevronDown, Hash, List, Radio, Star, Type } from 'lucide-react';
import { Link } from 'react-router-dom';
import Utitle from './Utitle';


const Ucommunity = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState("Community")
    const [votes, setVotes] = useState(0);
    const [answers, setAnswers] = useState(0);
    const [questions, setQuestions] = useState('What is the capital of France?');
    const [contents, setContents] = useState('Feel free to let me know if you need more examples or if there like to include in your dummy content');
    const [views, setViews] = useState(40);
    const contacts = [
        { name: "Community", message: "Typing...", time: "9:20", unread: false }
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
                        <span className="text-blue-500">Polls</span>
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
                <div className="flex h-screen bg-gray-100">
                    <aside className="w-1/4 bg-white p-4 border-r border-gray-200">
                        <h1 className="text-xl font-bold mb-4">Chat</h1>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Search Here"
                                className="w-full p-2 pl-8 border border-gray-300 rounded-md"
                            />
                            <svg
                                className="w-4 h-4 absolute left-2 top-3 text-gray-400"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <ul>
                            {contacts.map((contact, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center justify-between p-2 mb-2 rounded-lg cursor-pointer ${selectedContact === contact.name ? "bg-gray-200" : ""
                                        }`}
                                    onClick={() => setSelectedContact(contact.name)}
                                >
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                        <div>
                                            <p className="font-semibold">{contact.name}</p>
                                            <p className="text-sm text-gray-500">{contact.message}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">{contact.time}</p>
                                        {contact.unread && (
                                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <main className="flex-1 p-4">
                        <header className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <div>
                                    <h2 className="text-xl font-bold">Community</h2>
                                    <p className="text-sm text-gray-500">9:00 Pm</p>
                                </div>
                            </div>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center">
                                Ask Question
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                </svg>
                            </button>
                        </header>
                        <div className="space-y-4 overflow-auto h-[calc(100vh-8rem)]">
                         
                                <div  className="bg-white p-4 rounded-lg shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {votes} votes • {answers} answers
                                            </p>
                                            <h3 className="font-semibold">{questions}</h3>
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                            {views}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{contents}</p>
                                </div>
                         <Utitle/>
                        </div>
                    </main>
                </div>

            </div>

        </div>

    )
}

export default Ucommunity
