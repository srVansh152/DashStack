import React, { useState, useEffect } from 'react'

import { ArrowLeft, FileText, FileImage, Activity, DollarSign, Package, Users, Settings, LogOut, Edit, Eye, Trash2, Check, X, CheckCircle, ChevronDown, MoreHorizontal, Trash } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../Common/Navbar/Navbar';
import { getResidents, getResidentDetails } from '../../../../utils/api';
import { toast } from 'react-hot-toast';




function Residence() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openProfileModel, setOpenProfilModel] = useState(false);

  const [status, setStatus] = useState('occupied');
  const [agreement, setAgreement] = useState(false);
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [residentDetails, setResidentDetails] = useState(null);
  const [selectedResidentId, setSelectedResidentId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    setLoading(true);
    const response = await getResidents();
    if (response.success) {
      const transformedData = response.data.map(resident => ({
        _id: resident._id,
        name: resident.fullName,
        avatar: resident.photo,
        unitNumber: resident.unitNumber,
        unitStatus: resident.owner ? 'Occupied' : 'Vacant',
        residentStatus: resident.owner ? 'Owner' : 'Tenant',
        phoneNumber: resident.phoneNumber,
        member: resident.members?.length || 0,
        vehicle: resident.vehicles?.length || 0,
        email: resident.email,
        wing: resident.wing,
        age: resident.age,
        gender: resident.gender,
        documents: {
          aadhaarFront: resident.aadhaarFront,
          aadhaarBack: resident.aadhaarBack,
          addressProof: resident.addressProof,
          rentAgreement: resident.rentAgreement
        },
        members: resident.members || [],
        vehicles: resident.vehicles || []
      }));
      console.log(transformedData);
      setResidents(transformedData);
    } else {
      setError(response.message);
    }
    setLoading(false);
  };

  const handleAddDetails = () => {
    if (agreement) {
      const newResidentData = {
        _id: null,
        fullName: '',
        phoneNumber: '',
        email: '',
        age: '',
        gender: '',
        unitNumber: '',
        wing: '',
        photo: '',
        owner: status === 'occupied',
        relation: 'self',
        members: [],
        vehicles: [],
        documents: {
          aadhaarFront: '',
          aadhaarBack: '',
          addressProof: '',
          rentAgreement: ''
        },
        isNewResident: true
      };

      navigate('/admin/form', {
        state: {
          isEditing: false,
          residentData: newResidentData
        }
      });
    } else {
      setOpenModel(true);
    }
  };
  const handleDeleteDetails = () => {
    setOpenDeleteModel(true);
  };

  const handleProfileDetails = (resident) => {
    setSelectedResidentId(resident._id);
    setOpenProfilModel(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfilModel(false);
    setSelectedResidentId(null);
    setResidentDetails(null);
  };

  const fetchResidentDetails = async (id) => {
    try {
      const response = await getResidentDetails(id);
      if (response.success) {
        setResidentDetails(response.data);
      } else {
        toast.error(response.message || "Failed to fetch resident details");
      }
    } catch (error) {
      console.error("Error fetching resident details:", error);
      toast.error("Failed to fetch resident details");
    }
  };

  useEffect(() => {
    if (openProfileModel && selectedResidentId) {
      fetchResidentDetails(selectedResidentId);
    }
  }, [openProfileModel, selectedResidentId]);

  const handleEditModel = (resident) => {
    const formattedResident = {
      _id: resident._id,
      fullName: resident.name,
      phoneNumber: resident.phoneNumber,
      email: resident.email,
      age: resident.age,
      gender: resident.gender,
      unitNumber: resident.unitNumber,
      wing: resident.wing,
      photo: resident.avatar,
      owner: resident.residentStatus === 'Owner',
      relation: 'self',
      members: resident.members.map(member => ({
        _id: member._id,
        name: member.name,
        phoneNumber: member.phoneNumber,
        email: member.email,
        age: member.age,
        gender: member.gender,
        relation: member.relation
      })),
      vehicles: resident.vehicles?.map(vehicle => ({
        _id: vehicle._id,
        type: vehicle.type,
        name: vehicle.name,
        number: vehicle.number
      })) || [],
      documents: {
        aadhaarFront: resident.documents?.aadhaarFront,
        aadhaarBack: resident.documents?.aadhaarBack,
        addressProof: resident.documents?.addressProof,
        rentAgreement: resident.documents?.rentAgreement
      }
    };

    navigate('/admin/form', { 
      state: { 
        isEditing: true,
        residentData: formattedResident
      } 
    });
  };

  return (
    <div>
      <Aside />
      <div className="main">
        <Navbar />


        <div className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Resident Tenant and Owner Details</h2>
              <button
                onClick={handleAddDetails}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Add New Resident Details
              </button>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {loading ? (
                <div className="p-4 text-center text-gray-600">Loading residents...</div>
              ) : error ? (
                <div className="p-4 text-center text-red-600">{error}</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Number</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resident Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {residents.map((resident) => (
                        <tr key={resident._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                {resident.avatar ? (
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={resident.avatar}
                                    alt={resident.name}
                                  />
                                ) : (
                                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                                )}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {resident.name || '-'}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {resident.unitNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${resident.unitStatus === 'Occupied' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                              {resident.unitStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${resident.residentStatus === 'Tenant' ? 'bg-pink-100 text-pink-800' : resident.residentStatus === 'Owner' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                              {resident.residentStatus}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.phoneNumber}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.member}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.vehicle}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button onClick={() => handleEditModel(resident)} className="rounded p-1 text-green-600 hover:bg-green-50">
                              <Edit className="h-5 w-5" />
                            </button>
                            <button onClick={() => handleDeleteDetails(resident)} className="rounded p-1 text-red-600 hover:bg-red-50">
                              <Trash className="h-5 w-5" />
                            </button>
                            <button onClick={() => handleProfileDetails(resident)} className="rounded p-1 text-blue-600 hover:bg-blue-50">
                              <Eye className="h-5 w-5" />
                              {/* <MoreHorizontal className="h-5 w-5" /> */}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>



        {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Residence Status</h2>
                <div className=" grid-cols-2 grid gap-4 py-2">

                  <label className=" items-center p-3 rounded-lg border border-orange-500 ">
                    <input type="radio" name="status" className="form-radio text-orange-500 bg-orange-500" defaultChecked />

                    <span className="text-black ml-2">Occupied </span>
                  </label>
                  <label className=" items-center p-3 rounded-lg border border-gray-200">
                    <input disabled type="radio" name="status" className="form-radio text-gray-400" />
                    <span className="text-gray-600  ml-2">Vacate</span>
                  </label>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <input type="checkbox" className="form-checkbox text-orange-500 rounded" />
                  <span className="ml-2">By submitting, you agree to select Occupied</span>
                </div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => setOpenModel(false)} className="px-5 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <Link to="/admin/form">
                    <button className="px-4 ml-2 w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md hover:from-orange-600 hover:to-orange-700 transition-colors">
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {openDeleteModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Update Status</h2>
                <div className=" grid-cols-2 grid gap-4 py-2">
                  <label className=" items-center p-3 rounded-lg border border-gray-200">
                    <input disabled type="radio" name="status" className="form-radio text-gray-400" />
                    <span className="text-gray-600  ml-2">Occupied</span>
                  </label>
                  <label className=" items-center p-3 rounded-lg border border-orange-500 ">
                    <input type="radio" name="status" className="form-radio text-orange-500 bg-orange-500" defaultChecked />

                    <span className="text-black ml-2">Vacate</span>
                  </label>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <input type="checkbox" className="form-checkbox text-orange-500 rounded" />
                  <span className="ml-2">By submitting, you agree to select Occupied</span>
                </div>

                <div className="flex justify-between mt-6">

                  <button onClick={() => setOpenDeleteModel(false)} className="px-5 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <Link to='/viewmodel'>
                    <button className="px-4 ml-2 w-full py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md hover:from-orange-600 hover:to-orange-700 transition-colors">
                      Save
                    </button>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        )}
        {openProfileModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="p-6">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center">
                  <button
                    onClick={handleCloseProfileModal}
                    className="mr-2 text-gray-600 hover:text-gray-800"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <h1 className="text-lg font-semibold text-gray-800">View Owner Details</h1>
                </div>

                <div className="px-4 py-6">
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={residentDetails?.profileImage || "/public/image/profile.png"}
                      alt={residentDetails?.firstName}
                      className="w-20 h-20 rounded-full mb-2"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">
                      {residentDetails?.firstName} {residentDetails?.lastName}
                    </h2>
                    <p className="text-sm text-gray-600">{residentDetails?.email}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Wing', value: residentDetails?.wing },
                      { label: 'Unit', value: residentDetails?.flatNumber },
                      { label: 'Age', value: residentDetails?.age },
                      { label: 'Gender', value: residentDetails?.gender },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-medium text-gray-800">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Document</h3>
                    {[
                      { name: 'Aadhaar Card Front Side', file: residentDetails?.documents?.aadharCardFront, icon: FileImage },
                      { name: 'Aadhaar Card Back Side', file: residentDetails?.documents?.aadharCardBack, icon: FileImage },
                      { name: 'Address Proof', file: residentDetails?.documents?.addressProof, icon: FileText },
                      { name: 'Rent Agreement', file: residentDetails?.documents?.rentAgreement, icon: FileText },
                    ].filter(doc => doc.file).map((doc, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                        <div className="flex items-center">
                          <doc.icon className="h-5 w-5 text-blue-500 mr-2" />
                          <div>
                            <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {residentDetails?.familyMembers?.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-sm font-semibold text-blue-800">Member Counting</h3>
                        <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {residentDetails.familyMembers.length}
                        </span>
                      </div>
                      {residentDetails.familyMembers.map((member, index) => (
                        <div key={index} className="space-y-2">
                          {[
                            { label: 'First Name', value: member.firstName },
                            { label: 'Phone No', value: member.phoneNumber },
                            { label: 'Age', value: member.age },
                            { label: 'Gender', value: member.gender },
                            { label: 'Relation', value: member.relationWithOwner },
                          ].map((item, idx) => (
                            <div key={idx} className="flex justify-between py-1">
                              <span className="text-sm text-gray-600">{item.label}</span>
                              <span className="text-sm font-medium text-gray-800">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  )
}

export default Residence
