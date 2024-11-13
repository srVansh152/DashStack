import React, { useEffect, useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, Bell } from 'lucide-react'
import { Link } from 'react-router-dom';
import Aside from './Aside';


function OtherIncome() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    dueDate: '',
    description: '',
    amount: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddIncome = () => {
    setOpenModel(true);
  };

  const handleDeleteIncome = () => {
    setOpenDeleteModel(true);
  };

  const incomeItems = [
    {
      title: "Ganesh chaturthi",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "10/07/2024",
      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident."
    },
    {
      title: "Navratri",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "10/07/2024",
      description: "The celebration of Navratri involves the installation of clay idols of Durga in Resident."
    },
    {
      title: "Diwali",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "10/07/2024",
      description: "The celebration of Diwali involves the installation of clay idols of Ganesa in Resident."
    },
    {
      title: "Ganesh chaturthi",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "10/07/2024",
      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident."
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
              <Link className={`text-gray-500 ${window.location.pathname === '/admin/financial' ? 'font-bold' : 'text-gray-600'}`} to={'/admin/financial'}> Maintenance</Link>
              <span className="text-gray-500">/</span>
              <Link className={`text-blue-500 ${window.location.pathname === '/admin/otherincome' ? 'font-bold' : 'text-gray-600'}`} to={'/admin/otherincome'}> otherincome</Link>
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
        {/* Summary Cards */}
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex">
              <Link to="/admin/financial" className="px-4 py-2 text-gray-600 font-medium">Maintenance</Link>
              <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-t-lg">Other Income</button>
            </div>
            <div className='flex gap-4'>
              <Link to="/admin/memberlist">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center">
                  <EyeIcon className="w-5 h-5 mr-2" />
                  Views
                </button>
              </Link>
              <button onClick={handleAddIncome} className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center">
                <PlusIcon className="w-5 h-5 mr-2" />
                Create Other Income
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {incomeItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <Link to="/admin/memberlist">
                      <button className="text-gray-500 mt-1 pointer hover:text-gray-700">
                        <EyeIcon className="w-5 h-5" />
                      </button>
                    </Link>
                    <button onClick={handleDeleteIncome} className="text-gray-500 hover:text-gray-700">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p>Amount Per Member: <span className="font-medium">₹{item.amountPerMember}</span></p>
                  <p>Total Member: <span className="font-medium">{item.totalMembers}</span></p>
                  <p>Date: <span className="font-medium">{item.date}</span></p>
                  <p>Due Date: <span className="font-medium">{item.dueDate}</span></p>
                  <p className="text-gray-600">Description: {item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h1 className="text-xl font-bold text-gray-900 mb-6">Create Other Income</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Due Date<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter Description"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="0000"
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <button onClick={() => setOpenModel(false)}
                    type="button"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <Link to="/admin/otherincome">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Save
                    </button>
                  </Link>
                </div>
              </form>
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
    </div>



  )
}

export default OtherIncome
