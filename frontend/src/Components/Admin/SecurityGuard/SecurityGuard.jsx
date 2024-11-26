import React, { useState } from 'react'
import { Bell, PencilIcon, Eye, MoreVertical, Plus, Trash, Pencil, Trash2,Camera,Calendar, Clock, ChevronDown, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from '../../Common/SideBar/AdminSideBar/Aside'
import Navbar from '../../Common/Navbar/Navbar'




const guards = [
    {
        id: 1,
        name: "Brooklyn Simmons",
        phone: "845654 96321",
        shift: "Day",
        shiftDate: "10/02/2024",
        shiftTime: "2:45 PM",
        gender: "Male",
        image: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 2,
        name: "Brooklyn Simmons",
        phone: "845654 96321",
        shift: "Day",
        shiftDate: "10/02/2024",
        shiftTime: "2:45 PM",
        gender: "Female",
        image: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 3,
        name: "Brooklyn Simmons",
        phone: "845654 96321",
        shift: "Night",
        shiftDate: "10/02/2024",
        shiftTime: "2:45 PM",
        gender: "Male",
        image: "/placeholder.svg?height=40&width=40",
    },
]

function SecurityGuard() {

    
    const [openModel, setOpenModel] = useState(false);
    const [openViewModel, setOpenViewModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [openEditModel, setOpenEditModel] = useState(false);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [shift, setShift] = useState("");
    const [shiftDate, setShiftDate] = useState("");
    const [shiftTime, setShiftTime] = useState("");
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        fullName: 'Arlene McCoy',
        phoneNumber: '+91 99130-44537',
        gender: 'Male',
        shift: 'Day',
        shiftDate: '2022-03-13',
        shiftTime: '15:45',
        aadharCard: {
          name: 'Adharcard Front Side.JPG',
          size: '3.5 MB'
        }
      })
    const securityData = {
        name: 'Brooklyn Simmons',
        date: 'Feb 10, 2024',
        shift: 'Day',
        shiftTime: '2:45 PM',
        gender: 'Female',
        image: '/placeholder.svg?height=100&width=100'
      }


    const handleAddModel = () => {
        setOpenModel(true);
      };
      const handleViewModel = () => {
        setOpenViewModel(true);
      };
      const handleDeleteModel = () => {
        setOpenDeleteModel(true);
      };
      const handleEditModel = () => {
        setOpenEditModel(true);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          fullName,
          phone,
          gender,
          shift,
          shiftDate,
          shiftTime,
          file,
        };
        console.log(formData);
        
        
      };

      const handleEditSubmit = (e) => {
        e.preventDefault();
        // Process the form data or call an API here
       
      };

  
    
      const handleDrop = (e) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files[0]
        if (droppedFile && droppedFile.size <= 10 * 1024 * 1024) { // 10MB limit
          setFile(droppedFile)
        }
      }
    
      const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) { // 10MB limit
          setFile(selectedFile)
        }
      }
    
      const handlePhotoChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            setPhoto(reader.result)
          }
          reader.readAsDataURL(file)
        }
      }

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleAadharUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFormData({ ...formData, aadharCard: { name: file.name, size: `${(file.size / 1024).toFixed(2)} KB` } });
        }
      };
    


    return (
        <>
            <Aside />
            <div className="main">
                <Navbar/>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Security Guard Details</h2>
                        <button onClick={handleAddModel} className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                            <span className="text-lg">+</span> Add Security
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-4">Security Guard Name</th>
                                    <th className="text-left p-4">Phone Number</th>
                                    <th className="text-left p-4">Select Shift</th>
                                    <th className="text-left p-4">Shift Date</th>
                                    <th className="text-left p-4">Shift Time</th>
                                    <th className="text-left p-4">Gender</th>
                                    <th className="text-left p-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {guards.map((guard) => (
                                    <tr key={guard.id} className="border-b">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={guard.image}
                                                    alt=""
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <span>{guard.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">{guard.phone}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${guard.shift === "Day"
                                                    ? "bg-orange-100 text-orange-500"
                                                    : "bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                {guard.shift}
                                            </span>
                                        </td>
                                        <td className="p-4">{guard.shiftDate}</td>
                                        <td className="p-4">{guard.shiftTime}</td>
                                        <td className="p-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${guard.gender === "Male"
                                                    ? "bg-blue-100 text-blue-500"
                                                    : "bg-pink-100 text-pink-500"
                                                    }`}
                                            >
                                                {guard.gender}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button onClick={handleEditModel} className="p-1 rounded-full hover:bg-gray-100">
                                                    <Pencil className="w-6 h-5 text-green-500" />
                                                </button>
                                                <button onClick={handleViewModel} className="p-1 rounded-full hover:bg-gray-100">
                                                    <Eye className="w-6 h-5 text-blue-500" />
                                                </button>
                                                <button onClick={handleDeleteModel} className="p-1 rounded-full hover:bg-gray-100">
                                                    <Trash2 className="w-6 h-5 text-red-500" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Add Security</h2>
          
                    
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Photo Upload */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {photo ? (
              <img src={photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <Camera className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
            id="photo-upload"
          />
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Phone Number<span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
            +91
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Gender and Shift */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Gender<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Shift<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              className="w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            >
              <option value="">Select Shift</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="night">Night</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Shift Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Shift Date<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              value={shiftDate}
              onChange={(e) => setShiftDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              required
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Shift Time<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="time"
              value={shiftTime}
              onChange={(e) => setShiftTime(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              required
            />
            <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Aadhar Card Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Upload Aadhar Card<span className="text-red-500">*</span>
        </label>
        <div
          className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById("file-upload")?.click()}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/png,image/jpeg,image/gif"
            onChange={handleFileChange}
          />
          <div className="mx-auto w-12 h-12 border-2 rounded-lg flex items-center justify-center mb-2">
            <span className="text-2xl">+</span>
          </div>
          <div className="text-sm font-medium">
            {file ? file.name : (
              <>
                <span className="text-blue-600">Upload a file</span> or drag and drop
              </>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={() => setOpenModel(false)}
          className="px-6 py-2 border rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Create
        </button>
      </div>
    </form>
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
            <h2 className="text-lg font-semibold">View Security Guard Details</h2>
            <button onClick={()=>setOpenViewModel(false)} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <img
                src={securityData.image}
                alt={securityData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">{securityData.name}</h3>
            <p className="text-sm text-gray-500">{securityData.date}</p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Shift */}
            <div className="flex flex-col items-center p-3 rounded-lg bg-orange-50">
              <div className="flex items-center gap-1 text-orange-500 mb-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm">Day</span>
              </div>
              <span className="text-xs text-gray-600">Select Shift</span>
            </div>

            {/* Shift Time */}
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50">
              <span className="text-sm font-medium mb-1">{securityData.shiftTime}</span>
              <span className="text-xs text-gray-600">Shift Time</span>
            </div>

            {/* Gender */}
            <div className="flex flex-col items-center p-3 rounded-lg bg-pink-50">
              <div className="flex items-center gap-1 text-pink-500 mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm">Female</span>
              </div>
              <span className="text-xs text-gray-600">Gender</span>
            </div>
          </div>
        </div>
            </div>
          </div>
        )}
             {openDeleteModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Delete Security?</h2>
          
          <p className="text-gray-500">
            Are you sure you want to delete this Security?
          </p>
          
          <div className="flex gap-4 pt-2">
            <button onClick={()=>setOpenDeleteModel(false)}
              type="button"
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        </div>
          </div>
        </div>
      )}
                 {openEditModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Edit Security</h2>
          
          <form className="space-y-6" onSubmit={handleEditSubmit}>
      {/* Photo Upload */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <img src={formData.photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
            id="photo-upload"
          />
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Phone Number<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Gender and Shift */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Gender<span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Shift<span className="text-red-500">*</span>
          </label>
          <select
            name="shift"
            value={formData.shift}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
          >
            <option value="Day">Day</option>
            <option value="Night">Night</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
      </div>

      {/* Shift Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Shift Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="shiftDate"
            value={formData.shiftDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Shift Time<span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="shiftTime"
            value={formData.shiftTime}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
          />
        </div>
      </div>

      {/* Aadhar Card Upload */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Upload Aadhar Card<span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <input type="file" accept=".pdf" onChange={handleAadharUpload} />
          <div>
            <p className="text-sm font-medium">{formData.aadharCard.name}</p>
            <p className="text-xs text-gray-500">{formData.aadharCard.size}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={() =>setOpenEditModel(false)}
          className="px-6 py-2 border rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Create
        </button>
      </div>
    </form>
        </div>
            </div>
          </div>
        )}
            </div>

        </>
    )
}

export default SecurityGuard