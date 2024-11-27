import React, { useState } from 'react'
import { Bell, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../Common/Navbar/Navbar';


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
 

  return (
    <div>
      <Aside />
      <div className="main">
     <Navbar/>

        <div className="container-fulid p-2">
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