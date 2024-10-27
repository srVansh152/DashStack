import React from "react";
import { useState } from "react";
import { ChevronDown, Upload } from "lucide-react";
import Aside from "./Aside";


export const Form = () => {
  const [activeTab, setActiveTab] = useState("owner");
  const [selectedImage, setSelectedImage] = useState(null);

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
      <div className="grid grid-cols-5 gap-4  bg-white p-3 rounded-t-lg">
        <div className="col-span-4 space-y-4">
          <div className="grid grid-cols-3 gap-4">
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

          <div className="grid grid-cols-3 gap-4">
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
        <div className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
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

      {renderCommonFormSections()}
    </div>
  );

  const renderTenantForm = () => (
    <div className="">
      <div className="bg-white p-3 rounded-lg mb-6">
        <div className="flex gap-6">
          {/* Owner Full Name */}
          <div className="flex flex-col w-[500px]">
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
          <div className="flex flex-col w-[450px]">
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
          <div className="flex flex-col w-[450px]">
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

      <div className="flex items-start space-x-4 bg-white px-3 pt-3 pb-4 rounded-t-lg">
        <div className="flex-shrink-0 ">
          <div className="relative w-20 h-20">
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
        <div className="flex-grow grid grid-cols-3 gap-4">
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
      <div className="grid grid-cols-4 gap-4 bg-white p-3 rounded-b-lg">
        {[
          "Upload Aadhar Card (Front side)",
          "Upload Aadhar Card (Back side)",
          "Rent Agreement",
          "NOC",
        ].map((title, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
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
            <div key={member} className="grid grid-cols-6 gap-4">
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
              <div className="w-2/4 gap-4 border flex justify-between p-4 rounded-lg">
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
              <div className="w-2/4 gap-4 border flex justify-between p-4 rounded-lg">
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
          <div className="w-2/4 gap-4 border flex justify-between p-4 rounded-lg">
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
        <div className="min-h-screen bg-blue-50 p-8">
          <div className="w-full max-w-10xl  bg-[#f0f5fb] rounded-lg p-6">
            <div className="flex justify-between items-center bg-[#f0f5fb]">
              <div className="flex">
                <button
                  className={`text-lg font-semibold px-5 py-2 ${
                    activeTab === "owner"
                      ? "text-[#FFFFFF] border-b-2  bg-gradient-to-r from-[#FE512E] to-[#F09619] p-2 rounded-t-lg border-[#FE512E] border-b-2"
                      : "text-[#202224] border-[#FE512E] border-b-2 bg-white p-2 rounded-t-lg"
                  }`}
                  onClick={() => setActiveTab("owner")}
                >
                  Owner
                </button>
                <button
                  className={`text-lg font-semibold px-5 py-2 ${
                    activeTab === "tenant"
                      ? "text-[#FFFFFF] border-b-2  bg-gradient-to-r from-[#FE512E] to-[#F09619] p-2 rounded-t-lg border-[#FE512E] border-b-2"
                      : "text-[#202224] border-[#FE512E] border-b-2 bg-white p-2 rounded-t-lg"
                  }`}
                  onClick={() => setActiveTab("tenant")}
                >
                  Tenant
                </button>
              </div>
            </div>

            {activeTab === "tenant" ? renderTenantForm() : renderOwnerForm()}
          </div>
        </div>
      </div>
    </>
  );
};