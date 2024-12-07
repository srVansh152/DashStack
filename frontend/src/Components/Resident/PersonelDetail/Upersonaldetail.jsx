import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom';
import UAside from '../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../Common/Navbar/Navbar';
import { getAnnouncements } from '../../../utils/api';

export default function Upersonaldetail() {
    const [activeTab, setActiveTab] = useState('owner')
    const [isOpen, setIsOpen] = useState(false);
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await getAnnouncements();
                setAnnouncements(response.data);
            } catch (error) {
                console.error('Error fetching announcements:', error);
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <>
            <div className="flex">
                <UAside className="flex-shrink-0 sticky top-0" />
                <div className="mainn flex-1 min-h-screen bg-gray-50 p-4">
                    <Navbar />
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
                            <div className="border rounded shadow bg-white p-5 mb-3">
                                <div className="flex flex-wrap items-center">
                                    {/* Left Side - Profile Image */}
                                    <div className="lg:w-2/12 w-full flex flex-col items-center mb-4 lg:mb-0">
                                        <img
                                            src="/image/profile.png"
                                            alt="Profile"
                                            className="w-28 h-28 rounded-full mb-2"
                                        />
                                    </div>

                                    {/* Right Side - Form Details */}
                                    <div className="lg:w-7/12 w-full">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Full Name</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">Arlene McCoy</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Phone Number</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">+91 99130 44537</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Email Address</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px] break-words">ArleneMcCoy25@gmail.com</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Gender</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">Male</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Wing</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">A</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Age</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">20</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Unit</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">1001</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Relation</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">Father</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* File Attachments */}
                                    <div className="lg:w-3/12 w-full mt-4 lg:mt-0">
                                        <div className="border rounded p-2 mb-2 flex items-center">
                                            <img src="/image/gallery.png" alt="" className="w-6 h-6 mr-2" />
                                            <div>
                                                <p className="text-sm">Syncfusion Adharcard Front Side.JPG</p>
                                                <span className="text-gray-500 text-xs">3.5 MB</span>
                                            </div>
                                        </div>
                                        <div className="border rounded p-2 mb-2 flex items-center">
                                            <img src="/image/gallery.png" alt="" className="w-6 h-6 mr-2" />
                                            <div>
                                                <p className="text-sm">Address Proof Front Side.PDF</p>
                                                <span className="text-gray-500 text-xs">3.5 MB</span>
                                            </div>
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
                                        <div key={index} className="bg-white rounded-lg shadow">
                                            <h3 className="font-semibold flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">{member.name}</h3>
                                            <div className="space-y-2 p-4">
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
                                        <div key={index} className="bg-white rounded-lg shadow">
                                            <h3 className="flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">{vehicle.type}</h3>
                                            <div className="space-y-2 p-3">
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
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg overflow-hidden">
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className="bg-white shadow rounded-lg">
                                                <div className="flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">
                                                    <span>Maintenance</span>
                                                    <span className=" bg-[#6786EB] text-white px-4 py-1 rounded-full">Pending</span>
                                                </div>
                                                <div className="space-y-3 p-3">
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
                                                    <button className="w-full  bg-gradient-to-r from-[#FE512E] to-[#F09619] hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
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
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow">
                                                <div className="flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">
                                                    <span>Maintenance</span>
                                                    <span className="bg-[#6786EB]  text-white px-4 py-1 rounded-full">Pending</span>
                                                </div>
                                                <div className="space-y-3 p-3">
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
                                                    <button className="w-full bg-gradient-to-r from-[#FE512E] to-[#F09619] hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
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
                                        {announcements.map((announcement, index) => (
                                            <div key={index} className="bg-white rounded-lg shadow">
                                                <div className="flex justify-between items-center bg-[#5678E9] text-white px-5 py-3 rounded-t-lg">
                                                    <span>{announcement.title}</span>
                                                </div>
                                                <div className="space-y-3 p-4 ">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Date</span>
                                                        <span>{announcement.date.split('T')[0]}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Time</span>
                                                        <span>{announcement.time}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Description</span>
                                                        <p className="mt-1 text-sm">
                                                            {announcement.description}
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
                                        <h3 className="text-[18px] font-medium text-muted-foreground text-[#202224] font-semibold">Owner Name</h3>
                                        <p className="text-[18px] text-foreground text-[#A7A7A7]">Arlene McCoy</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-[18px] font-medium text-muted-foreground text-[#202224] font-semibold">Owner Phone</h3>
                                        <p className="text-[18px] text-foreground text-[#A7A7A7]">+91 9575225165</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-[18px] font-medium text-muted-foreground text-[#202224] font-semibold">Owner Address</h3>
                                        <p className="text-[18px] text-foreground text-[#A7A7A7] break-words">C-101,Dhara Arcade , Mata Varacha Surat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded shadow bg-white p-5 mb-3">
                                <div className="flex flex-wrap items-center">
                                    {/* Left Side - Profile Image */}
                                    <div className="lg:w-2/12 w-full flex flex-col items-center mb-4 lg:mb-0">
                                        <img
                                            src="/image/profile.png"
                                            alt="Profile"
                                            className="w-28 h-28 rounded-full mb-2"
                                        />
                                    </div>

                                    {/* Right Side - Form Details */}
                                    <div className="lg:w-7/12 w-full">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Full Name</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">Arlene McCoy</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Phone Number</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">+91 99130 44537</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Email Address</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px] break-words">ArleneMcCoy25@gmail.com</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Gender</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">Male</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Wing</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">A</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Age</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">20</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Unit</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">1001</p>
                                            </div>
                                            <div>
                                                <h6 className="text-[#202224] mb-1 font-semibold text-[16px]">Relation</h6>
                                                <p className="text-[#A7A7A7] font-semibold text-[16px]">Father</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* File Attachments */}
                                    <div className="lg:w-3/12 w-full mt-4 lg:mt-0">
                                        <div className="border rounded p-2 mb-2 flex items-center">
                                            <img src="/image/gallery.png" alt="" className="w-6 h-6 mr-2" />
                                            <div>
                                                <p className="text-sm">Syncfusion Adharcard Front Side.JPG</p>
                                                <span className="text-gray-500 text-xs">3.5 MB</span>
                                            </div>
                                        </div>
                                        <div className="border rounded p-2 mb-2 flex items-center">
                                            <img src="/image/gallery.png" alt="" className="w-6 h-6 mr-2" />
                                            <div>
                                                <p className="text-sm">Address Proof Front Side.PDF</p>
                                                <span className="text-gray-500 text-xs">3.5 MB</span>
                                            </div>
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
                                        <div key={index} className="bg-white rounded-lg shadow">
                                            <h3 className="font-semibold flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">{member.name}</h3>
                                            <div className="space-y-2 p-4">
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
                                        <div key={index} className="bg-white rounded-lg shadow">
                                            <h3 className="flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">{vehicle.type}</h3>
                                            <div className="space-y-2 p-3">
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
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-lg overflow-hidden">
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className="bg-white shadow rounded-lg">
                                                <div className="flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">
                                                    <span>Maintenance</span>
                                                    <span className=" bg-[#6786EB] text-white px-4 py-1 rounded-full">Pending</span>
                                                </div>
                                                <div className="space-y-3 p-3">
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
                                                    <button className="w-full  bg-gradient-to-r from-[#FE512E] to-[#F09619] hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
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
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="bg-white rounded-lg shadow">
                                                <div className="flex justify-between items-center bg-[#5678E9] text-white px-4 py-2 rounded-t-lg">
                                                    <span>Maintenance</span>
                                                    <span className="bg-[#6786EB]  text-white px-4 py-1 rounded-full">Pending</span>
                                                </div>
                                                <div className="space-y-3 p-3">
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
                                                    <button className="w-full bg-gradient-to-r from-[#FE512E] to-[#F09619] hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
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
                                        {announcements.map((announcement, index) => (
                                            <div key={index} className="bg-white rounded-lg shadow">
                                                <div className="flex justify-between items-center bg-[#5678E9] text-white px-5 py-2 rounded-t-lg">
                                                    <span>{announcement.title}</span>
                                                </div>
                                                <div className="space-y-3 p-2 ">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Date</span>
                                                        <span>{announcement.date}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Announcement Time</span>
                                                        <span>{announcement.time}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Description</span>
                                                        <p className="mt-1 text-sm">
                                                            {announcement.description}
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