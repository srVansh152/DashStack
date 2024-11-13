import React, { useState } from 'react'
import { Bell, Eye, FileText, Plus, Pencil, Trash2, Link } from 'lucide-react'
import Aside from './Aside'


export default function ExpenseTracker() {
    const [isOpen, setIsOpen] = useState(false)

    const expenses = [
        {
            title: "Rent or Mortgage",
            description: "A visual representation of your spending categories...",
            date: "15/02/2024",
            amount: 1000,
            format: "JPG",
        },
        {
            title: "Housing Costs",
            description: "Track the fluctuations in your spending over time...",
            date: "11/02/2024",
            amount: 1000,
            format: "PDF",
        },
        {
            title: "Property Taxes",
            description: "Easily compare your planned budget against we your...",
            date: "12/02/2024",
            amount: 1000,
            format: "JPG",
        },
        {
            title: "Transportation",
            description: "Identify your largest expenditures, you a enabling you...",
            date: "13/02/2024",
            amount: 1000,
            format: "PDF",
        },
        {
            title: "Financial Breakdown",
            description: "Tailor the dashboard to your unique financial we goals...",
            date: "14/02/2024",
            amount: 1000,
            format: "JPG",
        },
    ]

    const notifications = [
        {
            id: 1,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a fund of',
            amount: '1000 rupees for Navratri.',
            time: '30 Minutes ago',
            avatar: '/placeholder.svg?height=40&width=40',
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
            avatar: '/placeholder.svg?height=40&width=40',
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
                <div className="flex min-h-screen bg-gray-100">
                    {/* Sidebar placeholder */}


                    <div className="flex-1">
                        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
                            <div className="flex flex-1 items-center">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">Home</span>
                                    <span className="text-gray-500">/</span>
                                    <span className="text-blue-500">Expance</span>

                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="relative rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <Bell className="h-5 w-5" />
                                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                                    </button>

                                    {isOpen && (
                                        <div className="absolute right-0 z-20 mt-2 w-80 overflow-hidden rounded-lg border bg-white shadow-lg md:w-96">
                                            <div className="flex items-center justify-between border-b p-4">
                                                <h2 className="font-semibold text-gray-800">Notifications</h2>
                                                <button className="text-sm text-blue-500 hover:text-blue-600">
                                                    Clear all
                                                </button>
                                            </div>
                                            <div className="max-h-96 overflow-auto">
                                                {notifications.map((notification) => (
                                                    <div key={notification.id} className="border-b p-4 transition-colors hover:bg-gray-50">
                                                        <div className="flex gap-3">
                                                            {notification.type !== 'event' ? (
                                                                <Image
                                                                    src="/placeholder.svg?height=40&width=40"
                                                                    alt=""
                                                                    width={40}
                                                                    height={40}
                                                                    className="rounded-full"
                                                                />
                                                            ) : (
                                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                                                    <span className="text-xl text-blue-500">G</span>
                                                                </div>
                                                            )}
                                                            <div className="flex-1">
                                                                <p className="text-sm text-gray-800">
                                                                    <span className="font-medium">{notification.user}</span> {notification.message}
                                                                    {notification.linkText && <span className="text-blue-500"> {notification.linkText}</span>}
                                                                    {notification.amount}
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
                                    href="/editprofile"
                                    className="hidden cursor-pointer items-center gap-2 rounded-lg p-2 transition-all hover:bg-gray-50 sm:flex"
                                >

                                    <div className="hidden md:block">
                                        <p className="text-sm font-medium">Moni Roy</p>
                                        <p className="text-xs text-gray-500">admin</p>
                                    </div>
                                </Link>
                            </div>
                        </header>

                        <main className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-2xl font-semibold">Add Expenses Details</h1>
                                <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add New Expenses details
                                </button>
                            </div>
                            <div className="border rounded-lg bg-white overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill Format</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {expenses.map((expense, index) => (
                                            <tr key={index} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap">{expense.title}</td>
                                                <td className="px-6 py-4 whitespace-nowrap max-w-md truncate">{expense.description}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{expense.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">₹ {expense.amount}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <FileText className="w-4 h-4" />
                                                        {expense.format}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-1 text-green-500 hover:text-green-600 focus:outline-none">
                                                            <Pencil className="w-6 h-5" />
                                                        </button>
                                                        <button className="p-1 text-blue-500 hover:text-blue-600 focus:outline-none">
                                                            <Eye className="w-6 h-5" />
                                                        </button>
                                                        <button className="p-1 text-red-500 hover:text-red-600 focus:outline-none">
                                                            <Trash2 className="w-6 h-5" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}