import React, { useEffect, useState } from 'react';
import { Activity, DollarSign, EyeOff, Package, Users, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, UserCircle as UserCircleIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link, NavLink } from 'react-router-dom';
import Aside from '../../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../../Common/Navbar/Navbar';





function FinanceManagment() {

    const [openModel, setOpenModel] = useState(false);
    const [openViewModel, setOpenViewModel] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const tenants = [
        {
            name: "Cody Fisher",
            unitNumber: "A 1001",
            date: "10/02/2024",
            type: "Tenant",
            phoneNumber: "92524 34522",
            amount: "1000",
            penalty: "--",
            status: "Pending",
            payment: "Online",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Esther Howard",
            unitNumber: "B 1002",
            date: "11/02/2024",
            type: "Owner",
            phoneNumber: "92524 12355",
            amount: "1000",
            penalty: "250",
            status: "Done",
            payment: "Cash",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Jenny Wilson",
            unitNumber: "C 1003",
            date: "12/02/2024",
            type: "Tenant",
            phoneNumber: "92589 34522",
            amount: "1000",
            penalty: "--",
            status: "Pending",
            payment: "Online",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Robert Fox",
            unitNumber: "D 1004",
            date: "13/02/2024",
            type: "Owner",
            phoneNumber: "92524 12369",
            amount: "1000",
            penalty: "--",
            status: "Done",
            payment: "Cash",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Jacob Jones",
            unitNumber: "E 2001",
            date: "14/02/2024",
            type: "Tenant",
            phoneNumber: "92333 34522",
            amount: "1000",
            penalty: "250",
            status: "Pending",
            payment: "Online",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Albert Flores",
            unitNumber: "F 2002",
            date: "15/02/2024",
            type: "Owner",
            phoneNumber: "92524 34522",
            amount: "1000",
            penalty: "--",
            status: "Done",
            payment: "Cash",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Annette Black",
            unitNumber: "G 2003",
            date: "16/02/2024",
            type: "Tenant",
            phoneNumber: "92258 34522",
            amount: "1000",
            penalty: "250",
            status: "Pending",
            payment: "Online",
            image: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Jerome Bell",
            unitNumber: "H 2004",
            date: "17/02/2024",
            type: "Owner",
            phoneNumber: "92589 34522",
            amount: "1000",
            penalty: "--",
            status: "Done",
            payment: "Cash",
            image: "/placeholder.svg?height=40&width=40",
        },
    ]

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
                <Navbar />
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
                        <table className="min-w-full table-auto">
  <thead className="bg-[#EEF1FD]">
    <tr>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Name</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Unit Number</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Date</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Status</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Phone Number</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Amount</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Penalty</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Status</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Payment</th>
      <th className="px-6 py-3 text-left text-sm font-medium text-black uppercase">Action</th>
    </tr>
  </thead>
  <tbody>
    {tenants.map((tenant, index) => (
      <tr
        key={index}
        className={`text-sm ${index % 2 === 0 ? "bg-white" : "bg-white"} border-b border-gray-100`}
      >
        <td className="whitespace-nowrap px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={tenant.image}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-medium  text-[16px]">{tenant.name}</span>
          </div>
        </td>
        <td className="whitespace-nowrap px-4 py-3 font-medium text-[16px]">{tenant.unitNumber}</td>
        <td className="whitespace-nowrap px-4 py-3 text-black text-[16px]">{tenant.date}</td>
        <td className="whitespace-nowrap px-4 py-3">
          <span
            className={`inline-flex rounded-full px-2 py-1  text-[16px] font-semibold ${tenant.type === "Tenant"
              ? "bg-[#FFF1F8] text-[#EC4899]"
              : "bg-[#F1F0FF] text-[#4F46E5]"
            }`}
          >
            {tenant.type}
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-black text-[16px]">{tenant.phoneNumber}</td>
        <td className="whitespace-nowrap px-4 py-3">
          <span className="text-green-600 text-[16px]">₹ {tenant.amount}</span>
        </td>
        <td className="whitespace-nowrap px-4 py-3 text-[16px]">
          <span className={tenant.penalty !== "--" ? "text-white bg-[#E74C3C] px-3 py-1 rounded-full" : "text-gray-500"}>
            {tenant.penalty}
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-3">
          <span
            className={`inline-flex rounded-full text-[16px] px-2 py-1 text-sm font-semibold ${tenant.status === "Pending"
              ? "bg-[#FFC3131A] text-[#FFC313]"
              : "bg-[#EBF5EC] text-[#39973D]"
            }`}
          >
            {tenant.status}
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-3">
          <span
            className={`inline-flex rounded-full text-[16px] px-2  text-sm py-1 font-semibold ${tenant.payment === "Online"
              ? "bg-[#EEF1FD] text-[#5678E9]"
              : "bg-[#F4F4F4] text-black"
            }`}
          >
            {tenant.payment}
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-3">
          <button onClick={handleViewDetails} className="rounded-full p-1 hover:bg-gray-100">
            <img src="/public/image/Dashborad/view.png" alt="" srcset="" />
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
                                    <button onClick={() => setOpenViewModel(false)} className="text-gray-500 hover:text-gray-700">
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
                                        <div className="font-medium text-gray-900 text-[16px]">Cody Fisher</div>
                                        <div className="text-sm text-gray-500 text-[16px]">Feb 10, 2024</div>
                                    </div>
                                </div>

                                {/* Grid */}
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1 text-[16px]">Wing</div>
                                        <div className="text-sm font-medium text-blue-600 text-[16px]">A</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1 text-[16px]">Unit</div>
                                        <div className="text-sm font-medium text-[16px]">1001</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1 text-[16px]">Status</div>
                                        <div className="inline-flex text-[16px] items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                            Owner
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1 text-[16px]">Amount</div>
                                        <div className="text-sm font-medium text-green-600 text-[16px]">₹1000</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1 text-[16px]">Penalty</div>
                                        <div className="text-sm font-medium text-[16px]">--</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Status</div>
                                        <div className="inline-flex items-center gap-1 text-[16px] text-sm font-medium text-yellow-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 text-[16px]" />
                                            Pending
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1 text-[16px]">Payment</div>
                                        <div className="inline-flex text-[16px] items-center gap-1 text-sm font-medium">
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
