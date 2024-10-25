import React, { useState } from 'react';
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';


const DashboardLayout = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const activities = [
        {
            letter: 'S',
            color: 'bg-orange-100 text-orange-500',
            title: 'Society Meeting',
            time: '8:00 PM To 10:00 PM',
            date: '24-09-2024'
        },
        {
            letter: 'H',
            color: 'bg-green-100 text-green-500',
            title: 'Holi Festival',
            time: '8:00 PM To 10:00 PM',
            date: '24-09-2024',
            tag: 'Arun Chauhan'
        },
        {
            letter: 'G',
            color: 'bg-blue-100 text-blue-500',
            title: 'Ganesh Chaturthi',
            time: '8:00 PM To 10:00 PM',
            date: '24-09-2024'
        },
        {
            letter: 'N',
            color: 'bg-red-100 text-red-500',
            title: 'Navratri Festival',
            time: '8:00 PM To 10:00 PM',
            date: '24-09-2024'
        },
        {
            letter: 'S',
            color: 'bg-yellow-100 text-yellow-500',
            title: 'Society Meeting',
            time: '8:00 PM To 10:00 PM',
            date: '24-09-2024'
        }
    ];

    const chartData = [
        { month: 'Jan', value: 10000 },
        { month: 'Feb', value: 15000 },
        { month: 'Mar', value: 25000 },
        { month: 'Apr', value: 20000 },
        { month: 'May', value: 30000 },
        { month: 'Jun', value: 22000 },
        { month: 'Jul', value: 28000 },
        { month: 'Aug', value: 25000 },
        { month: 'Sep', value: 35000 },
        { month: 'Oct', value: 30000 },
        { month: 'Nov', value: 40000 },
        { month: 'Dec', value: 55000 }
    ];

    const maintenanceData = [
        { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
        { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
        { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
        { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
        { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" }
    ];

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
        <div className="flex h-screen bg-gray-50">
            <div className="w-64 bg-white border-r shadow-sm">
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-orange-500 cursor-pointer hover:text-orange-600 transition-colors">DashStack</h1>
                </div>
                <nav className="mt-4">
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            {...item}
                            active={activeMenu === item.label}
                            hovered={hoveredMenu === item.label}
                            onClick={() => setActiveMenu(item.label)}
                            onMouseEnter={() => setHoveredMenu(item.label)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        />
                    ))}
                </nav>
            </div>
            <div className="flex-1 overflow-auto">
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
                                className="relative p-2 z-50 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 z- right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
                

<div className="">
<div className='w-full'>
  <img src="/image/blacnk.png" alt="" />
</div>
<div className="w-[1000px] mx-auto mt-[-100px] flex     p-4">
  <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
          <Pencil className="w-4 h-4 mr-2" />
          Edit Profile
        </button>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <div className="relative w-40 h-40">
            <img
              src="/image/profile.png"
              alt="Profile"
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
              <Pencil className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mt-4">Arlene McCoy</h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'First Name', value: '' },
            { label: 'Last Name', value: '' },
            { label: 'Phone Number', value: '' },
            { label: 'Email Address', value: '' },
            { label: 'Select Society', value: '' },
            { label: 'Country', value: '' },
            { label: 'State', value: '' },
            { label: 'City', value: '' },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-medium text-gray-700">{field.label}*</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={field.value}
                readOnly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>

            </div>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, active, hovered, onClick, onMouseEnter, onMouseLeave }) => (
    <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 relative
      ${active ? 'bg-orange-50 text-orange-500 font-medium' : 'text-gray-600 hover:bg-orange-50/50 hover:text-orange-500'}
      ${hovered ? 'shadow-sm' : ''}
    `}
    >
        <Icon className={`w-5 h-5 transition-transform duration-200 ${hovered ? 'scale-110' : ''}`} />
        <span>{label}</span>
        {active && (
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l"></div>
        )}
    </button>
);

const StatsCard = ({ label, value, icon: Icon, color }) => (
    <div className="bg-white rounded-lg p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
        <div>
            <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{label}</p>
            <p className="text-2xl font-semibold mt-1 group-hover:scale-105 transition-transform">{value}</p>
        </div>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 ${color}`}>
            <Icon className="w-5 h-5 text-white" />
        </div>
    </div>
);

const ComplaintRow = ({ name, date, priority, status }) => (
    <tr className="border-t hover:bg-gray-50 transition-colors group">
        <td className="py-4 flex items-center gap-2">
            <img
                src="/api/placeholder/32/32"
                alt=""
                className="w-8 h-8 rounded-full group-hover:ring-2 ring-orange-500 transition-all"
            />
            {name}
        </td>
        <td className="py-4">{date}</td>
        <td className="py-4">
            <span className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(priority)}`}>
                {priority}
            </span>
        </td>
        <td className="py-4">
            <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
                {status}
            </span>
        </td>
        <td className="py-4">
            <div className="flex gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-green-500 hover:bg-green-50 rounded-full transition-colors">
                    <Edit className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">

                    <Eye className="w-4 h-4" />
                </button>
                <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
        </td>
    </tr>
);

const MaintenanceItem = ({ name, duration, amount }) => (
    <div className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-gray-50 transition-all cursor-pointer group">
        <div className="flex items-center gap-3">
            <img
                src="/api/placeholder/32/32"
                alt=""
                className="w-8 h-8 rounded-full group-hover:ring-2 ring-orange-500 transition-all"
            />
            <div>
                <p className="font-medium group-hover:text-orange-500 transition-colors">{name}</p>
                <p className="text-sm text-gray-500">{duration}</p>
            </div>
        </div>
        <p className="text-red-500 group-hover:scale-105 transition-transform">₹ {amount}</p>
    </div>
);

const getPriorityColor = (priority) => {
    const colors = {
        High: 'bg-red-100 text-red-600',
        Medium: 'bg-blue-100 text-blue-600',
        Low: 'bg-green-100 text-green-600'
    };
    return colors[priority];
};

const getStatusColor = (status) => {
    const colors = {
        Open: 'bg-blue-100 text-blue-600',
        Pending: 'bg-yellow-100 text-yellow-600',
        Solved: 'bg-green-100 text-green-600'
    };
    return colors[status];
};

const sidebarItems = [
    { icon: Activity, label: 'Dashboard' },
    { icon: Users, label: 'Resident Management' },
    { icon: DollarSign, label: 'Financial Management' },
    { icon: Package, label: 'Facility Management' },
    { icon: Bell, label: 'Complaint Tracking' },
    { icon: Settings, label: 'Security Management' },
    { icon: Users, label: 'Security Guard' },
    { icon: Bell, label: 'Announcement' },
    { icon: LogOut, label: 'Logout' }
];

const statsCards = [
    { label: 'Total Balance', value: '₹ 2,22,520', icon: DollarSign, color: 'bg-orange-500' },
    { label: 'Total Income', value: '₹ 55,000', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Total Expense', value: '₹ 20,550', icon: DollarSign, color: 'bg-blue-500' },
    { label: 'Total Unit', value: '20', icon: Users, color: 'bg-purple-500' }
];

const complaints = [
    { name: 'Evelyn Harper', date: '01/02/2024', priority: 'High', status: 'Open' },
    { name: 'John Doe', date: '02/02/2024', priority: 'Medium', status: 'Pending' },
    { name: 'Jane Smith', date: '03/02/2024', priority: 'Low', status: 'Solved' },
    { name: 'Jane Smith', date: '03/02/2024', priority: 'Low', status: 'Solved' },
    { name: 'Jane Smith', date: '03/02/2024', priority: 'Low', status: 'Solved' },
    { name: 'Jane Smith', date: '03/02/2024', priority: 'Low', status: 'Solved' },
    { name: 'Jane Smith', date: '03/02/2024', priority: 'Low', status: 'Solved' },
];

const maintenanceItems = [
    { name: 'Roger Lubin', duration: '2 Months Pending', amount: '5,000' },
    { name: 'Jane Doe', duration: '1 Month Pending', amount: '3,500' },
    { name: 'John Smith', duration: '1 Week Pending', amount: '1,200' }
];

export default DashboardLayout;


