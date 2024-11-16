import { Bell } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SAside from './SAside';

const Svisitor = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        wing: "",
        unit: "",
        date: "",
        time: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log("Form Data Submitted:", formData);
        // Perform further actions, such as API calls, validation, etc.
      };

    const handleAddModel = () => {
        setOpenModel(true);
    };

    const visitors = [
        { name: "Evelyn Harper", phone: "97852 12359", date: "10/01/2024", unit: "1001", time: "3:45 PM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Wade Warren", phone: "97852 25893", date: "10/01/2024", unit: "1002", time: "2:45 AM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Guy Hawkins", phone: "975869 55553", date: "10/01/2024", unit: "1003", time: "3:00 PM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Robert Fox", phone: "97444 96323", date: "10/01/2024", unit: "1004", time: "5:30AM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Jacob Jones", phone: "97123 12583", date: "10/01/2024", unit: "2001", time: "12:45 PM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Ronald Richards", phone: "97259 12363", date: "10/01/2024", unit: "2002", time: "3:45 PM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Annette Black", phone: "97569 77763", date: "10/01/2024", unit: "2003", time: "6:00 AM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Jerome Bell", phone: "97123 25863", date: "10/01/2024", unit: "2004", time: "3:45 PM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Theresa Webb", phone: "97258 3656", date: "10/01/2024", unit: "3001", time: "7:00 PM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Kathryn Murphy", phone: "97577 66963", date: "10/01/2024", unit: "3002", time: "6:00 AM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "Eleanor Pena", phone: "97259 69963", date: "10/01/2024", unit: "3003", time: "7:00 PM", avatar: "/placeholder.svg?height=32&width=32" },
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
        <div className="flex">
            <SAside />
            <div className="flex-1 min-h-screen bg-slate-50">
                {/* Navigation */}
                <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
                    {/* Search Bar - hidden on smaller screens */}
                    <div className="flex items-center flex-1">
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-500">Home</span>
                            <span className="text-gray-500">/</span>
                            <Link className={`text-blue-500 ${window.location.pathname === '/security/Svisitor' ? 'font-xxl-bold' : 'text-gray-600'}`} to={'/admin/Facilitymanagment'}>Visitors Tracking</Link>
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
                <div >
                    <div className="p-6 ">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-xl font-semibold">Visitor Tracking</h1>
                            <div className="flex gap-4">
                                <select className="px-3 py-2 border rounded-md bg-white">
                                    <option>Week</option>
                                </select>
                                <button onClick={handleAddModel} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                                    Add Visitor details
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow">
                            <div className="grid grid-cols-5 gap-4 px-6 py-3 border-b text-sm text-gray-500">
                                <div>Visitor Name</div>
                                <div>Phone Number</div>
                                <div>Date</div>
                                <div>Unit Number</div>
                                <div>Time</div>
                            </div>

                            <div className="divide-y">
                                {visitors.map((visitor, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-5 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={visitor.avatar}
                                                alt=""
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <span className="font-medium">{visitor.name}</span>
                                        </div>
                                        <div>{visitor.phone}</div>
                                        <div>{visitor.date}</div>
                                        <div>{visitor.unit}</div>
                                        <div>{visitor.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Add Visitor Details.</h2>
        
            <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm mb-1">
          Visitor Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">
            Wing<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="wing"
            placeholder="Enter Wing"
            value={formData.wing}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">
            Unit<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="unit"
            placeholder="Enter Unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">
            Date<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="date"
              placeholder="Select Date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">
            Time<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="time"
              placeholder="Select Time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          type="button"
          onClick={() => setOpenModel(false)}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
      </div>
            </div>
          </div>
        )}
        </div>
    )
}

export default Svisitor