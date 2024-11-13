import React, { useState } from 'react'
import { Bell, PencilIcon, Eye, MoreVertical, Plus, Trash, Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from './Aside'

const guards = [
    {
        id: 1,
        name: "Brooklyn Simmons",
        phone: "845654 96321",
        shift: "Day",
        shiftDate: "10/02/2024",
        shiftTime: "2:45 PM",
        gender: "Male",
        image: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 2,
        name: "Brooklyn Simmons",
        phone: "845654 96321",
        shift: "Day",
        shiftDate: "10/02/2024",
        shiftTime: "2:45 PM",
        gender: "Female",
        image: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 3,
        name: "Brooklyn Simmons",
        phone: "845654 96321",
        shift: "Night",
        shiftDate: "10/02/2024",
        shiftTime: "2:45 PM",
        gender: "Male",
        image: "/placeholder.svg?height=40&width=40",
    },
]

function SecurityGuard() {

    const [isOpen, setIsOpen] = useState(false)

    const notifications = [
        {
            id: 1,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a fund of',
            amount: '1000 rupees for Navratri.',
            time: '30 Minutes ago',
            avatar: '/api/placeholder/40/40',
            type: 'fund',
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
            type: 'maintenance',
        },
        {
            id: 3,
            user: 'Ganesh Chaturthi',
            userCode: 'A- 101',
            amount: '₹ 1,500',
            subtitle: 'Per Person Amount :',
            description:
                'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
            time: '2 days ago',
            type: 'event',
        },
    ]


    return (
        <>
            <Aside />
            <div className="main">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
                    <div className="flex flex-1 items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">Home</span>
                            <span className="text-gray-500">/</span>
                            <Link
                                className={`text-blue-500 ${window.location.pathname === '/admin/securityguard' ? 'font-bold' : 'text-blue-600'
                                    }`}
                                to={'/financial'}
                            >
                                {' '}
                                Security Guard
                            </Link>


                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
                            >
                                <Bell className="h-5 w-5 text-gray-600" />
                                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 z-20 mt-2 w-80 overflow-hidden rounded-lg border bg-white shadow-lg md:w-96">
                                    <div className="flex items-center justify-between border-b p-4">
                                        <h2 className="font-semibold text-gray-800">Notifications</h2>
                                        <button onClick={() => { }} className="text-sm text-blue-500 transition-colors hover:text-blue-600">
                                            Clear all
                                        </button>
                                    </div>
                                    <div className="max-h-96 overflow-hidden">
                                        {notifications.map((notification) => (
                                            <div key={notification.id} className="border-b p-4 transition-colors hover:bg-gray-50">
                                                <div className="flex gap-3">
                                                    {notification.type !== 'event' ? (
                                                        <img src="/image/3504bec22d3fe96515e7c73aeadb9d13.jpg" alt="" className="h-10 w-10 rounded-full" />
                                                    ) : (
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                                            <span className="text-xl text-blue-500">G</span>
                                                        </div>
                                                    )}

                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-800">
                                                            <span className="font-medium">{notification.user}</span> {notification.message}
                                                            {notification.linkText && <span className="text-blue-500"> {notification.linkText}</span>}
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

                        <Link
                            to="/editprofile"
                            className="hidden cursor-pointer items-center gap-2 rounded-lg p-2 transition-all hover:bg-gray-50 sm:flex"
                        >
                            <img
                                src="/api/placeholder/32/32"
                                alt="Profile"
                                className="h-8 w-8 rounded-full border-2 border-transparent transition-all hover:border-orange-500"
                            />
                            <div className="hidden md:block">
                                <p className="text-sm font-medium">Moni Roy</p>
                                <p className="text-xs text-gray-500">admin</p>
                            </div>
                        </Link>
                    </div>
                </header>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Security Guard Details</h2>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-lg">+</span> Add Security
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-4">Security Guard Name</th>
                                    <th className="text-left p-4">Phone Number</th>
                                    <th className="text-left p-4">Select Shift</th>
                                    <th className="text-left p-4">Shift Date</th>
                                    <th className="text-left p-4">Shift Time</th>
                                    <th className="text-left p-4">Gender</th>
                                    <th className="text-left p-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {guards.map((guard) => (
                                    <tr key={guard.id} className="border-b">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={guard.image}
                                                    alt=""
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <span>{guard.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">{guard.phone}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${guard.shift === "Day"
                                                    ? "bg-orange-100 text-orange-500"
                                                    : "bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                {guard.shift}
                                            </span>
                                        </td>
                                        <td className="p-4">{guard.shiftDate}</td>
                                        <td className="p-4">{guard.shiftTime}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${guard.gender === "Male"
                                                    ? "bg-blue-100 text-blue-500"
                                                    : "bg-pink-100 text-pink-500"
                                                    }`}
                                            >
                                                {guard.gender}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button className="p-1 rounded-full hover:bg-gray-100">
                                                    <Pencil className="w-6 h-5 text-green-500" />
                                                </button>
                                                <button className="p-1 rounded-full hover:bg-gray-100">
                                                    <Eye className="w-6 h-5 text-blue-500" />
                                                </button>
                                                <button className="p-1 rounded-full hover:bg-gray-100">
                                                    <Trash2 className="w-6 h-5 text-red-500" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SecurityGuard