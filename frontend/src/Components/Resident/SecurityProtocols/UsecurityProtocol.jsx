import React, { useEffect, useState } from 'react'

import { Bell, Plus, PencilIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import UAside from '../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../Common/Navbar/Navbar';
import { getSecurityProtocols } from '../../../utils/api';



const UsecurityProtocol = () => {


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

  return (
    <div className='flex h-screen'>
      <UAside />
      <div className="flex-1 overflow-auto">
        <Navbar />

        <div className="container-fulid p-2">
          <div className="min-h-screen overflow-hidden bg-gray-50 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Security Protocols</h1>

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

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default UsecurityProtocol
