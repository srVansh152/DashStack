import React, { useState } from 'react'
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';



const ComplaintSubmission = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [openModel, setOpenModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);
    const [formData, setFormData] = useState({
        complainerName: "",
        complaintName: "",
        description: "",
        wing: "",
        unit: "",
        priority: "",
        status: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
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

    const handleAddModel = () => {
        setOpenModel(true);
      };
      const handleDeleteModel = () => {
        setOpenDeleteModel(true);
    };


const complaints = [
    {
      type: "Unethical Behavior",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
    {
      type: "Preventive Measures",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Expenses will vary sense for you.",
    },
    {
      type: "Unethical Behavior",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Providing information deliberately.",
    },
    {
      type: "Preventive Measures",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
    {
      type: "Unethical Behavior",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
    {
      type: "Preventive Measures",
      requestDate: "01/07/2024",
      status: "Open",
      description: "Regular waste collection services.",
    },
  ];

  const [complaintList, setComplaintList] = useState(complaints);



  
    const toggleDropdown = (index) => {
      setDropdownOpen(dropdownOpen === index ? null : index);
    };


    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
                <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm sticky  top-0 z-10">
                    {/* Search Bar - hidden on smaller screens */}
                    <div className="flex items-center flex-1">
                        <input
                            type="search"
                            placeholder="Search Here"
                            className="hidden md:block p-2 pl-4 bg-gray-50 rounded-lg w-full max-w-xs border-2 border-transparent focus:border-orange-500 focus:outline-none transition-all duration-300"
                        />
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
                <main className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white bg-orange-500 rounded-lg">
            Complaint Submission
          </button>
          <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg">
           <Link to="/user/urequestsubmission">
           Request Submission
           </Link>
          </button>
        </div>
        <button onClick={handleAddModel} className="px-4 py-2 text-white bg-orange-500 rounded-lg">
          Create Complaint
        </button>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Complaint</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complaintList.map((complaint, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#5678E9] px-4 py-2 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white">{complaint.type}</h2>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                  {dropdownOpen === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <button onClick={handleDeleteModel}
                    
                        className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="font-semibold">Request Date:</span> {complaint.requestDate}
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Status:</span>
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {complaint.status}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Description:</span>
                  <p className="mt-1 text-gray-600">{complaint.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </main>
            </div>

            {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Create Complaint</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Complainer Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="complainerName"
          value={formData.complainerName}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Complaint Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="complaintName"
          value={formData.complaintName}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Description"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Wing<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="wing"
            value={formData.wing}
            onChange={handleChange}
            placeholder="Enter Wing"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Unit<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Enter Unit"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Priority<span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-4">
          {["High", "Medium", "Low"].map((priority) => (
            <label key={priority} className="flex items-center">
              <input
                type="radio"
                name="priority"
                value={priority}
                checked={formData.priority === priority}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{priority}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status<span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-4">
          {["Open", "Pending", "Solve"].map((status) => (
            <label key={status} className="flex items-center">
              <input
                type="radio"
                name="status"
                value={status}
                checked={formData.status === status}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          type="button"
          className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setOpenModel(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create
        </button>
      </div>
    </form>
        </div>
            </div>
          </div>
        )}
        
      {openDeleteModel && (
                           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                             <div className="p-5">
                             <h2 className="text-xl font-semibold text-gray-900 mb-2">
                             Delete Complain?
          </h2>
          <p className="text-sm text-gray-500">
          Are you sure you want to delate this Complain?
          </p>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-4 rounded-b-lg">
       
          <button
            onClick={()=>setOpenDeleteModel(false)}
            className="px-4 border py-2 rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
           Cancel
          </button>
       
          <button
           
            className="px-4 border ml-3 py-2 rounded bg-red-600 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Delete
          </button>
        
                               </div>
                             </div>
                           </div>
                    )}
        </div>
    )
}

export default ComplaintSubmission
