import React, { useState } from 'react'

import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';


const Uviw = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const handleAddModel = () => {
    setOpenModel(true);
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
  return (
    <div className='flex h-screen bg-gray-50'>
      <UAside />
      <div className="flex-1 overflow-auto">
        <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm  top-0 z-10">
          {/* Search Bar - hidden on smaller screens */}
          <div className="flex items-center ms-3 gap-2 text-sm">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-500">/</span>
            <span className="text-blue-500">Maintenance Invoices</span>
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
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Maintenance Invoices</h2>
              <select className="border rounded-lg px-4 py-2">
                <option>Month</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="text-left border-b bg-gray-100">
                    <th className="pb-3 px-4">Invoice ID</th>
                    <th className="pb-3 px-4">Owner Name</th>
                    <th className="pb-3 px-4">Bill Date</th>
                    <th className="pb-3 px-4">Payment Date</th>
                    <th className="pb-3 px-4">Phone Number</th>
                    <th className="pb-3 px-4">Email</th>
                    <th className="pb-3 px-4">Maintenance Amount</th>
                    <th className="pb-3 px-4">Pending Amount</th>
                    <th className="pb-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "152563",
                      owner: "Terry Rhiel Madsen",
                      billDate: "10/02/2024",
                      paymentDate: "10/02/2024",
                      phone: "9764816457",
                      email: "FrancesLHarris@rhyta.com",
                      amount: "1500",
                      pending: "2500",
                    },
                    {
                      id: "152563",
                      owner: "Marcus Vaccaro",
                      billDate: "10/02/2024",
                      paymentDate: "10/02/2024",
                      phone: "9601765987",
                      email: "DavidRSkley@dayrep.com",
                      amount: "1500",
                      pending: "6500",
                    },
                    // Add more rows as needed
                  ].map((invoice, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">{invoice.id}</td>
                      <td className="py-4 px-4">{invoice.owner}</td>
                      <td className="py-4 px-4">{invoice.billDate}</td>
                      <td className="py-4 px-4">{invoice.paymentDate}</td>
                      <td className="py-4 px-4">{invoice.phone}</td>
                      <td className="py-4 px-4">{invoice.email}</td>
                      <td className="py-4 px-4 text-green-600">₹ {invoice.amount}</td>
                      <td className="py-4 px-4 text-red-500">{invoice.pending}</td>
                      <td className="py-4 px-4">
                        <button
                          onClick={handleAddModel}
                          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                        >
                          •••
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      {openModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-medium">Maintenance Invoices</h2>
              <button onClick={() => setOpenModel(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Invoice Id</div>
                  <div>125463</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Owner Name</div>
                  <div>Terry Rhiel Madsen</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Bill Date</div>
                  <div>10/02/2024</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Payment Date</div>
                  <div>10/02/2024</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500">Phone Number</div>
                <div>6549873521</div>
              </div>

              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div>MaryDHurst@jourrapide.com</div>
              </div>

              <div>
                <div className="text-sm text-gray-500">Address</div>
                <div>2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Maintenance Amount</div>
                  <div className="text-green-600">₹ 1500.00</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Penalty</div>
                  <div className="text-red-500">₹ 350.00</div>
                </div>
                <div className="flex justify-between font-medium">
                  <div>Grand Total</div>
                  <div>₹ 1850.00</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500">Note</div>
                <div className="text-sm text-gray-600">
                  A visual representation of your spending categories visual representation.
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Uviw
