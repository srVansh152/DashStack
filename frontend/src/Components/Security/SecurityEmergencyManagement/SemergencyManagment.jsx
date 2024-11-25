import { Bell } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SAside from '../../Common/SideBar/SecuritySideBar/SAside';
import Navbar from '../../Common/Navbar/Navbar';


const SemergencyManagment = () => {

   
    const [openModel, setOpenModel] = useState(false);

    const handleAddModel = () => {
        setOpenModel(true);
    };

   

    return (
        <div className="flex">
            <SAside />
            <div className="flex-1 min-h-screen bg-slate-50">
                {/* Navigation */}
             <Navbar/>

                {/* Main Content */}
                <main className="flex items-center justify-center p-4" style={{ height: "92vh" }}>
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
                        <h1 className="mb-6 text-xl font-semibold">Alert</h1>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="alertType" className="block text-sm font-medium text-gray-700">
                                    Alert Type*
                                </label>
                                <select
                                    id="alertType"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Alert</option>
                                    <option value="emergency">Emergency</option>
                                    <option value="warning">Warning</option>
                                    <option value="info">Information</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description*
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="An emergency description typically refers to a detailed account or explanation of an emergency situation..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SemergencyManagment