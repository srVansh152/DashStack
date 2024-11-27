import React, { useState } from 'react'

import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, MoreHorizontal  } from 'lucide-react';
import { Link } from 'react-router-dom';
import Aside from '../Common/SideBar/AdminSideBar/Aside';




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
        <Navbar/>
        <div className="container-fulid p-2">
          <div className="min-h-screen overflow-hidden bg-gray-50 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Create Complaint</h1>
              <button onClick={handleAddModel} className="rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">
                <Plus className="mr-2 inline-block h-4 w-4" />
                Create Complaint
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
                           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                             <div className="p-5">
                             <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Do you want to vacate the finlay flat?
          </h2>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete all details?
          </p>
        </div>
          </div>
        </div>
      )}



{openEditModel && (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
    <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Edit Complaint</h2>
        <form className="space-y-4" onSubmit={handleEditSubmit}>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium">
              Complainer Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={reporterName}
              onChange={(e) => {
                setReporterName(e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium">
              Complaint Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={reportTitle}
              onChange={(e) => {
                setReportTitle(e.target.value);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium">
              Description*<span className="text-red-500">*</span>
            </label>
            <textarea
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Wing<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={section}
                onChange={(e) => {
                  setSection(e.target.value);
                 
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium">
                Unit<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={unitNumber}
                onChange={(e) => {
                  setUnitNumber(e.target.value);
                 
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium">
              Urgency<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {["high", "medium", "low"].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="urgency"
                    value={level}
                    checked={urgency === level}
                    onChange={(e) => {
                      setUrgency(e.target.value);
                     
                    }}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium">
              Status<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {["open", "pending", "resolved"].map((status) => (
                <label key={status} className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={currentStatus === status}
                    onChange={(e) => {
                      setCurrentStatus(e.target.value);
                      
                    }}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <span className="ml-2 text-sm">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setOpenEditModal(false)}
              type="button"
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{openDeleteModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Delete Complain?</h2>
          
          <p className="text-gray-500">
            Are you sure you want to delete this Complain?
          </p>
          
          <div className="flex gap-4 pt-2">
            <button onClick={()=>setOpenDeleteModel(false)}
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
  )
}

export default Deletemodel