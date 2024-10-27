import React from "react";
import { useState } from "react";
import { ChevronDown, Upload } from "lucide-react";
import Aside from "./Aside";
import { Link } from 'react-router-dom';
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle,  } from 'lucide-react';



export const Form = () => {
  const [activeTab, setActiveTab] = useState("owner");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);


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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderOwnerForm = () => (
    <div className="">
      {/* Owner/Tenant Details */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-white p-4 rounded-lg">
        <div className="col-span-4 space-y-4">
          {/* Full Name, Phone No, Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#202224]"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNo"
                className="block text-sm font-medium text-[#202224]"
              >
                Phone No*
              </label>
              <input
                type="tel"
                id="phoneNo"
                className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-[#202224]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                placeholder="name@example.com"
              />
            </div>
          </div>
  
          {/* Age, Gender, Relation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-[#202224]"
              >
                Age*
              </label>
              <input
                type="number"
                id="age"
                className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                placeholder="Enter age"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-[#202224]"
              >
                Gender*
              </label>
              <select
                id="gender"
                className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="relation"
                className="block text-sm font-medium text-[#202224]"
              >
                Relation*
              </label>
              <input
                type="text"
                id="relation"
                className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                placeholder="Enter relation"
              />
            </div>
          </div>
        </div>
  
        {/* Image Upload Section */}
        <div className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden p-4">
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Add Photo
              </span>
            </div>
          )}
        </div>
      </div>
  
      {/* Common form sections can be added here */}
      {renderCommonFormSections()}
    </div>
  );
  

  const renderTenantForm = () => (
    <div className="">
      <div className="bg-white p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Owner Full Name */}
          <div className="flex flex-col">
            <label className="text-neutral-700 font-semibold">
              Owner Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-neutral-300 rounded-md p-2 mt-1"
              placeholder="Enter Full Name"
            />
          </div>
  
          {/* Owner Phone */}
          <div className="flex flex-col">
            <label className="text-neutral-700 font-semibold">
              Owner Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-neutral-300 rounded-md p-2 mt-1"
              defaultValue="+91"
            />
          </div>
  
          {/* Owner Address */}
          <div className="flex flex-col">
            <label className="text-neutral-700 font-semibold">
              Owner Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="border border-neutral-300 rounded-md p-2 mt-1"
              placeholder="Enter Address"
            />
          </div>
        </div>
      </div>
  
      <div className="flex  sm:grid-cols-1 md:grid-cols-2 items-start space-x-4 bg-white px-3 pt-3 pb-4 rounded-lg">
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 ">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <button className="absolute inset-0 w-full h-full rounded-full focus:outline-none">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500">+</span>
                    </div>
                  </div>
                </button>
              </div>
            )}
            <span className="mt-2 block text-xs text-gray-500 text-center">
              Add Photo
            </span>
          </div>
        </div>
  
        {/* Form Fields */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#202224]">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#202224]">
              Phone No
            </label>
            <input
              type="tel"
              className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              placeholder="+91 "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#202224]">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#202224]">
              Age
            </label>
            <input
              type="number"
              className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              placeholder="Enter Age"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#202224]">
              Gender
            </label>
            <select className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#202224]">
              Relation
            </label>
            <input
              type="text"
              className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              placeholder="Enter Relation"
            />
          </div>
        </div>
      </div>
  
      {/* Rest of the form components */}
      {renderCommonFormSections()}
    </div>
  );
  

  const renderCommonFormSections = () => (
    <>
      {/* Document Uploads */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-3 rounded-b-lg">
        {[
          "Upload Aadhar Card (Front side)",
          "Upload Aadhar Card (Back side)",
          "Rent Agreement",
          "NOC",
        ].map((title, index) => (
          <div key={index} className="space-y-2 ">
            <label className="block text-sm font-medium text-gray-700 ">
              {title}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-1 text-sm font-bold text-gray-500">
                <span className="text-[#5678E9]">Upload a file </span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        ))}
      </div>

      {/* Member Counting */}
      <div className="bg-white p-3 rounded-lg my-5">
        <div className="flex justify-between items-center mb-2 ">
          <h3 className="text-lg font-semibold">
            Member Counting (Other Members)
          </h3>
          <select className="border rounded px-2 py-1">
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((member) => (
            <div key={member} className="grid grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#202224]">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#202224]">
                  Phone No*
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                  placeholder="+91 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#202224]">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#202224]">
                  Age*
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                  placeholder="Enter Age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#202224]">
                  Gender*
                </label>
                <select className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1 text-[#A7A7A7]">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#202224]">
                  Relation*
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                  placeholder="Enter Relation"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Counting */}
      <div className="bg-white p-3 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Vehicle Counting</h3>
          <select className="border rounded px-2 py-1">
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="space-y-4">
          {[1].map((vehicle) => (
            <div key={vehicle} className="flex gap-4">
              <div className="w-2/4  gap-4 border flex justify-between p-4 rounded-lg  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#202224]">
                    Vehicle Type*
                  </label>
                  <select className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1">
                    <option>Two Wheeler</option>
                    <option>Four Wheeler</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">
                    Vehicle Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md shadow-sm text-sm bg-transparent text-sm px-4 py-1"
                    placeholder="Enter Number"
                  />
                </div>
              </div>
              <div className="w-2/4 gap-4 border flex justify-between p-4 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-[#202224]">
                    Vehicle Type*
                  </label>
                  <select className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1">
                    <option>Two Wheeler</option>
                    <option>Four Wheeler</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">
                    Vehicle Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border rounded-md shadow-sm text-sm bg-transparent text-sm px-4 py-1"
                    placeholder="Enter Number"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="w-2/4 gap-4 border flex justify-between p-4 rounded-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-[#202224]">
                Vehicle Type*
              </label>
              <select className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1">
                <option>Two Wheeler</option>
                <option>Four Wheeler</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#202224]">
                Vehicle Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#202224]">
                Vehicle Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md shadow-sm text-sm bg-transparent text-sm px-4 py-1"
                placeholder="Enter Number"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-[#202224] hover:bg-gray-50 w-[10%]">
          Cancel
        </button>
        <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#202224] bg-[#F6F8FB] hover:bg-blue-700 hover:bg-gradient-to-r from-[#FE512E] to-[#F09619] hover:text-white transition duration:200 w-[10%]">
          Create
        </button>
      </div>
    </>
  );

  return (
    <>
      <Aside />
      <div className="main">
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
                                    onClick={() => {}}
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
                <Link to="/editprofile" className="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
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
  <div className="min-h-screen bg-blue-50 p-4 sm:p-6 lg:p-8">
    <div className="w-full max-w-10xl bg-[#f0f5fb] rounded-lg p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f0f5fb]">
        <div className="flex flex-wrap">
          <button
            className={`text-lg font-semibold px-4 py-2 m-1 ${
              activeTab === "owner"
                ? "text-[#FFFFFF] border-b-2 bg-gradient-to-r from-[#FE512E] to-[#F09619] p-2 rounded-t-lg border-[#FE512E] border-b-2"
                : "text-[#202224] border-[#FE512E] border-b-2 bg-white p-2 rounded-t-lg"
            }`}
            onClick={() => setActiveTab("owner")}
          >
            Owner
          </button>
          <button
            className={`text-lg font-semibold px-4 py-2 m-1 ${
              activeTab === "tenant"
                ? "text-[#FFFFFF] border-b-2 bg-gradient-to-r from-[#FE512E] to-[#F09619] p-2 rounded-t-lg border-[#FE512E] border-b-2"
                : "text-[#202224] border-[#FE512E] border-b-2 bg-white p-2 rounded-t-lg"
            }`}
            onClick={() => setActiveTab("tenant")}
          >
            Tenant
          </button>
        </div>
      </div>

      {/* Conditional rendering based on activeTab */}
      <div className="mt-4">
        {activeTab === "tenant" ? renderTenantForm() : renderOwnerForm()}
      </div>
    </div>
  </div>
</div>

    </>
  );
};