import React, { useEffect, useState } from 'react'
import { Bell, Plus, PencilIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { X } from "lucide-react"
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../Common/Navbar/Navbar';
import { addSecurityProtocol, deleteSecurityProtocol, getSecurityProtocols, updateSecurityProtocol, viewSecurityProtocol } from '../../../../utils/api';


function SecurityProtocols() {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [selectedProtocolId, setSelectedProtocolId] = useState('');
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [protocolToDelete, setProtocolToDelete] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [openEditModel, setOpenEditModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openViewModel, setOpenViewModel] = useState(false);


  const [protocols, setProtocols] = useState([]);

  const fetchSecurityProtocols = async () => {
    try {
      const response = await getSecurityProtocols();
      if (!response.success) {
        throw new Error('Failed to fetch security protocols');
      }
      const data = response.data.protocols
      setProtocols(data);
      return response.data;
    } catch (error) {
      console.error('Error fetching security protocols:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchSecurityProtocols()
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form logic here (e.g., sending data to an API)
    const newProtocol = {
      title: title,
      description: description,
      date: date,
      time: time,
    };
    console.log(newProtocol);
    try {
      const response = await addSecurityProtocol(newProtocol)

      if (!response.success) {
        throw new Error('Network response was not ok');
      }

      console.log('security protocols successfully:', response);
      // Optionally, reset the form or update the state
      setOpenModel(false);
    } catch (error) {
      console.error('Error creating security protocols:', error);
    }

    // Close modal after submitting
  };


  const handleEditSubmit = async (e) => {
    e.preventDefault();

    // Create the payload for the update request
    const updatedData = {
      title,
      description,
      date,
      time,
    };

    try {
      // Call the API to update the security protocol
      const response = await updateSecurityProtocol(selectedProtocolId, updatedData);

      if (response.success) {
        fetchSecurityProtocols(); // Assuming you have a function to fetch the protocols
        // Handle successful update
        alert("Security protocol updated successfully.");
        setOpenEditModel(false);

      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error in handleEditSubmit:", error);
      alert("An error occurred while updating the security protocol.");
    }
  };

  const handleViewModel = async (id) => {
    try {
      const { success, data } = await viewSecurityProtocol(id);
      if (success) {
        setSelectedProtocol(data.protocol); 
        setOpenViewModel(true); 
      } else {
        alert("Failed to fetch security protocol.");
      }
    } catch (error) {
      console.error("Error fetching protocol details:", error);
    }
  };

  const handleDeleteProtocol = async () => {
    
    if (!protocolToDelete) return;

    try {
      const { success, message } = await deleteSecurityProtocol(protocolToDelete);
      if (success) {
        fetchSecurityProtocols()
        alert(message || "Protocol deleted successfully!");
        setOpenDeleteModel(false); // Close the modal
        setProtocolToDelete(null); // Reset selected protocol
      } else {
        alert(message || "Failed to delete the protocol.");
      }
    } catch (error) {
      console.error("Error deleting protocol:", error);
    }
  };

  const handleAddModel = () => {
    setOpenModel(true);
  };
  const handleEditModel = (id, protocolData) => {
    setSelectedProtocolId(id); // Set the selected protocol's ID
    settitle(protocolData.title); // Populate the title field
    setdescription(protocolData.description); // Populate the description field
    setdate(protocolData.date || new Date(protocolData.createdAt).toLocaleDateString()); // Populate the date field
    settime(protocolData.time || ''); // Populate the time field
    setOpenEditModel(true); // Open the edit model
  };

  
  return (
    <div>
      <Aside />
      <div className="main">
        <Navbar />

        <div className="container-fulid p-2">
          <div className="min-h-screen overflow-hidden bg-gray-50 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Security Protocols</h1>
              <button onClick={handleAddModel} className="rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">
                <Plus className="mr-2 inline-block h-4 w-4" />
                Create Protocol
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {protocols.map((protocol, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-sm text-gray-600">
                              {protocol.title.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-900">{protocol.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 break-words">{protocol.description}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{new Date(protocol.createdAt).toLocaleDateString()}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{protocol.time}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm space-x-2">
                        <button onClick={() => handleEditModel(protocol._id, protocol)} className="p-1 text-green-600 hover:text-green-800">
                          <PencilIcon className='w-4' />
                        </button>
                        <button onClick={() => handleViewModel(protocol._id)}
                          className="p-1 text-blue-600 hover:text-blue-800">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button onClick={() => {
                          setProtocolToDelete(protocol._id);
                          setOpenDeleteModel(true);
                        }} className="p-1 text-red-600 hover:text-red-800">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {openModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Create Security Protocol</h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium">
                    Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium">
                    Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium">
                    Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium">
                    Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => settime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div className="flex justify-between space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setOpenModel(false)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {openEditModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 space-y-6">
              <h1 className="text-xl font-semibold mb-6">Edit Security Protocols</h1>

              <div className="space-y-4">
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">
                      Title<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">
                      Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-h-[80px]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">
                        Date<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={date}
                          onChange={(e) => setdate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                        <svg
                          className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-1">
                        Time<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={time}
                          onChange={(e) => settime(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                        <svg
                          className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setOpenEditModel(false)}
                      className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {openDeleteModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Delete Protocol?</h2>

              <p className="text-gray-500">
                Are you sure you want to delete this Protocol?
              </p>

              <div className="flex gap-4 pt-2">
                <button onClick={() => setOpenDeleteModel(false)}
                  type="button"
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                onClick={()=>{handleDeleteProtocol()}}
                  className="flex-1 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openViewModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">View Security Protocol</h1>
                <button onClick={() => setOpenViewModel(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Title
                  </label>
                  <div className="text-sm">
                    {selectedProtocol.title || "N/A"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Description
                  </label>
                  <div className="text-sm">
                    {selectedProtocol.description || "N/A"}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">
                      Date
                    </label>
                    {new Date(selectedProtocol.createdAt).toLocaleDateString() || "N/A"}
                    01/02/2024
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1">
                    Time
                  </label>
                  <div className="text-sm">
                    {selectedProtocol.time || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </div >

  )
}

export default SecurityProtocols