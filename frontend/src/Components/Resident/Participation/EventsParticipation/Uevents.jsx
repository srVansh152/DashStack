import React, { useState, useEffect, useRef } from 'react';

import { Bell, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../../Common/Navbar/Navbar';

const Uevents = () => {
  

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



   


    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
                <Navbar/>
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
