import React, { useEffect, useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon, Bell, MoreVertical } from 'lucide-react'
import { Link } from 'react-router-dom';
import Aside from './Aside';



function Note() {
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModel, setOpenEditModel] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        dueDate: '',
        description: '',
        amount: ''
    })

  const handleAddModel = () => {
    setOpenModal(true);
  };
  const handleEditModel = () => {
    setOpenEditModel(true);
  };

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



  const handleDeleteIncome = () => {
    setOpenDeleteModel(true);
  };

  const facilities = [
    {
      title: "Parking Facilities",

      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
    },
    {
      title: "Community Center",

      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
    },
    {
      title: "Swimming Pool",

      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
    },
    {
      title: "Parks and Green Spaces",

      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
    },
    {
      title: "Wi-Fi and Connectivity",

      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
    },
    {
      title: "Pet-Friendly Facilities:",

      description: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in."
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
              <Link className={`text-gray-500 ${window.location.pathname === '/financial' ? 'font-bold' : 'text-gray-600'}`} to={'/financial'}> Maintenance</Link>
              <span className="text-gray-500">/</span>
              <Link className={`text-blue-500 ${window.location.pathname === '/note' ? 'font-bold' : 'text-gray-600'}`} to={'/otherincome'}> Note</Link>
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
        {/* Summary Cards */}
        <div className="container p-2">

          <div className="p-6 bg-gray-50 min-h-screen overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Note</h1>
              <button onClick={handleAddModel} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                Create Note
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-[#4F6BF6] text-white p-4 flex justify-between items-center">
                    <h2 className="font-medium">{facility.title}</h2>
                    <div className="flex items-center gap-2">
                      {/* New Dropdown Button */}
                      <div className="relative group">
                        <button className="text-white hover:bg-blue-600 p-1 rounded">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 transform scale-95 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100">
                          <div className="py-1">
                            <button onClick={handleEditModel} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Edit
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              View
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <p className="text-sm font-medium">{facility.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Description</p>
                      <p className="text-sm">{facility.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm z-40">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6 space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Add Note</h2>
          
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter Description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Date<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button onClick={()=> setOpenModal(false)}
                type="button"
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                    <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Edit Note</h2>
          
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Rent or Mortgage"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                defaultValue="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Date<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2024-05-12"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button onClick={()=> setOpenEditModel(false)}
                type="button"
                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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

export default Note
