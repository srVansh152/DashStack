import React, { useState } from 'react'

import {ArrowLeft, FileText, FileImage,Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, MoreHorizontal  } from 'lucide-react';
import { Link } from 'react-router-dom';
import Aside from '../../Common/SideBar/AdminSideBar/Aside';

const MemberList = () => {
    const [isOpen, setIsOpen] = useState(false);
   




    const memberData = [
        { id: "A", unit: "1001", date: "10/07/2024", status: "Owner", phone: "92524 12365", amount: "1000", payment: "Cash" },
        { id: "B", unit: "1002", date: "11/07/2024", status: "Tenant", phone: "92458 12865", amount: "1000", payment: "Online" },
        { id: "C", unit: "1003", date: "12/07/2024", status: "Owner", phone: "92434 2365", amount: "1000", payment: "Cash" },
        { id: "D", unit: "1004", date: "13/07/2024", status: "Tenant", phone: "92536 12448", amount: "1000", payment: "Online" },
        { id: "E", unit: "2001", date: "14/07/2024", status: "Owner", phone: "92328 23065", amount: "1000", payment: "Cash" },
        { id: "F", unit: "2002", date: "15/07/2024", status: "Tenant", phone: "92524 12365", amount: "1000", payment: "Online" },
        { id: "G", unit: "2003", date: "16/07/2024", status: "Owner", phone: "92484 12025", amount: "1000", payment: "Cash" },
        { id: "H", unit: "2004", date: "17/07/2024", status: "Tenant", phone: "921021 12425", amount: "1000", payment: "Online" },
        { id: "I", unit: "3001", date: "18/07/2024", status: "Owner", phone: "92728 14235", amount: "1000", payment: "Online" },
        { id: "A", unit: "3002", date: "19/07/2024", status: "Tenant", phone: "92830 12329", amount: "1000", payment: "Cash" },
        { id: "B", unit: "3003", date: "20/07/2024", status: "Owner", phone: "92208 12389", amount: "1000", payment: "Online" },
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
      <header className="bg-white p-4 border-b flex justify-between items-center shadow-sm sticky top-0 z-10">
          {/* Search Bar - hidden on smaller screens */}
          <div className="flex items-center flex-1">
          <div className="flex items-center space-x-2 text-lg">
                <span className="text-gray-600">Home</span>
                <span className="text-gray-400">›</span>
                <span className="text-[#4318FF]">Maintenance Details</span>
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


        <main className="p-6">
  <div className="bg-white rounded-xl shadow-sm">
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Ganesh Chaturthi Participator Member List
      </h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
        <thead>
  <tr className="bg-gray-200 rounded-lg">
    <th className="pb-4 pt-2 px-3 text-md font-semibold text-gray-700 border  text-left">
      Unit Number
    </th>
    <th className="pb-4 pt-2  text-md font-semibold text-gray-700 border text-left">
      Payment Date
    </th>
    <th className="pb-4 pt-2 text-md font-semibold text-gray-700 border text-left">
      Tenant/Owner Status
    </th>
    <th className="pb-4 pt-2  text-md font-semibold text-gray-700 border text-left">
      Phone Number
    </th>
    <th className="pb-4 pt-2  text-md font-semibold text-gray-700 border text-left">
      Amount
    </th>
    <th className="pb-4 pt-2  text-md font-semibold text-gray-700 border  text-left">
      Payment
    </th>
  </tr>
</thead>
          <tbody>
            {memberData.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-4 text-md">
                  <span className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      ['A', 'B', 'C'].includes(row.id) ? 'bg-blue-50 text-blue-600' :
                      ['D', 'E', 'F'].includes(row.id) ? 'bg-purple-50 text-purple-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {row.id}
                    </span>
                    <span className="font-medium text-gray-800">{row.unit}</span>
                  </span>
                </td>
                <td className="py-4 text-gray-700 text-md font-medium">{row.date}</td>
                <td className="py-4 text-lg">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-base font-medium ${
                    row.status === 'Owner' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'bg-pink-50 text-pink-600'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current"></span>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 text-gray-700 text-md font-medium">{row.phone}</td>
                <td className="py-4 text-green-600 text-md font-medium">₹ {row.amount}</td>
                <td className="py-4 text-sm">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-md font-medium ${
                    row.payment === 'Cash'
                      ? 'bg-gray-100 text-gray-700'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {row.payment === 'Cash' ? '💵' : '🌐'}
                    <span className="ml-1">{row.payment}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</main>

      </div>
    </div>
  )
}

export default MemberList
