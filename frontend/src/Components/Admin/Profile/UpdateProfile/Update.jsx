import React, { useState } from 'react';
import { Activity, DollarSign, Package, Users,  Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../Common/Navbar/Navbar';



const Update = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
  
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [formValues, setFormValues] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      selectSociety: '',
      country: '',
      state: '',
      city: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
      console.log(formValues);
      
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        const maxFileSize = 2 * 1024 * 1024; // 2MB
  
        // Check file type
        if (!validImageTypes.includes(file.type)) {
          setErrorMessage('Please upload a valid image (JPEG or PNG).');
          return;
        }
  
        // Check file size
        if (file.size > maxFileSize) {
          setErrorMessage('Image size should not exceed 2MB.');
          return;
        }
  
        // Read the file as a Data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
          setErrorMessage('');
        };
        reader.readAsDataURL(file);
      }
    };

  

   

    return (
      <>
      <Aside/>
        <div className="main">
        <Navbar/>

        <div className="w-full">
  <img src="/image/blacnk.png" alt="Background" className="w-full" />
</div>
<div className="max-w-[1000px] mx-auto mt-[-100px] flex justify-center p-4">
  <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg">
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
        <div className="relative w-40 h-40">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center">
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
                   
                    {errorMessage && (
                      <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
                    )}
                  </div>
          <h2 className="text-xl font-semibold text-center mt-4">Arlene McCoy</h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { label: 'First Name', name: 'firstName' },
        { label: 'Last Name', name: 'lastName' },
        { label: 'Phone Number', name: 'phoneNumber' },
        { label: 'Email Address', name: 'emailAddress' },
        { label: 'Select Society', name: 'selectSociety' },
        { label: 'Country', name: 'country' },
        { label: 'State', name: 'state' },
        { label: 'City', name: 'city' },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700">{field.label}*</label>
          <input
            type="text"
            name={field.name}
            className="mt-1 block w-full rounded-md border p-2 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formValues[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
      </div>
      <div className="flex justify-end mt-4">
        <Link to="/admin/dashboard">
          <button className="bg-orange-500 flex items-center hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
            <Pencil className="w-4 h-4 mr-2" />
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

        </div>
      </>
    );
};



export default Update;




