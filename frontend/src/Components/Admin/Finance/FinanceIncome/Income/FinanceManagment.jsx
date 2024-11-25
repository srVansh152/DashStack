import React, { useEffect, useState } from 'react';
import { Activity, DollarSign, EyeOff, Package, Users,  Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, UserCircle as UserCircleIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../../Common/Navbar/Navbar';





function FinanceManagment() {
    
    const [openModel, setOpenModel] = useState(false);
    const [openViewModel, setOpenViewModel] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [maintenanceData, setMaintenanceData] = useState([
        {
            name: 'John Doe',
            unitNumber: 'A101',
            date: '2023-04-15',
            type: 'Tenant',
            phoneNumber: '123-456-7890',
            amount: 1000,
            penalty: null,
            status: 'Paid',
            paymentMethod: 'Online'
        },
        // Add more sample data as needed
    ]);

    const handleAddDetails = () => {
        setOpenModel(true);
    };
    const handleViewDetails = () => {
        setOpenViewModel(true);
    };

    

    return (
        <div>
            <Aside />
            <div className="main">
             <Navbar/>
                {/* Summary Cards */}
                <div className="p-8 ">
                    <div className="flex flex-col gap-4 p-4 bg-white md:flex-row">
                        {/* Maintenance Amount Card */}
                        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm relative">
                            <div className="absolute left-0 top-4 bottom-4 w-1 bg-green-500 rounded-r-full" />
                            <div className="pl-4">
                                <h3 className="text-sm text-gray-600 font-medium mb-1">Maintenance Amount</h3>
                                <div className="flex items-center">
                                    <span className="text-2xl font-semibold text-gray-900">₹</span>
                                    <span className="text-2xl font-semibold text-gray-900 ml-1">0</span>
                                </div>
                            </div>
                        </div>

                        {/* Penalty Amount Card */}
                        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm relative">
                            <div className="absolute left-0 top-4 bottom-4 w-1 bg-red-500 rounded-r-full" />
                            <div className="pl-4">
                                <h3 className="text-sm text-gray-600 font-medium mb-1">Penalty Amount</h3>
                                <div className="flex items-center">
                                    <span className="text-2xl font-semibold text-gray-900">₹</span>
                                    <span className="text-2xl font-semibold text-gray-900 ml-1">0</span>
                                </div>
                            </div>
                        </div>

                        {/* Set Maintenance Button */}
                        <div className="flex items-center">
                            <button onClick={handleAddDetails} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                                Set Maintenance
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b mb-6">
                        <div className="flex space-x-4 shadow">
                            <button className="px-4 py-2 text-white bg-orange-500 rounded-t-lg">
                                Maintenance
                            </button>
                            <Link to="/admin/otherincome" className="px-4 py-2 text-gray-600">
                                Other Income
                            </Link>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b">
                            <h2 className="text-lg font-semibold">Maintenance Details</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Number</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Penalty</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {maintenanceData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <UserCircleIcon className="w-8 h-8 text-gray-400 mr-2" />
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{item.unitNumber}</td>
                                            <td className="px-6 py-4">{item.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.type === 'Tenant' ? 'bg-pink-100 text-pink-800' : 'bg-purple-100 text-purple-800'
                                                    }`}>
                                                    {item.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">{item.phoneNumber}</td>
                                            <td className="px-6 py-4 text-green-600">₹ {item.amount}</td>
                                            <td className="px-6 py-4">
                                                {item.penalty ? (
                                                    <span className="text-red-600">{item.penalty}</span>
                                                ) : (
                                                    "--"
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.paymentMethod === 'Online' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {item.paymentMethod}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button onClick={handleViewDetails} className="text-blue-600 hover:text-blue-800">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {openModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Set Maintenance</h2>

                                <div className="space-y-2 mb-8">
                                    <label className="block">
                                        <span className="text-sm font-medium text-gray-900">Password<span className="text-red-500">*</span></span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                            defaultValue="password123"
                                        />
                                        <button
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button onClick={() => setOpenModel(false)} className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                                        Cancel
                                    </button>
                                    <Link to='/addmain'>
                                        <button className="flex-1 px-4 py-3 rounded-xl bg-orange-500 text-white font-medium  hover:bg-orange-600 transition-colors duration-200">
                                            Continue
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {openViewModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">View Maintenance Details</h2>
            <button onClick={()=> setOpenViewModel(false)} className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">Cody Fisher</div>
              <div className="text-sm text-gray-500">Feb 10, 2024</div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Wing</div>
              <div className="text-sm font-medium text-blue-600">A</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Unit</div>
              <div className="text-sm font-medium">1001</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Status</div>
              <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Owner
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Amount</div>
              <div className="text-sm font-medium text-green-600">₹1000</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Penalty</div>
              <div className="text-sm font-medium">--</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Status</div>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-yellow-600">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                Pending
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Payment</div>
              <div className="inline-flex items-center gap-1 text-sm font-medium">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cash
              </div>
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

export default FinanceManagment
