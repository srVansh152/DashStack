import React, { useState } from 'react'

import { ArrowLeft, FileText, FileImage, Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';




function Residence() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openProfileModel, setOpenProfilModel] = useState(false);

  const [status, setStatus] = useState('occupied');
  const [agreement, setAgreement] = useState(false);

  const handleAddDetails = () => {
    setOpenModel(true);
  };
  const handleDeleteDetails = () => {
    setOpenDeleteModel(true);
  };

  const handleProfileDetails = () => {
    setOpenProfilModel(true);
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
      <Aside />
      <div className="main">
        <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
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


        <div className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Resident Tenant and Owner Details</h2>
              <button
                onClick={handleAddDetails}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Add New Resident Details
              </button>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto"> {/* Allows horizontal scrolling if needed */}
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
                                <img className="h-10 w-10 rounded-full" src={"public/image/profile.png"} alt="" />
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
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${resident.unitStatus === 'Occupied' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                            {resident.unitStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${resident.residentStatus === 'Tenant' ? 'bg-pink-100 text-pink-800' : resident.residentStatus === 'Owner' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                            {resident.residentStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.phoneNumber}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.member}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.vehicle}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button onClick={handleDeleteDetails} className="text-green-600 hover:text-green-900 mr-2">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button onClick={handleProfileDetails} className="text-gray-600 hover:text-gray-900">
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



        {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Residence Status</h2>
                <div className=" grid-cols-2 grid gap-4 py-2">

                  <label className=" items-center p-3 rounded-lg border border-orange-500 ">
                    <input type="radio" name="status" className="form-radio text-orange-500 bg-orange-500" defaultChecked />

                    <span className="text-black ml-2">Occupied </span>
                  </label>
                  <label className=" items-center p-3 rounded-lg border border-gray-200">
                    <input disabled type="radio" name="status" className="form-radio text-gray-400" />
                    <span className="text-gray-600  ml-2">Vacate</span>
                  </label>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <input type="checkbox" className="form-checkbox text-orange-500 rounded" />
                  <span className="ml-2">By submitting, you agree to select Occupied</span>
                </div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setOpenModel(false)} className="px-5 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <Link to="/admin/form">
                    <button className="px-4 ml-2 w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md hover:from-orange-600 hover:to-orange-700 transition-colors">
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {openDeleteModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Update Status</h2>
                <div className=" grid-cols-2 grid gap-4 py-2">
                  <label className=" items-center p-3 rounded-lg border border-gray-200">
                    <input disabled type="radio" name="status" className="form-radio text-gray-400" />
                    <span className="text-gray-600  ml-2">Occupied</span>
                  </label>
                  <label className=" items-center p-3 rounded-lg border border-orange-500 ">
                    <input type="radio" name="status" className="form-radio text-orange-500 bg-orange-500" defaultChecked />

                    <span className="text-black ml-2">Vacate</span>
                  </label>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <input type="checkbox" className="form-checkbox text-orange-500 rounded" />
                  <span className="ml-2">By submitting, you agree to select Occupied</span>
                </div>

                <div className="flex justify-between mt-6">

                  <button onClick={() => setOpenDeleteModel(false)} className="px-5 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <Link to='/viewmodel'>
                    <button className="px-4 ml-2 w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md hover:from-orange-600 hover:to-orange-700 transition-colors">
                      Save
                    </button>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        )}
        {openProfileModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center">
                  <button onClick={() => setOpenProfilModel(false)} className="mr-2 text-gray-600 hover:text-gray-800">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <h1 className="text-lg font-semibold text-gray-800">View Owner Details</h1>
                </div>

                <div className="px-4 py-6">
                  <div className="flex flex-col items-center mb-6">
                    <img src="/public/image/profile.png" alt="Roger Lubin" className="w-20 h-20 rounded-full mb-2" />
                    <h2 className="text-xl font-semibold text-gray-800">Roger Lubin</h2>
                    <p className="text-sm text-gray-600">RogerLubin@gmail.com</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Wing', value: 'A' },
                      { label: 'Unit', value: '101' },
                      { label: 'Age', value: '20' },
                      { label: 'Gender', value: 'Male' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-medium text-gray-800">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Document</h3>
                    {[
                      { name: 'Adhaarcard Front Side.JPG', size: '3.5 MB', icon: FileImage },
                      { name: 'Address Proof Front Side.PDF', size: '3.5 MB', icon: FileText },
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                        <div className="flex items-center">
                          <doc.icon className="h-5 w-5 text-blue-500 mr-2" />
                          <div>
                            <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.size}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-blue-800">Member Counting</h3>
                      <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">02</span>
                    </div>
                    {[
                      { label: 'First Name', value: 'Roger Lubin' },
                      { label: 'Phone No', value: '9123455555' },
                      { label: 'Age', value: '20' },
                      { label: 'Gender', value: 'Male' },
                      { label: 'Relation', value: 'Brother' },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between py-1">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-medium text-gray-800">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  )
}

export default Residence
