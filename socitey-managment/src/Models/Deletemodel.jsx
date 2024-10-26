import React, { useState } from 'react'
import Aside from '../Components/Aside'
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, MoreHorizontal  } from 'lucide-react';
import { Link } from 'react-router-dom';




function Deletemodel() {
    const [isOpen, setIsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    
    const [openDeleteModel, setOpenDeleteModel] = useState(true);
    const [status, setStatus] = useState('occupied');
    const [agreement, setAgreement] = useState(false);
    const [wing, setWing] = useState('A')
    const [unit, setUnit] = useState('1001')

   
    const handleDeleteDetails = () => {
        setOpenDeleteModel(false);
    };

    const residents = [
        { id: 1, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1001', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 1, vehicle: 2 },
        { id: 2, name: '-', avatar: '', unitNumber: '1002', unitStatus: 'Vacant', residentStatus: '-', phoneNumber: '--', member: '-', vehicle: '-' },
        { id: 3, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1003', unitStatus: 'Occupied', residentStatus: 'Owner', phoneNumber: '97587 85828', member: 1, vehicle: 4 },
        { id: 4, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1004', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 4, vehicle: 2 },
        { id: 5, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1004', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 4, vehicle: 2 },
        { id: 6, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1004', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 4, vehicle: 2 },
        { id: 7, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1004', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 4, vehicle: 2 },
        { id: 8, name: 'Evelyn Harper', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '1004', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 4, vehicle: 2 },
        { id: 9, name: 'Robert Fox', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '2002', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 3, vehicle: 2 },
        { id: 10, name: 'Robert Fox', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '2002', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 3, vehicle: 2 },
        { id: 11, name: 'Robert Fox', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '2002', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 3, vehicle: 2 },
        { id: 12, name: 'Robert Fox', avatar: '/placeholder.svg?height=40&width=40', unitNumber: '2002', unitStatus: 'Occupied', residentStatus: 'Tenant', phoneNumber: '97587 85828', member: 3, vehicle: 2 },
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
        <Aside/>
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
            <div className=" bg-white shadow-md rounded-lg">
            <div className="overflow-y-auto max-h-96"> {/* Container to handle overflow */}
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Number</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Status</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resident Status</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {residents.map((resident) => (
        <tr key={resident.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                {resident.avatar ? (
                  <img className="h-10 w-10 rounded-full" src={resident.avatar} alt="" />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                )}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{resident.name}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{resident.unitNumber}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              resident.unitStatus === 'Occupied' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
            }`}>
              {resident.unitStatus}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              resident.residentStatus === 'Tenant' ? 'bg-pink-100 text-pink-800' : 
              resident.residentStatus === 'Owner' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {resident.residentStatus}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.phoneNumber}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.member}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.vehicle}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button  className="text-green-600 hover:text-green-900 mr-2">
              <Edit className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
            </div>
          </div>
        </div>
        
      
                        
      </div> 

      {openDeleteModel && (
                           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                             <div className="p-5">
                             <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Do you want to vacate the finlay flat?
          </h2>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete all details?
          </p>
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

export default Deletemodel
