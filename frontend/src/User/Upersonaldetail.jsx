import React, { useState } from 'react'
import UAside from './UAside'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function Upersonaldetail() {
    const [activeTab, setActiveTab] = useState('owner')
    const [isOpen, setIsOpen] = useState(false);
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
        <>
            <div className="flex">
                <UAside className="flex-shrink-0 sticky top-0" />
                <div className="mainn flex-1 min-h-screen bg-gray-50 p-4">
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
                    {/* Tabs */}
                    <div className="flex mb-4 mt-5">
                        <button
                            className={`px-4 py-2 font-semibold rounded-tl-lg rounded-bl-lg ${activeTab === 'owner' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
                                }`}
                            onClick={() => setActiveTab('owner')}
                        >
                            Owner
                        </button>
                        <button
                            className={`px-4 py-2 font-semibold rounded-tr-lg rounded-br-lg ${activeTab === 'tenant' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
                                }`}
                            onClick={() => setActiveTab('tenant')}
                        >
                            Tenant
                        </button>
                    </div>

                    {activeTab === 'owner' && (
                        <>
                            {/* Profile Section */}
                            <div className="bg-white rounded-lg p-6 mb-8">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/bd89/79e3/d38ee59b7d4615afd56d81811704ef21?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLRkzn2MalKgTE3v1QPExX6Dwssa2k2fSZCeA76~k-~S2hPOGRwViDX4fFoUtJ2JPMa4QffPmFX9TIXKNTKaLR2OKWMlMK3gTx-XVZLbm2xc99cIEGfFOZMiJWTerajLM4gDYkKeQzObo~0KA-jfIV3qYSNN0F0OPTTDpuuP3eiCah~H0~KDT6u-ctb3nxz4zjnbWhIsE5F-yJGaqggXzcJ0A4Nm78zs9kclp6mgBJaOGbxCcPxbx8EG3VCH1Vp9jnGMX5S7Ka0Qj8efhZiPMU6Q-mjLFDkOQ7TjR7CvJEKFpeZBdWFth23mgQK4g-OEtFEEXZrx0zIqudUkYExHJg__"
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
                                        <div>
                                            <p className="text-sm text-gray-500">Full Name</p>
                                            <p className="font-medium">Arlene McCoy</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone Number</p>
                                            <p className="font-medium">+91 99130 44537</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email Address</p>
                                            <p className="font-medium">ArleneMcCoy25@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Gender</p>
                                            <p className="font-medium">Male</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Wing</p>
                                            <p className="font-medium">A</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Age</p>
                                            <p className="font-medium">20</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Unit</p>
                                            <p className="font-medium">1001</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Relation</p>
                                            <p className="font-medium">Father</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Syncfusion Essential Adharcard Front Side.JPG</p>
                                            <p className="text-xs text-gray-500">3.5 MB</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Address Proof Front Side.PDF</p>
                                            <p className="text-xs text-gray-500">3.5 MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Members Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold mb-4">Member : (04)</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        {
                                            name: "Arlene McCoy",
                                            email: "Arlenemccoy@gmail.com",
                                            phone: "+91 99130 52221",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Brother"
                                        },
                                        {
                                            name: "Arlene McCoy",
                                            email: "BrooklynSimmons@gmail.com",
                                            phone: "+91 99233 66134",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Uncle"
                                        },
                                        {
                                            name: "Arlene McCoy",
                                            email: "JennyWilson@gmail.com",
                                            phone: "+91 99130 52221",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Sister"
                                        },
                                        {
                                            name: "Arlene McCoy",
                                            email: "JaneCooper@gmail.com",
                                            phone: "+91 99130 52221",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Mother"
                                        }
                                    ].map((member, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow p-4">
                                            <h3 className="font-semibold text-blue-600 mb-3">{member.name}</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Email</p>
                                                    <p className="text-sm">{member.email}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Phone Number</p>
                                                    <p className="text-sm">{member.phone}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Age</p>
                                                    <p className="text-sm">{member.age}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Gender</p>
                                                    <p className="text-sm">{member.gender}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Relation</p>
                                                    <p className="text-sm">{member.relation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vehicles Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold mb-4">Vehicle : (04)</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        {
                                            type: "Two Wheelers",
                                            name: "Splendor",
                                            number: "GJ-5216"
                                        },
                                        {
                                            type: "Four Wheelers",
                                            name: "Fortuner",
                                            number: "GJ-5216"
                                        },
                                        {
                                            type: "Two Wheelers",
                                            name: "Splendor",
                                            number: "GJ-5216"
                                        },
                                        {
                                            type: "Two Wheelers",
                                            name: "Splendor",
                                            number: "GJ-5216"
                                        }
                                    ].map((vehicle, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow p-4">
                                            <h3 className="font-semibold text-blue-600 mb-3">{vehicle.type}</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Vehicle Name</p>
                                                    <p className="text-sm">{vehicle.name}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Vehicle Number</p>
                                                    <p className="text-sm">{vehicle.number}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold text-gray-900">Show Maintenance Details</h2>
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-12 bg-green-500 rounded-full"></div>
                                            <div>
                                                <p className="text-sm text-gray-500">Maintenance Amount</p>
                                                <p className="text-xl font-semibold text-green-600">₹ 1,500</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-12 bg-red-500 rounded-full"></div>
                                            <div>
                                                <p className="text-sm text-gray-500">Penalty Amount</p>
                                                <p className="text-xl font-semibold text-red-600">₹ 500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-8">
                                {/* Pending Maintenance */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Pending Maintenance</h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow p-4">
                                                <div className="flex justify-between items-center bg-blue-600 text-white rounded-lg px-4 py-2 mb-4">
                                                    <span>Maintenance</span>
                                                    <span>Pending</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Bill Date</span>
                                                        <span>11/01/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Pending Date</span>
                                                        <span>11/01/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Maintenance Amount</span>
                                                        <span className="text-red-500">1000.00</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Maintenance Penalty Amount</span>
                                                        <span className="text-red-500">250.00</span>
                                                    </div>
                                                    <div className="flex justify-between font-semibold">
                                                        <span>Grand Total</span>
                                                        <span className="text-green-600">₹ 1,250</span>
                                                    </div>
                                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
                                                        Pay Now
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Due Maintenance */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Due Maintenance</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow p-4">
                                                <div className="flex justify-between items-center bg-blue-600 text-white rounded-lg px-4 py-2 mb-4">
                                                    <span>Maintenance</span>
                                                    <span>Pending</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Date</span>
                                                        <span>11/01/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Amount</span>
                                                        <span className="text-red-500">1000.00</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Due Maintenance Amount</span>
                                                        <span className="text-red-500">250.00</span>
                                                    </div>
                                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
                                                        Pay Now
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Announcement Details */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Announcement Details</h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[1, 2, 3, 4].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow p-4">
                                                <div className="flex justify-between items-center bg-blue-600 text-white rounded-lg px-4 py-2 mb-4">
                                                    <span>Community Initiatives</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Date</span>
                                                        <span>01/02/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Time</span>
                                                        <span>10:15 AM</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Description</span>
                                                        <p className="mt-1 text-sm">
                                                            The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesha in...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </>
                    )}

                    {activeTab === 'tenant' && (
                        <>
                            {/* Profile Section */}
                            <div className="w-full mb-4 p-4 bg-white rounded-lg shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium text-muted-foreground">Owner Name</h3>
                                        <p className="text-sm text-foreground">Arlene McCoy</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium text-muted-foreground">Owner Phone</h3>
                                        <p className="text-sm text-foreground">+91 9575225165</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium text-muted-foreground">Owner Address</h3>
                                        <p className="text-sm text-foreground">C-101,Dhara Arcade , Mata Varacha Surat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-6 mb-8">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <img
                                        src="https://s3-alpha-sig.figma.com/img/bd89/79e3/d38ee59b7d4615afd56d81811704ef21?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLRkzn2MalKgTE3v1QPExX6Dwssa2k2fSZCeA76~k-~S2hPOGRwViDX4fFoUtJ2JPMa4QffPmFX9TIXKNTKaLR2OKWMlMK3gTx-XVZLbm2xc99cIEGfFOZMiJWTerajLM4gDYkKeQzObo~0KA-jfIV3qYSNN0F0OPTTDpuuP3eiCah~H0~KDT6u-ctb3nxz4zjnbWhIsE5F-yJGaqggXzcJ0A4Nm78zs9kclp6mgBJaOGbxCcPxbx8EG3VCH1Vp9jnGMX5S7Ka0Qj8efhZiPMU6Q-mjLFDkOQ7TjR7CvJEKFpeZBdWFth23mgQK4g-OEtFEEXZrx0zIqudUkYExHJg__"
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
                                        <div>
                                            <p className="text-sm text-gray-500">Full Name</p>
                                            <p className="font-medium">Arlene McCoy</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone Number</p>
                                            <p className="font-medium">+91 99130 44537</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email Address</p>
                                            <p className="font-medium">ArleneMcCoy25@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Gender</p>
                                            <p className="font-medium">Male</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Wing</p>
                                            <p className="font-medium">A</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Age</p>
                                            <p className="font-medium">20</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Unit</p>
                                            <p className="font-medium">1001</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Relation</p>
                                            <p className="font-medium">Father</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Syncfusion Essential Adharcard Front Side.JPG</p>
                                            <p className="text-xs text-gray-500">3.5 MB</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Address Proof Front Side.PDF</p>
                                            <p className="text-xs text-gray-500">3.5 MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Members Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold mb-4">Member : (04)</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        {
                                            name: "Arlene McCoy",
                                            email: "Arlenemccoy@gmail.com",
                                            phone: "+91 99130 52221",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Brother"
                                        },
                                        {
                                            name: "Arlene McCoy",
                                            email: "BrooklynSimmons@gmail.com",
                                            phone: "+91 99233 66134",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Uncle"
                                        },
                                        {
                                            name: "Arlene McCoy",
                                            email: "JennyWilson@gmail.com",
                                            phone: "+91 99130 52221",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Sister"
                                        },
                                        {
                                            name: "Arlene McCoy",
                                            email: "JaneCooper@gmail.com",
                                            phone: "+91 99130 52221",
                                            age: "22",
                                            gender: "Male",
                                            relation: "Mother"
                                        }
                                    ].map((member, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow p-4">
                                            <h3 className="font-semibold text-blue-600 mb-3">{member.name}</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Email</p>
                                                    <p className="text-sm">{member.email}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Phone Number</p>
                                                    <p className="text-sm">{member.phone}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Age</p>
                                                    <p className="text-sm">{member.age}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Gender</p>
                                                    <p className="text-sm">{member.gender}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Relation</p>
                                                    <p className="text-sm">{member.relation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vehicles Section */}
                            <div className="mb-8">
                                <h2 className="text-lg font-semibold mb-4">Vehicle : (04)</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        {
                                            type: "Two Wheelers",
                                            name: "Splendor",
                                            number: "GJ-5216"
                                        },
                                        {
                                            type: "Four Wheelers",
                                            name: "Fortuner",
                                            number: "GJ-5216"
                                        },
                                        {
                                            type: "Two Wheelers",
                                            name: "Splendor",
                                            number: "GJ-5216"
                                        },
                                        {
                                            type: "Two Wheelers",
                                            name: "Splendor",
                                            number: "GJ-5216"
                                        }
                                    ].map((vehicle, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow p-4">
                                            <h3 className="font-semibold text-blue-600 mb-3">{vehicle.type}</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Vehicle Name</p>
                                                    <p className="text-sm">{vehicle.name}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500">Vehicle Number</p>
                                                    <p className="text-sm">{vehicle.number}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold text-gray-900">Show Maintenance Details</h2>
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-12 bg-green-500 rounded-full"></div>
                                            <div>
                                                <p className="text-sm text-gray-500">Maintenance Amount</p>
                                                <p className="text-xl font-semibold text-green-600">₹ 1,500</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-12 bg-red-500 rounded-full"></div>
                                            <div>
                                                <p className="text-sm text-gray-500">Penalty Amount</p>
                                                <p className="text-xl font-semibold text-red-600">₹ 500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-8">
                                {/* Pending Maintenance */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Pending Maintenance</h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow p-4">
                                                <div className="flex justify-between items-center bg-blue-600 text-white rounded-lg px-4 py-2 mb-4">
                                                    <span>Maintenance</span>
                                                    <span>Pending</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Bill Date</span>
                                                        <span>11/01/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Pending Date</span>
                                                        <span>11/01/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Maintenance Amount</span>
                                                        <span className="text-red-500">1000.00</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Maintenance Penalty Amount</span>
                                                        <span className="text-red-500">250.00</span>
                                                    </div>
                                                    <div className="flex justify-between font-semibold">
                                                        <span>Grand Total</span>
                                                        <span className="text-green-600">₹ 1,250</span>
                                                    </div>
                                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
                                                        Pay Now
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Due Maintenance */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Due Maintenance</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow p-4">
                                                <div className="flex justify-between items-center bg-blue-600 text-white rounded-lg px-4 py-2 mb-4">
                                                    <span>Maintenance</span>
                                                    <span>Pending</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Date</span>
                                                        <span>11/01/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Amount</span>
                                                        <span className="text-red-500">1000.00</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Due Maintenance Amount</span>
                                                        <span className="text-red-500">250.00</span>
                                                    </div>
                                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
                                                        Pay Now
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Announcement Details */}
                                <div>
                                    <h2 className="text-lg font-semibold mb-4">Announcement Details</h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[1, 2, 3, 4].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow p-4">
                                                <div className="flex justify-between items-center bg-blue-600 text-white rounded-lg px-4 py-2 mb-4">
                                                    <span>Community Initiatives</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Date</span>
                                                        <span>01/02/2024</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Time</span>
                                                        <span>10:15 AM</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Description</span>
                                                        <p className="mt-1 text-sm">
                                                            The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesha in...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </>
                    )}


                </div>


            </div>

        </>
    )
}