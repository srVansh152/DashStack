import React, { useEffect, useState } from 'react'
import { Bell, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aside from '../../../Common/SideBar/AdminSideBar/Aside';
import Navbar from '../../../Common/Navbar/Navbar';
import { getVisitorLogs } from '../../../../utils/api';





function VisitorsLogs() {
  
  
  

  const [error, setError] = useState(null); // State to manage error messages
  const [successMessage, setSuccessMessage] = useState(null); // State to manage success message
  const [visitors, setVisitors] = useState([]); // State to store the fetched visitor logs


  const fetchVisitorLogs = async () => {
    const response = await getVisitorLogs();
    if (response.success) {
      setVisitors(response.data.visitorLogs); // Assuming 'visitors' is the key that holds the visitor list
    } else {
      setError(response.message);
    }
  };
  // Fetch visitor logs on component mount
  useEffect(() => {
    fetchVisitorLogs();
  }, []);



 
 

  return (
    <div className="flex">
      <Aside />
      <div className="main">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold">Visitor Logs</h1>
            
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="grid grid-cols-5 gap-4 px-6 py-3 border-b text-sm text-gray-500">
                <div>Visitor Name</div>
                <div>Phone Number</div>
                <div>Date</div>
                <div>Unit Number</div>
                <div>Time</div>
              </div>

              <div className="divide-y">
                {visitors.length > 0 ? (
                  visitors.map((visitor, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-5 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={visitor.avatar || "/placeholder.svg?height=32&width=32"}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{visitor.visitorName}</span>
                      </div>
                      <div>{visitor.phoneNumber}</div>
                      <div>{new Date(visitor.date).toLocaleDateString()}</div>
                      <div>{visitor.unit}</div>
                      <div>{visitor.time}</div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-5 text-center py-4 text-gray-500">No visitor logs available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default VisitorsLogs