import React, { useState } from 'react'

import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import UAside from '../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../Common/Navbar/Navbar';


const UsecurityProtocol = () => {
    

    const protocols = [
        {
            title: "Cameron Williamson",
            description: "A visual representation your spending categories.",
            date: "11/02/2024",
            time: "2:45 PM"
        },
        {
            title: "Darrell Steward",
            description: "Securing critica government systems.",
            date: "12/02/2024",
            time: "3:00 PM"
        },
        {
            title: "Courtney Henry",
            description: "Implementing surveillan public spaces.",
            date: "13/02/2024",
            time: "4:30 AM"
        },
        {
            title: "Kathryn Murphy",
            description: "Tailor the dashboard to your unique financial.",
            date: "14/02/2024",
            time: "6:45AM"
        },
        {
            title: "Kathryn Murphy",
            description: "Expenses will becomea way that makes sense.",
            date: "15/02/2024",
            time: "2:45 PM"
        },
        {
            title: "Arlene McCoy",
            description: "Helping you identify where your money going",
            date: "16/02/2024",
            time: "5:45 PM"
        },
        {
            title: "Eleanor Pena",
            description: "Simply navigate through the different sections.",
            date: "17/02/2024",
            time: "4:45 AM"
        },
        {
            title: "Brooklyn Simmons",
            description: "Expenses will becomea way that makes sense.",
            date: "18/02/2024",
            time: "3:45 PM"
        },
        {
            title: "Wade Warren",
            description: "Implementing surveillan public spaces.",
            date: "19/02/2024",
            time: "9:45 AM"
        },
        {
            title: "Jane Cooper",
            description: "Expenses will becomea way that makes sense.",
            date: "20/02/2024",
            time: "3:45 PM"
        },
        {
            title: "Esther Howard",
            description: "A visual representation your spending categories.",
            date: "21/02/2024",
            time: "9:45 PM"
        }
    ]

    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
            <Navbar/>
                <div className="p-6 bg-gray-50">
                    <div className="bg-white rounded-lg shadow">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">Security Protocols</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            Time
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {protocols.map((protocol, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {protocol.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {protocol.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {protocol.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {protocol.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsecurityProtocol
