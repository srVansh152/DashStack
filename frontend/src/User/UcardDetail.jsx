import React, { useState } from 'react'
import UAside from './UAside'
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';


const UcardDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openModel, setOpenModel] = useState(true);
    const [formData, setFormData] = useState({
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form Submitted:", formData);
    
        // You can add further processing here, like API calls
        if (validateForm()) {
          alert("Form submitted successfully!");
        } else {
          alert("Please fill in all required fields correctly.");
        }
      };
    
      const validateForm = () => {
        const { cardName, cardNumber, expiryDate, cvv } = formData;
    
        // Simple validation to check for empty fields
        return (
          cardName.trim() !== "" &&
          cardNumber.trim() !== "" &&
          expiryDate.trim() !== "" &&
          cvv.trim() !== ""
        );
      };
    const handleAddModel = () => {
      setOpenModel(true);
    };

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
    <div className='flex h-screen bg-gray-50'>
     <UAside/>
     <div className="flex-1 overflow-auto">
     <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm  top-0 z-10">
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
     <main className="p-6">
        {/* Breadcrumb */}
      

        {/* Maintenance Details */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium mb-4">Show Maintenance Details</h2>
          <div className="flex gap-8 justify-end">
            <div>
              <div className="text-sm text-gray-500">Maintenance Amount</div>
              <div className="text-2xl font-medium text-green-600">₹ 1,500</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Penalty Amount</div>
              <div className="text-2xl font-medium text-red-500">₹ 500</div>
            </div>
          </div>
        </div>

        {/* Pending Maintenance */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Pending Maintenance</h2>
           <Link to="/user/uview">
           <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">
              View Invoice
            </button>
           </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-blue-500  text-white px-4 py-2 rounded">Maintenance</div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded">Pending</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Bill Date</span>
                    <span>1/01/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pending Date</span>
                    <span>1/01/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Maintenance Amount</span>
                    <span>1000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Maintenance Penalty Amount</span>
                    <span>250.00</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Grand Total</span>
                    <span className="text-green-600">₹ 1,250</span>
                  </div>
                </div>
                <button onClick={handleAddModel} className="w-full py-2 bg-orange-600 text-white rounded-lg">
                  Pay Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Due Maintenance */}
        <div>
          <h2 className="text-lg font-medium mb-4">Due Maintenance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded">Maintenance</div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded">Pending</div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span>1/01/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amount</span>
                    <span>1000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Due Maintenance Amount</span>
                    <span>250.00</span>
                  </div>
                </div>
                <button onClick={handleAddModel} className="w-full py-2 bg-orange-600 text-white rounded-lg">
                  Pay Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
     </div>
     {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-4">
          <h2 className="text-lg font-medium mb-6">Detail of the Per Person</h2>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Card Name */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Card Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          placeholder=""
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
        />
      </div>

      {/* Card Number */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium">
          Card Number<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder=""
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="w-6 h-6 rounded">
                <img src="/image/master.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Expiry Date and CVV */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            Expiry Date<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder=""
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">
            CVV<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder=""
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      
   

        <div className=" flex gap-3">
          <Link to="/user/Maintenace">
          <button onClick={()=>setOpenModel(false)} className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50">
            Cancel
          </button>
          </Link>
          <button  type="submit" className="flex-1 px-4 py-2.5 bg-orange-500  text-white rounded-lg hover:bg-orange-600">
            Pay Now
          </button>
        </div>
        </form>
        </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default UcardDetail
