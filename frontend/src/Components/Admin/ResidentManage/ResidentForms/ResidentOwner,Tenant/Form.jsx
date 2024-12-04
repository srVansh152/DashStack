import React from "react";
import { useState } from "react";
import { ChevronDown, Upload } from "lucide-react";
import axios from 'axios'; // Import axios for making API calls

import { Link } from 'react-router-dom';
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, } from 'lucide-react';
import Aside from "../../../../Common/SideBar/AdminSideBar/Aside";
import Navbar from "../../../../Common/Navbar/Navbar";
import { createResident } from "../../../../../utils/api";

const InputField = ({ label, type, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-[#202224]">{label}</label>
    <input
      type={type}
      className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const Form = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [relation, setRelation] = useState('');
  const [activeTab, setActiveTab] = useState("owner");
  const [selectedImage, setSelectedImage] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(5);
  const [vehicleCount, setVehicleCount] = useState(3);
  const [vehicles, setVehicles] = useState([{}]);
  const [members, setMembers] = useState([{}]); // State to store member details
  const [files, setFiles] = useState({
    aadharFront: null,
    aadharBack: null,
    addressProof: null,
    rentAgreement: null,
  });

  const handleMemberCountChange = (event) => {

    const count = Number(event.target.value);
    setMemberCount(count);

    // Update members array to have empty objects for new member inputs
    setMembers((prev) => {
      const newMembers = [...prev];
      while (newMembers.length < count) {
        newMembers.push({}); // Add an empty object for each new member
      }
      return newMembers.slice(0, count); // Ensure we don't have excess objects
    });
  };

  const handleInputChange = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value }; // Update the specific field for the member
    setMembers(newMembers);
  };

  const handleVehicleCountChange = (event) => {
    const count = Number(event.target.value);
    setVehicleCount(count);

    // Update vehicles array to have empty objects for new vehicle inputs
    setVehicles((prev) => {
      const newVehicles = [...prev];
      while (newVehicles.length < count) {
        newVehicles.push({}); // Add an empty object for each new vehicle
      }
      return newVehicles.slice(0, count); // Ensure we don't have excess objects
    });
  };

  const handleInputVecChange = (index, field, value) => {
    const newVehicles = [...vehicles];
    newVehicles[index] = { ...newVehicles[index], [field]: value }; // Update the specific field for the vehicle
    setVehicles(newVehicles);
  };


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

  const handleFileChangee = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [field]: file,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate required fields
    if (!fullName || !phoneNo || !email || !age || !gender || !relation) {
      alert("Please fill in all required fields.");
      return;
    }

    const ownerData = {
      photo: selectedImage || null, // Ensure photo is set or null
      fullName,
      phoneNumber: phoneNo,
      email,
      age: Number(age),
      gender,
      wing: "A",
      unitNumber: "101",
      relation,
      aadhaarFront: files.aadharFront || null, // Ensure files are set or null
      aadhaarBack: files.aadharBack || null,
      addressProof: files.addressProof || null,
      rentAgreement: files.rentAgreement || null,
      members: members.map(member => ({
        name: member.fullName || "", // Ensure name is set or empty string
        phoneNumber: member.phone || "", // Ensure phone is set or empty string
        email: member.email || "", // Ensure email is set or empty string
        age: Number(member.age) || 0, // Ensure age is set or default to 0
        gender: member.gender || "", // Ensure gender is set or empty string
        relation: member.relation || "", // Ensure relation is set or empty string
      })),
      vehicles: vehicles.map(vehicle => ({
        type: vehicle.type || "", // Ensure type is set or empty string
        name: vehicle.name || "", // Ensure name is set or empty string
        number: vehicle.number || "", // Ensure number is set or empty string
      })),
      owner: true, // Assuming this is an owner
      role: "resident", // Assuming the role is resident
      society: "your_society_id", // Replace with actual society ID
      createdBy: "your_user_id", // Replace with actual user ID
    };

    console.log('Data to be sent:', ownerData); // Log the data being sent

    try {
      const response = await createResident(ownerData);
      console.log('Data saved successfully:', response);
    } catch (error) {
      console.error('Error saving data:', error.response ? error.response.data : error.message);
      // Log the error response for more details
    }
  };

  const renderOwnerForm = () => (
    <div className="">
      {/* Owner/Tenant Details */}
      <div className="flex sm:grid-cols-1 md:grid-cols-2 items-start space-x-4 bg-white px-3 pt-3 pb-4 rounded-lg">
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
          <InputField label="Full Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Name" />
          <InputField label="Phone No" type="tel" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="+91 " />
          <InputField label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          <InputField label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
          <div>
            <label className="block text-sm font-medium text-[#202224]">Gender</label>
            <select className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <InputField label="Relation" type="text" value={relation} onChange={(e) => setRelation(e.target.value)} placeholder="Enter Relation" />
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


  const renderCommonFormSections = () => {
    const handleDragOver = (event) => {
      event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    };

    const handleDrop = (event) => {
      event.preventDefault(); // Prevent default behavior
      const files = event.dataTransfer.files; // Get the dropped files
      if (files.length > 0) {
        const file = files[0]; // Get the first file
        const reader = new FileReader();
        reader.onload = (e) => {
          // Handle the file upload (you can call your upload function here)
          console.log(e.target.result); // For demonstration, log the file data
          // You can also set the image or file data to state if needed
          setSelectedImage(e.target.result); // Example: set the uploaded image
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    };

    const renderUploadBox = (label, field) => (
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">{label}</h3>
        <label
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-blue-600 font-medium">
                {files[field] ? files[field].name : "Upload a file"}
              </p>
              <p className="text-xs text-gray-500">or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <input
            type="file"
            className="hidden"
            onChange={(e) => handleFileChangee(e, field)}
            accept=".png, .jpg, .jpeg, .gif"
          />
        </label>
      </div>
    )

    return (
      <>
        {/* Document Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white mt-3 p-3 rounded">
          {renderUploadBox("Upload Aadhar Card (Front Side)", "aadharFront")}
          {renderUploadBox("Upload Aadhar Card (Back Side)", "aadharBack")}
          {renderUploadBox("Address Proof (Vera Bill OR Light Bill)", "addressProof")}
          {renderUploadBox("Rent Agreement", "rentAgreement")}
        </div>

        {/* Member Counting */}
        <div className="bg-white p-3 rounded-lg my-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Member Counting (Other Members)</h3>
            <select
              className="border rounded px-2 py-1"
              value={memberCount}
              onChange={handleMemberCountChange}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-4">
            {Array.from({ length: memberCount }).map((_, index) => (
              <div key={index} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#202224]">Full Name*</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                    placeholder="Enter Name"
                    value={members[index]?.fullName || ''}
                    onChange={(e) => handleInputChange(index, 'fullName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">Phone No*</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                    placeholder="+91"
                    value={members[index]?.phone || ''}
                    onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                    placeholder="Enter Email"
                    value={members[index]?.email || ''}
                    onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">Age*</label>
                  <input
                    type="number"
                    className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                    placeholder="Enter Age"
                    value={members[index]?.age || ''}
                    onChange={(e) => handleInputChange(index, 'age', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">Gender*</label>
                  <select
                    className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1 text-[#A7A7A7]"
                    value={members[index]?.gender || ''}
                    onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#202224]">Relation*</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border bg-transparent rounded-md shadow-sm text-sm px-4 py-1"
                    placeholder="Enter Relation"
                    value={members[index]?.relation || ''}
                    onChange={(e) => handleInputChange(index, 'relation', e.target.value)}
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
            <select
              className="border rounded px-2 py-1"
              value={vehicleCount}
              onChange={handleVehicleCountChange}
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-4">
            {Array.from({ length: vehicleCount }).map((_, index) => (
              <div key={index} className="flex gap-4 border p-4 rounded-lg">
                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#202224]">Vehicle Type*</label>
                    <select
                      className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1"
                      value={vehicles[index]?.type || ''}
                      onChange={(e) => handleInputVecChange(index, 'type', e.target.value)}
                    >
                      <option value="">Select Vehicle Type</option>
                      <option value="Two Wheeler">Two Wheeler</option>
                      <option value="Four Wheeler">Four Wheeler</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#202224]">Vehicle Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md bg-transparent text-sm px-4 py-1"
                      placeholder="Enter Name"
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#202224]">Vehicle Number</label>
                    <input
                      type="text"
                      className="mt-1 block w-full border rounded-md shadow-sm text-sm bg-transparent px-4 py-1"
                      placeholder="Enter Number"
                      onChange={(e) => handleInputChange(index, 'number', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-[#202224] hover:bg-gray-50 w-[10%]">
            Cancel
          </button>
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-blue-700 hover:bg-gradient-to-r from-[#FE512E] to-[#F09619] hover:text-white transition duration:200 w-[10%]">
            Create
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <Aside />
      <div className="main">
        <Navbar />
        <div className="min-h-screen bg-blue-50 p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-10xl bg-[#f0f5fb] rounded-lg p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit}> {/* Add form submission handler */}
              <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f0f5fb]">
                <div className="flex flex-wrap">
                  <button
                    className={`text-lg font-semibold px-4 py-2 m-1 ${activeTab === "owner"
                        ? "text-[#FFFFFF] border-b-2 bg-gradient-to-r from-[#FE512E] to-[#F09619] p-2 rounded-t-lg border-[#FE512E] border-b-2"
                        : "text-[#202224] border-[#FE512E] border-b-2 bg-white p-2 rounded-t-lg"
                      }`}
                    onClick={() => setActiveTab("owner")}
                  >
                    Owner
                  </button>
                  <button
                    className={`text-lg font-semibold px-4 py-2 m-1 ${activeTab === "tenant"
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

              {/* Action Buttons */}
          
            </form>
          </div>
        </div>
      </div>

    </>
  );
};