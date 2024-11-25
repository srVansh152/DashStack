import React, { useEffect, useState } from 'react';
import { Activity, DollarSign, Package, Users,  Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import Aside from '../../Common/SideBar/AdminSideBar/Aside';

const DashboardLayout = () => {

    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [openEditModel, setOpenEditModel] = useState(false);
    const [openEditComplaintsModel, setOpenEditComplaintsModel] = useState(false);
    const [openDeleteModel, setOpenDeleteModel] = useState(false);
    const [openViewModel, setOpenViewModel] = useState(false);
    const [name, setname] = useState(''); // State for full name
    const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number
    const [work, setWork] = useState(''); // State for work
    const [complainerName, setComplainerName] = useState(''); // State for complainer name
    const [complaintName, setComplaintName] = useState(''); // State for complaint name
    const [description, setDescription] = useState(''); // State for description
    const [wing, setWing] = useState(''); // State for wing
    const [unit, setUnit] = useState(''); // State for unit
    const [priority, setPriority] = useState('Medium'); // State for priority
    const [status, setStatus] = useState('Open'); // State for status
    const [importantNumbers, setImportantNumbers] = useState([]); // State for important numbers
    const [deleteId, setDeleteId] = useState(null);
    const [editId, setEditId] = useState(null);



    const handleAddDetails = () => {
        setOpenModel(true);
    };

    const handleEditDetails = (importantNumber) => {
        setname(importantNumber.name); // Populate name field
        setPhoneNumber(importantNumber.phoneNumber); // Populate phone number field
        setWork(importantNumber.work); // Populate work field
        setEditId(importantNumber._id); // Store the ID of the important number being edited
        setOpenEditModel(true); // Open the edit modal
    };

    const handleDeleteDetails = () => {
        setOpenDeleteModel(true);
    };
    const handleViewDetails = () => {
        setOpenViewModel(true);
    };
    const handleEditComplaintsDetails = () => {
        setOpenEditComplaintsModel(true);
    };

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

    useEffect(() => {
        const fetchImportantNumbers = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve the token
                const response = await axios.get('https://socitey-management-system-server.onrender.com/api/important-numbers', {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the token in the headers
                    }
                });
                console.log("API Response:", response.data.data); // Log the response data

                // Ensure the response data is an array
                if (Array.isArray(response.data.data)) {
                    setImportantNumbers(response.data.data);
                    console.log("Important Numbers Set:", response.data); // Log the data being set
                } else {
                    console.error("Unexpected data format:", response.data);
                    setImportantNumbers([]); // Reset to empty array on unexpected format
                }
            } catch (error) {
                console.error("Error fetching important numbers:", error);
                setImportantNumbers([]); // Reset to empty array on error
            }
        };

        fetchImportantNumbers();
    }, []);

    // Function to handle adding important number
    const handleAddImportantNumber = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // Prepare the important number data
            const numberData = { name, phoneNumber, work };

            // Call the API
            const response = await createImportantNumber(numberData);

            if (response.success) {
                console.log("New important number:", response.data);

                // Reload the important numbers list
                await loadImportantNumbers();

                // Close the modal
                setOpenModel(false);
            } else {
                console.error("Error:", response.message); // Log the error message
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    // Function to handle deleting important number
    const handleDeleteImportantNumber = async () => {
        if (deleteId) {
            try {
                console.log("Attempting to delete important number with ID:", deleteId);

                // Call the API to delete the number
                const response = await deleteImportantNumber(deleteId);

                if (response.success) {
                    // Update the state to remove the deleted number
                    loadImportantNumbers((prevNumbers) =>
                        prevNumbers.filter((number) => number.id !== deleteId)
                    );
                    // Close the delete modal
                    setOpenDeleteModel(false);
                } else {
                    console.error("Error:", response.message); // Log error message
                }
            } catch (error) {
                console.error("Unexpected error while deleting important number:", error);
            }
        } else {
            console.error("Delete ID is missing.");
        }
    };

    const handleEditImportantNumber = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const updatedData = { name, phoneNumber, work }; // Prepare the updated data

            // Call the API to update the important number
            const response = await updateImportantNumber(editId, updatedData);
             // Pass the edit ID and the updated data

            if (response.success) {
                // Log the updated important number
                console.log("Updated important number:", response.data);

                // Reload the important numbers list or update the local state
                await loadImportantNumbers(); // Assuming this function reloads the important numbers list

                // Close the modal
                setOpenEditModel(false);
            } else {
                console.error("Error:", response.message); // Log the error message
            }
        } catch (error) {
            console.error("Unexpected error while updating important number:", error);
        }
    };




    // Function to handle editing complaint
    const handleEditComplaint = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.put('/api/complaints', {
                complainerName,
                complaintName,
                description,
                wing,
                unit,
                priority,
                status
            });
            console.log(response.data); // Handle success response
            setOpenEditComplaintsModel(false); // Close modal
        } catch (error) {
            console.error(error); // Handle error
        }
    };

    // Function to handle opening the delete modal
    const openDeleteModal = (id) => {
        setDeleteId(id); // Set the ID of the number to be deleted
        setOpenDeleteModel(true); // Open the delete modal
    };

    return (<>
        <Aside />
        <div className="main">
            <div className="flex h-screen bg-gray-50">

                <div className="flex-1 overflow-auto">
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
                    <main className="p-4 sm:p-6">
                        {/* Stats Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {statsCards.map((card, index) => (
                                <StatsCard key={index} {...card} />
                            ))}
                        </div>

                        {/* Main Content Section */}
                        <div className="bg-gray-50">
                            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-4 sm:p-6 bg-gray-50">
                                {/* Chart Section */}
                                <div className="lg:col-span-4 bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
                                        <h2 className="text-lg sm:text-xl font-semibold">Total Balance</h2>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <select className="px-4 py-2 border rounded-md bg-white">
                                                <option>Month</option>
                                                <option>Year</option>
                                            </select>
                                            <div className="flex gap-3">
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="timeframe" className="text-blue-500" />
                                                    <span className="text-sm">Last week</span>
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="timeframe" className="text-blue-500" defaultChecked />
                                                    <span className="text-sm">Last month</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-48 sm:h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={chartData}>
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={{ fill: '#4F46E5', r: 4 }} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* Important Numbers Section */}
                                <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                                        <h2 className="text-lg sm:text-xl font-semibold">Important Numbers</h2>
                                        <button onClick={() => {
                                            handleAddDetails();
                                        }} className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                                            Add
                                        </button>
                                    </div>
                                    <div className="space-y-4 overflow-y-auto h-48 sm:h-72">
                                        {importantNumbers.length === 0 ? (
                                            <div className="p-4 bg-white rounded-lg border text-center">
                                                <p className="text-sm text-gray-500">Loading...</p>
                                            </div>
                                        ) : (
                                            importantNumbers.map((number, i) => (
                                                <div key={i} className="p-4 bg-white rounded-lg border">
                                                    <div className="flex justify-between items-start">
                                                        <div className="space-y-2">
                                                            <p className="text-sm text-gray-500">Name: <span className="text-gray-700">{number.name}</span></p>
                                                            <p className="text-sm text-gray-500">Ph Number: <span className="text-gray-700">{number.phoneNumber}</span></p>
                                                            <p className="text-sm text-gray-500">Work: <span className="text-gray-700">{number.work}</span></p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <button onClick={() => {
                                                                openDeleteModal(number._id)
                                                            }} className="p-1 text-red-500 hover:bg-red-50 rounded">
                                                                <Trash2 size={16} />
                                                            </button>
                                                            <button onClick={() => handleEditDetails(number)} className="p-1 text-green-500 hover:bg-green-50 rounded">
                                                                <CheckCircle size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                {/* Pending Maintenances Section */}
                                <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                                        <h2 className="text-lg sm:text-xl font-semibold">Pending Maintenances</h2>
                                        <a href="#" className="text-blue-500 hover:underline">View all</a>
                                    </div>
                                    <div className="grid gap-4 overflow-y-auto h-48 sm:h-72">
                                        {maintenanceData.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-gray-100 rounded-full" />
                                                    <div>
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-sm text-gray-500">{item.status}</p>
                                                    </div>
                                                </div>
                                                <p className="font-medium text-red-500">{item.amount}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Sections */}
                        <div className="p-4 sm:p-6 bg-gray-50">
                            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                                {/* Complaint List Section */}
                                <div className="lg:col-span-7 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                                        <h2 className="text-lg sm:text-xl font-semibold">Complaint List</h2>
                                        <select className="p-2 border rounded-lg cursor-pointer">
                                            <option>Month</option>
                                            <option>Quarter</option>
                                            <option>Year</option>
                                        </select>
                                    </div>
                                    <div className="overflow-y-auto h-48 sm:h-60">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-left text-sm text-gray-500">
                                                    <th className="pb-4">Complainer Name</th>
                                                    <th className="pb-4">Date</th>
                                                    <th className="pb-4">Priority</th>
                                                    <th className="pb-4">Status</th>
                                                    <th className="pb-4">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {complaints.map(({ name, date, priority, status }, index) => (
                                                    <tr key={index} className="border-t hover:bg-gray-50 transition-colors group">
                                                        <td className="py-4 flex items-center gap-2 text-sm">
                                                            <img src="/api/placeholder/32/32" alt="" className="w-8 h-8 rounded-full group-hover:ring-2 ring-orange-500 transition-all" />
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
                                                                <button onClick={() => handleEditDetails()} className="p-1.5 text-green-500 hover:bg-green-50 rounded-full transition-colors">
                                                                    <Edit className="w-4 h-4" />
                                                                </button>
                                                                <button onClick={() => handleViewDetails()} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                                                                    <Eye className="w-4 h-4" />
                                                                </button>
                                                                <button onClick={() => handleDeleteDetails()} className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Upcoming Activities Section */}
                                <div className="lg:col-span-3 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                                        <h2 className="text-lg sm:text-xl font-semibold">Upcoming Activity</h2>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border">
                                            Month
                                            <ChevronDown size={16} />
                                        </button>
                                    </div>
                                    <div className="space-y-4 overflow-y-auto h-48 sm:h-60">
                                        {activities.map(({ name, date, time }, index) => (
                                            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                                                <div className="w-10 h-10 bg-gray-100 rounded-full" />
                                                <div>
                                                    <p className="font-medium">{name}</p>
                                                    <p className="text-sm text-gray-500">{date} • {time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>



                </div>
                {openModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="w-[400px] bg-white rounded-lg shadow-lg p-6">
                                <h1 className="font-title text-lg font-semibold text-neutral-900 mb-4">Add Important Number</h1>
                                <form className="space-y-4" onSubmit={handleAddImportantNumber}>
                                    <div>
                                        <label className="block text-neutral-700 text-sm font-medium">
                                            Full Name<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Full Name"
                                            className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)} // Update state on change
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-neutral-700 text-sm font-medium">
                                            Phone Number<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="+91"
                                            className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)} // Update state on change
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-neutral-700 text-sm font-medium">
                                            Work<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter Work"
                                            className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            value={work}
                                            onChange={(e) => setWork(e.target.value)} // Update state on change
                                        />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button
                                            type="button"
                                            className="px-6 py-2 border border-neutral-300 rounded-md text-neutral-500 hover:bg-neutral-100 w-[47%]" onClick={() => setOpenModel(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-[#F6F8FB] text-black rounded-md  w-[47%] hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] transition-all duration-300 hover:text-white"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div
                                className="onsite-modal-overlay"

                            ></div>

                        </div>
                    </div>
                )}
                {openEditModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="w-[400px] bg-white rounded-lg shadow-lg p-6">
                                <h1 className="font-title text-lg font-semibold text-neutral-900 mb-4">Edit Important Number</h1>
                                <form className="space-y-4" onSubmit={handleEditImportantNumber}>
                                    <div>
                                        <label className="block text-neutral-700 text-sm font-medium">
                                            Full Name<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)} // Update the name state
                                            placeholder="Enter Full Name"
                                            className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-neutral-700 text-sm font-medium">
                                            Phone Number<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)} // Update the phone number state
                                            placeholder="+91"
                                            className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-neutral-700 text-sm font-medium">
                                            Work<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={work}
                                            onChange={(e) => setWork(e.target.value)} // Update the work state
                                            placeholder="Enter Work"
                                            className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button
                                            type="button"
                                            className="px-6 py-2 border border-neutral-300 rounded-md text-neutral-500 hover:bg-neutral-100 w-[47%]"
                                            onClick={() => setOpenEditModel(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-[#F6F8FB] text-black rounded-md w-[47%] hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] transition-all duration-300 hover:text-white"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="onsite-modal-overlay"></div>
                        </div>
                    </div>
                )}
                {openEditComplaintsModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
                                <h1 className="text-xl font-bold mb-4">Edit Complaint</h1>
                                <form onSubmit={handleEditComplaint}>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="complainerName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Complainer Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="complainerName"
                                                name="complainerName"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={complainerName}
                                                onChange={(e) => setComplainerName(e.target.value)} // Update state on change
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="complaintName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Complaint Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="complaintName"
                                                name="complaintName"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={complaintName}
                                                onChange={(e) => setComplaintName(e.target.value)} // Update state on change
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                                Description<span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)} // Update state on change
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label htmlFor="wing" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Wing<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="wing"
                                                    name="wing"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={wing}
                                                    onChange={(e) => setWing(e.target.value)} // Update state on change
                                                    required
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Unit<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="unit"
                                                    name="unit"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    value={unit}
                                                    onChange={(e) => setUnit(e.target.value)} // Update state on change
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-medium text-gray-700 mb-1">Priority<span className="text-red-500">*</span></span>
                                            <div className="flex gap-4 justify-between ">
                                                {['High', 'Medium', 'Low'].map((priorityOption) => (
                                                    <label key={priorityOption} className="flex items-center border focuse:ring-orange-500 p-3 rounded-md">
                                                        <input
                                                            type="radio"
                                                            name="priority"
                                                            value={priorityOption}
                                                            className="mr-2 text-orange-500 focus:ring-orange-500"
                                                            checked={priority === priorityOption} // Check if this is the selected priority
                                                            onChange={() => setPriority(priorityOption)} // Update state on change
                                                        />
                                                        <span className="text-sm">{priorityOption}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-medium text-gray-700 mb-1">Status<span className="text-red-500">*</span></span>
                                            <div className="flex gap-4 justify-between">
                                                {['Open', 'Pending', 'Solved'].map((statusOption) => (
                                                    <label key={statusOption} className="flex items-center border rounded-md p-3">
                                                        <input
                                                            type="radio"
                                                            name="status"
                                                            value={statusOption}
                                                            className="mr-2 text-orange-500 focus:ring-orange-500"
                                                            checked={status === statusOption} // Check if this is the selected status
                                                            onChange={() => setStatus(statusOption)} // Update state on change
                                                        />
                                                        <span className="text-sm">{statusOption}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center gap-4">
                                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-[47%]" onClick={() => setOpenEditComplaintsModel(false)}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-[47%]">
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                {openDeleteModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg max-w-sm w-full">
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-4">Delete Number?</h2>
                                    <p className="text-gray-600 mb-6">Are you sure you want to delete this number?</p>
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={() => setOpenDeleteModel(false)}
                                            className="px-4 py-2 rounded-md text-gray-600 border rounded-md hover:bg-gray-100 w-[47%]"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleDeleteImportantNumber}
                                            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 w-[47%]"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {openViewModel && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <h1 className="text-xl font-bold">View Complain</h1>
                                    <button className="text-gray-500 hover:text-gray-700" aria-label="Close" onClick={() => setOpenViewModel(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                                            <span className="text-xl font-semibold text-gray-600">EH</span>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold">Evelyn Harper</h2>
                                            <p className="text-sm text-gray-500">Aug 5, 2024</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 py-3">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Request Name</h3>
                                            <p className="font-medium">Unethical Behavior</p>
                                        </div>
                                        <div >
                                            <h3 className="text-sm font-medium text-gray-500">Description</h3>
                                            <p className="text-sm">Offering, giving, receiving, or soliciting of value to influence the actions of an</p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm justify-between">
                                            <div className=''>
                                                <span className="font-medium text-gray-500 block">Wing</span>
                                                <span className="">A</span>
                                            </div>
                                            <div className=''>
                                                <span className="font-medium text-gray-500 block">Unit</span>
                                                <span className="">1002</span>
                                            </div>
                                            <div className="">
                                                <span className="font-medium text-gray-500 block">Priority</span>
                                                <span className="px-2  py-1 bg-blue-100 text-blue-800 rounded-full">Medium</span>
                                            </div>
                                            <div className=''>
                                                <span className="font-medium text-gray-500 block">Status</span>
                                                <span className="">Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    );
};



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
                <button onClick={() => handleEditDetails()} className="p-1.5 text-green-500 hover:bg-green-50 rounded-full transition-colors">
                    <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleViewDetails()} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">

                    <Eye className="w-4 h-4" />
                </button>
                <button onClick={() => handleDeleteDetails()} className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors">
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
