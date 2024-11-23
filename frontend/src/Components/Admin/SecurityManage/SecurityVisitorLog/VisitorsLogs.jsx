import React, { useState } from 'react'
import { Bell, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';


const visitors = [
  { id: 1, name: "Evelyn Harper", phone: "97852 12369", date: "10/01/2024", unit: "1001", time: "3:45 PM" },
  { id: 2, name: "Wade Warren", phone: "97852 25893", date: "11/01/2024", unit: "1002", time: "2:45 AM" },
  { id: 3, name: "Guy Hawkins", phone: "97589 95563", date: "12/01/2024", unit: "1003", time: "3:00 PM" },
  { id: 4, name: "Robert Fox", phone: "97444 95323", date: "13/01/2024", unit: "1004", time: "5:30AM" },
  { id: 5, name: "Jacob Jones", phone: "97123 12583", date: "14/01/2024", unit: "2001", time: "12:45 PM" },
  { id: 6, name: "Ronald Richards", phone: "97259 12363", date: "15/01/2024", unit: "2002", time: "3:45 PM" },
  { id: 7, name: "Annette Black", phone: "97569 77763", date: "16/01/2024", unit: "2003", time: "6:00 AM" },
  { id: 8, name: "Jerome Bell", phone: "97123 25883", date: "17/01/2024", unit: "2004", time: "3:45 PM" },
  { id: 9, name: "Theresa Webb", phone: "97259 36973", date: "18/01/2024", unit: "3001", time: "7:00 PM" },
  { id: 10, name: "Kathryn Murphy", phone: "97577 66963", date: "19/01/2024", unit: "3002", time: "6:00 AM" },
  { id: 11, name: "Eleanor Pena", phone: "97259 69963", date: "20/01/2024", unit: "3003", time: "7:00 PM" }
];

function VisitorsLogs() {
  const [isOpen, setIsOpen] = useState(false)
  
  const notifications = [
    {
      id: 1,
      user: 'Evelyn Harper',
      userCode: 'A- 101',
      message: 'gave a fund of',
      amount: '1000 rupees for Navratri.',
      time: '30 Minutes ago',
      avatar: '/api/placeholder/40/40',
      type: 'fund',
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
      type: 'maintenance',
    },
    {
      id: 3,
      user: 'Ganesh Chaturthi',
      userCode: 'A- 101',
      amount: '₹ 1,500',
      subtitle: 'Per Person Amount :',
      description:
        'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
      time: '2 days ago',
      type: 'event',
    },
  ]

  return (
    <div>
      <Aside />
      <div className="main">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
          <div className="flex flex-1 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Home</span>
              <span className="text-gray-500">/</span>
              <span className="text-blue-500">Visitor Logs</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-20 mt-2 w-80 overflow-hidden rounded-lg border bg-white shadow-lg md:w-96">
                  <div className="flex items-center justify-between border-b p-4">
                    <h2 className="font-semibold text-gray-800">Notifications</h2>
                    <button className="text-sm text-blue-500 transition-colors hover:text-blue-600">
                      Clear all
                    </button>
                  </div>
                  <div className="max-h-96 overflow-hidden">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="border-b p-4 transition-colors hover:bg-gray-50">
                        <div className="flex gap-3">
                          {notification.type !== 'event' ? (
                            <img src="/api/placeholder/40/40" alt="" className="h-10 w-10 rounded-full" />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <span className="text-xl text-blue-500">G</span>
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">
                              <span className="font-medium">{notification.user}</span> {notification.message}
                              {notification.linkText && <span className="text-blue-500"> {notification.linkText}</span>}
                              {notification.amount}
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

            <Link
              to="/admin/editprofile"
              className="hidden cursor-pointer items-center gap-2 rounded-lg p-2 transition-all hover:bg-gray-50 sm:flex"
            >
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full border-2 border-transparent transition-all hover:border-orange-500"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">Moni Roy</p>
                <p className="text-xs text-gray-500">admin</p>
              </div>
            </Link>
          </div>
        </header>

        <div className="container p-2">
          <div className="min-h-screen overflow-hidden bg-gray-50 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Visitor Logs</h1>
              
            </div>

            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Visitor Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Phone Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Unit Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {visitors.map((visitor) => (
                    <tr key={visitor.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-sm text-gray-600">
                              {visitor.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-900">{visitor.name}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{visitor.phone}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{visitor.date}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {visitor.unit}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{visitor.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default VisitorsLogs