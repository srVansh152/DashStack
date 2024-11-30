    import React, { useEffect, useState } from 'react';
    import { Trash, Activity, DollarSign, Package, Users, Bell, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, PencilIcon } from 'lucide-react';
    import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
    import Aside from '../../Common/SideBar/AdminSideBar/Aside';
    import { createImportantNumber, deleteImportantNumber, fetchImportantNumbers, updateImportantNumber, } from '../../../utils/api';
    import Navbar from '../../Common/Navbar/Navbar';
    import { getFacilities, listComplaints, deleteComplaint, updateComplaint, viewComplaint } from '../../../utils/api';


    const DashboardLayout = () => {

        const [notificationsOpen, setNotificationsOpen] = useState(false);

        const [openModel, setOpenModel] = useState(false);
        const [openEditModel, setOpenEditModal] = useState(false);
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
        const [facilities, setFacilities] = useState([])
        const [facility, setFacility] = useState("Parking Facilities");
        const [fetchedComplaints, setFetchedComplaints] = useState([]);
        const [complaintIdToDelete, setComplaintIdToDelete] = useState(null);
        const [complaintIdToEdit, setcomplaintIdToEdit] = useState(null);
        const [viewComplaintDetails, setViewComplaintDetails] = useState(null);
        const [reporterName, setReporterName] = useState("Evelyn Harper")
        const [reportTitle, setReportTitle] = useState("Unethical Behavior");
        const [details, setDetails] = useState("The celebration of Ganesh Chaturthi involves the installation of clay idols in Resident.");
        const [section, setSection] = useState("A");
        const [unitNumber, setUnitNumber] = useState("1001");
        const [urgency, setUrgency] = useState("medium");
        const [currentStatus, setCurrentStatus] = useState("open");
        const [timeframe, setTimeframe] = useState('Month');





        const fetchComplaints = async () => {
            try {
                const response = await listComplaints(); // Replace with your API endpoint

                console.log(response.data.complaints);

                setFetchedComplaints(response.data.complaints); // Assuming the API returns an array of complaints
            } catch (error) {
                console.error('Error fetching complaints:', error);
            }
        };

        useEffect(() => {
            fetchComplaints();
        }, []);





        const fetchFacilities = async () => {
            try {
                const response = await getFacilities();
                console.log(response);

                if (response.success) {
                    setFacilities(response.data);
                } else {
                    throw new Error("Failed to fetch facilities");
                }
            } catch (error) {
                console.error("Error fetching facilities:", error);
            }
        };

        useEffect(() => {
            fetchFacilities();
        }, []);

        const handleViewComplaint = async (complaintId) => {
            try {
                const response = await viewComplaint(complaintId); // Call the view API
                console.log('Complaint details fetched successfully:', response);
                setViewComplaintDetails(response.data.complaint); // Store the fetched details in state
                setOpenViewModel(true); // Open the view modal
            } catch (error) {
                console.error('Error fetching complaint details:', error);
            }
        };

        const handleViewModel = (complaint) => {
            handleViewComplaint(complaint); // Call the view function with the complaint ID
        }



        const handleAddDetails = () => {
            setOpenModel(true);
        };

        const handleEditDetails = (importantNumber) => {
            setname(importantNumber.name); // Populate name field
            setPhoneNumber(importantNumber.phoneNumber); // Populate phone number field
            setWork(importantNumber.work); // Populate work field
            setEditId(importantNumber._id); // Store the ID of the important number being edited
            setOpenEditModal(true); // Open the edit modal
        };

        const handleEditSubmit = async (e) => {
            e.preventDefault();
            try {
                const updatedComplaint = {
                    complainer: reporterName,
                    complaintName: reportTitle,
                    description: details,
                    wing: section,
                    unitNumber: unitNumber,
                    urgency: urgency,
                    status: currentStatus,
                };
                const response = await updateComplaint(complaintIdToEdit, updatedComplaint); // Call the update API
                console.log('Complaint updated successfully:', response);
                setOpenEditModal(false);
                fetchComplaints(); // Refresh the complaints list
            } catch (error) {
                console.error('Error updating complaint:', error);
            }
        };

        const handleDeleteModel = (complaintId) => {
            setOpenDeleteModel(true);
            setComplaintIdToDelete(complaintId);
        };

        const handleDeleteComplaint = async (complaintId) => {
            try {
                console.log(complaintId);

                await deleteComplaint(complaintId); // Call the delete API
                console.log('Complaint deleted successfully');
                fetchComplaints(); // Refresh the complaints list
            } catch (error) {
                console.error('Error deleting complaint:', error);
            }
        };

        const handleEditModel = (complaint) => {
            setcomplaintIdToEdit(complaint._id)
            setReporterName(complaint.complainer);
            setReportTitle(complaint.complaintName);
            setDetails(complaint.description);
            setSection(complaint.wing);
            setUnitNumber(complaint.unitNumber);
            setUrgency(complaint.urgency);
            setCurrentStatus(complaint.status);
            setOpenEditModal(true);
        }

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
            { month: 'Jan', value: 400, type: 'month' },
            { month: 'Feb', value: 300, type: 'month' },
            { month: 'Mar', value: 500, type: 'month' },
            { month: 'Apr', value: 450, type: 'month' },
            { month: 'May', value: 30000, type: 'month' },
            { month: 'Jun', value: 22000, type: 'month' },
            { month: 'Jul', value: 28000, type: 'month' },
            { month: 'Aug', value: 25000, type: 'month' },
            { month: 'Sep', value: 35000, type: 'month' },
            { month: 'Oct', value: 30000, type: 'month' },
            { month: 'Nov', value: 40000, type: 'month' },
            { month: 'Dec', value: 55000, type: 'month' },
            { year: '2022', value: 1600, type: 'year' },
            { year: '2023', value: 1900, type: 'year' },
        ];


        const maintenanceData = [
            { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
            { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
            { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
            { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" },
            { name: "Roger Lubin", status: "2 Month Pending", amount: "₹ 5,000" }
        ];

        const getPriorityStyles = (priority) => {
            switch (priority.toLowerCase()) {
                case 'high':
                    return 'bg-red-500 text-white'
                case 'medium':
                    return 'bg-blue-500 text-white'
                case 'low':
                    return 'bg-green-500 text-white'
                default:
                    return 'bg-gray-500 text-white'
            }
        }

        const getStatusStyles = (status) => {
            switch (status.toLowerCase()) {
                case 'pending':
                    return 'bg-yellow-100 text-yellow-800'
                case 'open':
                    return 'bg-blue-100 text-blue-800'
                case 'solve':
                    return 'bg-green-100 text-green-800'
                default:
                    return 'bg-gray-100 text-gray-800'
            }
        }

        // Filter the chart data based on the selected timeframe
        const filteredChartData =
            timeframe === 'Month'
                ? chartData.filter((data) => data.type === 'month')
                : chartData.filter((data) => data.type === 'year');

        // Handle dropdown change
        const handleChange = (event) => {
            setTimeframe(event.target.value);
        };



        // Fetch important numbers from the API
        const loadImportantNumbers = async () => {
            const result = await fetchImportantNumbers();
            if (result.success) {
                setImportantNumbers(result.data); // Update the state with fetched data
            } else {
                console.error("Failed to load important numbers:", result.message);
                setImportantNumbers([]); // Reset state on failure
            }
        };

        useEffect(() => {
            loadImportantNumbers();
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
                        <Navbar />
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
                                                <select
                                                    className="px-4 py-2 border rounded-md bg-white"
                                                    onChange={handleChange}
                                                    value={timeframe}
                                                >
                                                    <option value="Month">Month</option>
                                                    <option value="Year">Year</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="h-48 sm:h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart
                                                    data={filteredChartData}
                                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                                >
                                                    <XAxis dataKey={timeframe === 'Month' ? 'month' : 'year'} />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="value"
                                                        stroke="#4F46E5"
                                                        strokeWidth={2}
                                                        dot={{ fill: '#4F46E5', r: 4 }}
                                                    />
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
                                            <div className="overflow-x-auto rounded-lg border bg-white">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Complainer Name
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Complaint Name
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Description
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Unit Number
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Priority
                                                            </th>
                                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Status
                                                            </th>
                                                            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 bg-white">
                                                        {fetchedComplaints.map((complaint) => (
                                                            <tr key={complaint._id} className="hover:bg-gray-50">
                                                                <td className="whitespace-nowrap px-6 py-4">
                                                                    <div className="flex items-center">
                                                                        <img
                                                                            className="h-8 w-8 rounded-full object-cover"
                                                                            src={complaint.complainer.avatar}
                                                                            alt={complaint.complaintName}
                                                                        />
                                                                        <span className="ml-2 text-sm font-medium text-gray-900">{complaint.complaintName}</span>
                                                                    </div>
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{complaint.complaintName}</td>
                                                                <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-500">{complaint.description}</td>
                                                                <td className="whitespace-nowrap px-6 py-4">
                                                                    <div className="flex items-center gap-1">
                                                                        <span className="text-sm font-medium text-gray-900">{complaint.unitNumber}</span>
                                                                        <span className="text-sm text-gray-500">{complaint.unitId}</span>
                                                                    </div>
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4">
                                                                    <span
                                                                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getPriorityStyles(
                                                                            complaint.priority
                                                                        )}`}
                                                                    >
                                                                        {complaint.priority}
                                                                    </span>
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4">
                                                                    <span
                                                                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(
                                                                            complaint.status
                                                                        )}`}
                                                                    >
                                                                        {complaint.status}
                                                                    </span>
                                                                </td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-right">
                                                                    <div className="flex justify-end space-x-2">
                                                                        <button onClick={() => handleEditModel(complaint)} className="rounded p-1 text-green-600 hover:bg-green-50">
                                                                            <PencilIcon className="h-4 w-4" />
                                                                        </button>
                                                                        <button onClick={() => handleViewModel(complaint._id)} className="rounded p-1 text-blue-600 hover:bg-blue-50">
                                                                            <Eye className="h-4 w-4" />
                                                                        </button>
                                                                        <button onClick={() => handleDeleteModel(complaint._id)} className="rounded p-1 text-red-600 hover:bg-red-50">
                                                                            <Trash className="h-4 w-4" />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
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
                                            {facilities.map((facility, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-4 p-4 bg-white rounded-lg border"
                                                >
                                                    <div className="w-10 h-10 bg-gray-100 rounded-full" />
                                                    <div>
                                                        <p className="font-medium">{facility.facilityName}</p>
                                                        <p className="text-sm text-gray-500">{facility.scheduleServiceDate}</p>
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

                    {openEditModel && (
                        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
                            <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
                                <div className="p-6 space-y-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Edit Complaint</h2>
                                    <form className="space-y-4" onSubmit={handleEditSubmit}>
                                        <div className="space-y-1.5">
                                            <label className="block text-sm font-medium">
                                                Complainer Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={reporterName}
                                                onChange={(e) => {
                                                    setReporterName(e.target.value);
                                                }}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-sm font-medium">
                                                Complaint Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={reportTitle}
                                                onChange={(e) => {
                                                    setReportTitle(e.target.value);
                                                }}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-sm font-medium">
                                                Description*<span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                value={details}
                                                onChange={(e) => {
                                                    setDetails(e.target.value);
                                                }}
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="block text-sm font-medium">
                                                    Wing<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={section}
                                                    onChange={(e) => {
                                                        setSection(e.target.value);

                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="block text-sm font-medium">
                                                    Unit<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={unitNumber}
                                                    onChange={(e) => {
                                                        setUnitNumber(e.target.value);

                                                    }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-sm font-medium">
                                                Urgency<span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-4">
                                                {["high", "medium", "low"].map((level) => (
                                                    <label key={level} className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="urgency"
                                                            value={level}
                                                            checked={urgency === level}
                                                            onChange={(e) => {
                                                                setUrgency(e.target.value);

                                                            }}
                                                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                                                        />
                                                        <span className="ml-2 text-sm">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-sm font-medium">
                                                Status<span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-4">
                                                {["open", "pending", "resolved"].map((status) => (
                                                    <label key={status} className="flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="status"
                                                            value={status}
                                                            checked={currentStatus === status}
                                                            onChange={(e) => {
                                                                setCurrentStatus(e.target.value);

                                                            }}
                                                            className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                                                        />
                                                        <span className="ml-2 text-sm">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <button
                                                onClick={() => setOpenEditModal(false)}
                                                type="button"
                                                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                    {openDeleteModel && (
                        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
                            <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
                                <div className="p-6 space-y-4">
                                    <h2 className="text-xl font-semibold text-gray-900">Delete Complaint?</h2>
                                    <p className="text-gray-500">Are you sure you want to delete this Complaint?</p>
                                    <div className="flex gap-4 pt-2">
                                        <button onClick={() => setOpenDeleteModel(false)} type="button" className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDeleteComplaint(complaintIdToDelete); // Call delete function with the stored ID
                                                setOpenDeleteModel(false); // Close the modal
                                            }}
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

                </div>
                {openViewModel && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
                        <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
                            <div className="relative p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">View Complaint</h2>
                                    <button onClick={() => setOpenViewModel(false)} className="text-gray-400 hover:text-gray-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>

                                {viewComplaintDetails && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-gray-500">Request Name</label>
                                            <p className="text-gray-900">{viewComplaintDetails.complaintName}</p>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-500">Description</label>
                                            <p className="text-gray-900">{viewComplaintDetails.description}</p>
                                        </div>

                                        <div className="grid grid-cols-4 gap-4">
                                            <div>
                                                <label className="block text-sm text-gray-500">Wing</label>
                                                <p className="text-gray-900">{viewComplaintDetails.wing}</p>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-gray-500">Unit</label>
                                                <p className="text-gray-900">{viewComplaintDetails.unitNumber}</p>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-gray-500">Priority</label>
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {viewComplaintDetails.priority}
                                                </span>
                                            </div>

                                            <div>
                                                <label className="block text-sm text-gray-500">Status</label>
                                                <span className="text-blue-600">{viewComplaintDetails.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
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
