
import React, { useState } from 'react'
import { Bell, Eye, FileText, Plus, Pencil, Trash2, Calendar, X } from 'lucide-react'
import Aside from './Aside'
import { Link } from 'react-router-dom'

export default function ExpenseTracker() {
    const [isOpen, setIsOpen] = useState(false)
    const [openModel, setOpenModel] = useState(false);
    const [openEditModel, setOpenEditModel] = useState(false);
    const [openViewModel, setOpenViewModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')

    const expenseData = {
        title: 'Rent Or Mortgage',
        description: 'A visual representation of your spending categories visual representation.',
        date: '01/02/2024',
        amount: '1,500',
        bill: {
            name: 'Adharcard Front Side.JPG',
            size: '3.5 MB'
        }
    }

    const [formData, setFormData] = useState({
        title: 'Rent or Mortgage',
        description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident.',
        date: '2024-05-12',
        amount: '1500',
        file: {
            name: 'Syncfusion Essential Rentagreement.GIF',
            size: '3.5 MB'
        }
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        // Your submit logic here
        console.log('Form submitted', formData);
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

    const handleDrop = (e) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files[0]
        if (droppedFile && droppedFile.size <= 10 * 1024 * 1024) { // 10MB limit
            setFile(droppedFile)
        }
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) { // 10MB limit
            setFile(selectedFile)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const expenseData = {
            title,
            description,
            date,
            amount,
            file
        }


        setTitle('')
        setDescription('')
        setDate('')
        setAmount('')
        setFile(null)
        setOpenModel(false)
    }

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
                        <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
                            {/* Search Bar - hidden on smaller screens */}
                            <div className="flex items-center flex-1">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-500">Home</span>
                                    <span className="text-gray-500">/</span>
                                    <Link className={`text-blue-500 ${window.location.pathname === '/admin/expance' ? 'font-bold' : 'text-gray-600'}`} to={'/admin/expance'}> Expance</Link>
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

                        <main className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-2xl font-semibold">Add Expenses Details</h1>
                                <button onClick={handleAddModel} className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
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
                                                        <button onClick={handleEditModel} className="p-1 text-green-500 hover:text-green-600 focus:outline-none">
                                                            <Pencil className="w-6 h-5" />
                                                        </button>
                                                        <button onClick={handleViewModel} className="p-1 text-blue-500 hover:text-blue-600 focus:outline-none">
                                                            <Eye className="w-6 h-5" />
                                                        </button>
                                                        <button onClick={handleDeleteModel} className="p-1 text-red-500 hover:text-red-600 focus:outline-none">
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
                {openModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">Add Expenses Details</h2>

                                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Title<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Enter Title"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Description<span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Enter Description"
                                            rows={3}
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium">
                                                Date<span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                                    required
                                                />
                                                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium">
                                                Amount<span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-2.5">₹</span>
                                                <input
                                                    type="number"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    placeholder="0000"
                                                    className="w-full px-3 py-2 pl-7 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Upload Bill<span className="text-red-500">*</span>
                                        </label>
                                        <div
                                            className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50"
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={handleDrop}
                                            onClick={() => document.getElementById('file-upload')?.click()}
                                        >
                                            <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                                accept="image/png,image/jpeg,image/gif"
                                                onChange={handleFileChange}
                                            />
                                            <div className="mx-auto w-12 h-12 border-2 rounded-lg flex items-center justify-center mb-2">
                                                <span className="text-2xl">+</span>
                                            </div>
                                            <div className="text-sm font-medium">
                                                {file ? file.name : (
                                                    <>
                                                        <span className="text-blue-600">Upload a file</span> or drag and drop
                                                    </>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpenModel(false)}
                                            className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                {openEditModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">Edit Expenses</h2>

                                <form onSubmit={handleEditSubmit} className="mt-6 space-y-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Title<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Description<span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium">
                                                Date<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium">
                                                Amount<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium">
                                            Upload Bill<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                setFormData((prevData) => ({
                                                    ...prevData,
                                                    file: {
                                                        name: file.name,
                                                        size: file.size
                                                    }
                                                }));
                                            }}
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-between pt-4">
                                        <button
                                            onClick={() => setOpenEditModel(false)}
                                            type="button"
                                            className="px-6 py-2 border rounded-md hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                {openViewModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-semibold">View Expense Details</h2>
                                    <button onClick={() => setOpenViewModel(false)} className="p-1 hover:bg-gray-100 rounded-full">
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm text-gray-500">Title</label>
                                        <p className="mt-1 text-base">{expenseData.title}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-500">Description</label>
                                        <p className="mt-1 text-base">{expenseData.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-500">Date</label>
                                            <p className="mt-1 text-base">{expenseData.date}</p>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-500">Amount</label>
                                            <p className="mt-1 text-base">₹ {expenseData.amount}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-500">Bill</label>
                                        <div className="mt-1 flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="h-10 w-10 flex-shrink-0 rounded-lg border bg-white flex items-center justify-center">
                                                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{expenseData.bill.name}</p>
                                                <p className="text-xs text-gray-500">{expenseData.bill.size}</p>
                                            </div>
                                            <button className="ml-auto p-1.5 hover:bg-gray-200 rounded-md">
                                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
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
                                <h2 className="text-xl font-semibold text-gray-900">Delete Expense?</h2>

                                <p className="text-gray-500">
                                    Are you sure you want to delete this Expense?
                                </p>

                                <div className="flex gap-4 pt-2">
                                    <button onClick={() => setOpenDeleteModel(false)}
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
        </>
    )
}

