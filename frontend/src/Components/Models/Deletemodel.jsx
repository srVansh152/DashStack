import React, { useState } from 'react'
import { Bell, PencilIcon, Eye, MoreVertical, Plus, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../Common/Navbar/Navbar';
import { createComplaint } from '../../../../utils/api';


const complaints = [
  {
    id: '1001',
    complainer: {
      name: 'Evelyn Harper',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Unethical Behavior',
    description: 'Providing false information or deliberately.',
    unitNumber: 'A',
    unitId: '1001',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: '1002',
    complainer: {
      name: 'Esther Howard',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Preventive Measures',
    description: 'Regular waste collection services.',
    unitNumber: 'B',
    unitId: '1002',
    priority: 'Low',
    status: 'Open',
  },
  {
    id: '1003',
    complainer: {
      name: 'Jenny Wilson',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Unethical Behavior',
    description: 'Designated garages for residents and guests.',
    unitNumber: 'C',
    unitId: '1003',
    priority: 'High',
    status: 'Solve',
  },
  {
    id: '1004',
    complainer: {
      name: 'Guy Hawkins',
      avatar: '/placeholder.svg?height=32&width=32',
    },
    type: 'Preventive Measures',
    description: 'The celebration of Ganesh Chaturthi involves.',
    unitNumber: 'D',
    unitId: '1004',
    priority: 'Medium',
    status: 'Pending',
  },
]

function CreateComplain() {
  const [reporterName, setReporterName] = useState("Evelyn Harper");
  const [reportTitle, setReportTitle] = useState("Unethical Behavior");
  const [details, setDetails] = useState("The celebration of Ganesh Chaturthi involves the installation of clay idols in Resident.");
  const [section, setSection] = useState("A");
  const [unitNumber, setUnitNumber] = useState("1001");
  const [urgency, setUrgency] = useState("medium");
  const [currentStatus, setCurrentStatus] = useState("open");
  const [openModal, setOpenModal] = useState(false)
  const [openEditModel, setOpenEditModal] = useState(false)
  const [openViewModel, setOpenViewModal] = useState(false)
  const [openDeleteModel, setOpenDeleteModel] = useState(false)
  const [formData, setFormData] = useState({
    complainer: "",
    society: "",
    complaintName: "",
    description: "",
    wing: "",
    unitNumber: "",
    priority: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await createComplaint(formData);
        console.log('Complaint created successfully:', response);
        setOpenModal(false);
        setFormData({
            complainer: "",
            society: "",
            complaintName: "",
            description: "",
            wing: "",
            unitNumber: "",
            priority: "",
            status: "Pending",
        });
    } catch (error) {
        console.error('Error creating complaint:', error);
    }
  };
 
  const handleEditSubmit = (e) => {
    e.preventDefault();
  };
  
  const handleAddModel = () => {
    setOpenModal(true)
  }
  const handleEditModel = () => {
    setOpenEditModal(true)
  }
  const handleViewModel = () => {
    setOpenViewModal(true)
  }
  const handleDeleteModel = () => {
    setOpenDeleteModel(true)
  }



  const getPriorityStyles = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-500 text-white'
      case 'medium':
        return 'bg-blue-500 text-white'
      case 'low':
        return 'bg-green-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'open':
        return 'bg-blue-100 text-blue-800'
      case 'solve':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <Aside />
      <div className="main">
      <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0">
                            <div className="flex items-center">
                                <input
                                    type="search"
                                    placeholder="Search Here"
                                    className="p-2 pl-4 bg-gray-50 rounded-lg w-64 border-2 border-transparent focus:border-orange-500 focus:outline-none transition-all duration-300"
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

                                    {/* Dropdown Panel */}
                                    {isOpen && (
                                        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border overflow-hidden">
                                            {/* Header */}
                                            <div className="flex justify-between items-center p-4 border-b">
                                                <h2 className="font-semibold text-gray-800">Notification</h2>
                                                <button
                                                    onClick={() => { }}
                                                    className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                                                >
                                                    Clear all
                                                </button>
                                            </div>

                                            {/* Notification List */}
                                            <div className="max-h-[400px] overflow-y-auto">
                                                {notifications.map((notification) => (
                                                    <div key={notification.id} className="p-4 border-b hover:bg-gray-50 transition-colors">
                                                        <div className="flex gap-3">
                                                            {/* Avatar or Icon */}
                                                            {notification.type !== 'event' && (
                                                                <img
                                                                    src='/image/3504bec22d3fe96515e7c73aeadb9d13.jpg'
                                                                    alt=""
                                                                    className="w-10 h-10 rounded-full"
                                                                />
                                                            )}
                                                            {notification.type === 'event' && (
                                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                                    <span className="text-blue-500 text-xl">G</span>
                                                                </div>
                                                            )}

                                                            {/* Content */}
                                                            <div className="flex-1">
                                                                <div className="flex justify-between items-start">
                                                                    <div>
                                                                        <p className="text-sm text-gray-800">
                                                                            <span className="font-medium">{notification.user}</span>
                                                                            {notification.userCode && (
                                                                                <span className="text-gray-500"> ({notification.userCode})</span>
                                                                            )}
                                                                        </p>
                                                                        <p className="text-sm text-gray-600 mt-0.5">
                                                                            {notification.message}
                                                                            {notification.linkText && (
                                                                                <span className="text-blue-500"> {notification.linkText}</span>
                                                                            )}
                                                                            {notification.amount}
                                                                        </p>
                                                                        {notification.subtitle && (
                                                                            <p className="text-sm text-gray-600 mt-1">
                                                                                {notification.subtitle} {notification.amount}
                                                                            </p>
                                                                        )}
                                                                        {notification.description && (
                                                                            <p className="text-sm text-gray-500 mt-1">
                                                                                {notification.description}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                    <span className="text-xs text-gray-400">{notification.time}</span>
                                                                </div>

                                                                {/* Action Buttons */}
                                                                <div className="flex gap-2 mt-3">
                                                                    <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
                                                                        <Check className="w-4 h-4" />
                                                                        Accept
                                                                    </button>
                                                                    <button className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors flex items-center gap-1">
                                                                        <X className="w-4 h-4" />
                                                                        Decline
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Link to='/editprofile'>

                                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
                                        <img
                                            src="/api/placeholder/32/32"
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-500 transition-all"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">Moni Roy</p>
                                            <p className="text-xs text-gray-500">admin</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </header>


                        <div className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8 ">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Resident Tenant and Owner Details</h2>
              <button  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                Add New Resident details
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Complainer Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Complaint Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Unit Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {complaints.map((complaint) => (
                    <tr key={complaint.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-full object-cover"
                            src={complaint.complainer.avatar}
                            alt={complaint.complainer.name}
                          />
                          <span className="ml-2 text-sm font-medium text-gray-900">{complaint.complainer.name}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{complaint.type}</td>
                      <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">{complaint.description}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium text-gray-900">{complaint.unitNumber}</span>
                          <span className="text-sm text-gray-500">{complaint.unitId}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityStyles(
                            complaint.priority
                          )}`}
                        >
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(
                            complaint.status
                          )}`}
                        >
                          {complaint.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <button onClick={handleEditModel} className="rounded p-1 text-green-600 hover:bg-green-50">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button onClick={handleViewModel}  className="rounded p-1 text-blue-600 hover:bg-blue-50">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button onClick={handleDeleteModel} className="rounded p-1 text-red-600 hover:bg-red-50">
                            <Trash className="h-4 w-4" />
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
      </div>

      {openModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold mb-6">Create Complaint</h2>
        
          <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Complainer Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="complainer"
          value={formData.complainer}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Complaint Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="complaintName"
          value={formData.complaintName}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Description"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Wing<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="wing"
            value={formData.wing}
            onChange={handleChange}
            placeholder="Enter Wing"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Unit<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            placeholder="Enter Unit"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Priority<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          {["High", "Medium", "Low"].map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="radio"
                name="priority"
                value={level}
                onChange={handleChange}
                className="w-4 h-4 text-gray-600"
                checked={formData.priority === level}
              />
              <span className="ml-2 text-sm text-gray-600">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Status<span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4">
          {["Open", "Pending", "Solve"].map((status) => (
            <label key={status} className="flex items-center">
              <input
                type="radio"
                name="status"
                value={status}
                onChange={handleChange}
                className="w-4 h-4 text-gray-600"
                checked={formData.status === status}
              />
              <span className="ml-2 text-sm text-gray-600">{status}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={()=>setOpenModal(false)}
          type="button"
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          Create
        </button>
      </div>
    </form>
        </div>
          </div>
        </div>
      )}

{openViewModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="relative p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">View Complaint</h2>
            <button onClick={()=> setOpenViewModal(false)} className="text-gray-400 hover:text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <img
              src="/placeholder.svg?height=48&width=48"
              alt="Evelyn Harper"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">Evelyn Harper</h3>
              <p className="text-sm text-gray-500">Aug 5, 2024</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500">Request Name</label>
              <p className="text-gray-900">Unethical Behavior</p>
            </div>

            <div>
              <label className="block text-sm text-gray-500">Description</label>
              <p className="text-gray-900">
                Offering, giving, receiving, or soliciting of value to influence the actions of an.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-500">Wing</label>
                <p className="text-gray-900">A</p>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500">Unit</label>
                <p className="text-gray-900">1002</p>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500">Priority</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Medium
                </span>
              </div>
              
              <div>
                <label className="block text-sm text-gray-500">Status</label>
                <span className="text-blue-600">Open</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-4 rounded-b-lg">
        <Link to='/residence'>
          <button
            onClick={handleDeleteDetails}
            className="px-4 border py-2 rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
           Cancel
          </button>
       
          <button
           
            className="px-4 border ml-3 py-2 rounded bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Confirm
          </button>
          </Link>
                               </div>
                             </div>
                           </div>
                    )}
     
    </div>
  )
}

export default CreateComplain