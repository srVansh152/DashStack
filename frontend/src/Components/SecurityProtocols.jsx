import React, { useState } from 'react'
import { Bell, Plus , PencilIcon} from 'lucide-react'
import { Link } from 'react-router-dom'
import { X } from "lucide-react"
import Aside from './Aside'

const protocols = [
  {
    title: "Physical Security",
    description: "Implementing surveillance cameras in public spaces.",
    date: "11/01/2024",
    time: "3:45 PM"
  },
  {
    title: "Cybersecurity",
    description: "Securing critical infrastructure, government systems.",
    date: "12/01/2024",
    time: "6:40 AM"
  },
  {
    title: "Legal Measures",
    description: "Enforcing and updating laws and regulations.",
    date: "13/01/2024",
    time: "1:00 PM"
  },
  {
    title: "Social Engagement",
    description: "Fostering collaboration between law enforcement.",
    date: "14/01/2024",
    time: "6:20 PM"
  },
  {
    title: "Education and Training",
    description: "Implementing surveillance cameras in public spaces.",
    date: "15/01/2024",
    time: "3:45 PM"
  }
];

function SecurityProtocols() {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [title, setTitle] = useState("Physical Security");
  const [description, setDescription] = useState("The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident.");
  const [date, setDate] = useState("13/03/2022");
  const [time, setTime] = useState("3:45 PM");
  const [isOpen, setIsOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false);
  const [openEditModel, setOpenEditModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const [openViewModel, setOpenViewModel] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault() 
  }
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission (e.g., save data)
   
  };


  const handleAddModel = () => {
    setOpenModel(true);
};
  const handleEditModel = () => {
    setOpenEditModel(true);
};
const handleDeleteModel = () => {
  setOpenDeleteModel(true);
};
const handleViewModel = () => {
  setOpenViewModel(true);
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
      type: 'fund',
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
      type: 'maintenance',
    },
    {
      id: 3,
      user: 'Ganesh Chaturthi',
      userCode: 'A- 101',
      amount: '₹ 1,500',
      subtitle: 'Per Person Amount :',
      description:
        'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
      time: '2 days ago',
      type: 'event',
    },
  ]

  return (
    <div>
      <Aside />
      <div className="main">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4 shadow-sm">
          <div className="flex flex-1 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Home</span>
              <span className="text-gray-500">/</span>
              <span className="text-blue-500">Security Protocols</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-20 mt-2 w-80 overflow-hidden rounded-lg border bg-white shadow-lg md:w-96">
                  <div className="flex items-center justify-between border-b p-4">
                    <h2 className="font-semibold text-gray-800">Notifications</h2>
                    <button className="text-sm text-blue-500 transition-colors hover:text-blue-600">
                      Clear all
                    </button>
                  </div>
                  <div className="max-h-96 overflow-hidden">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="border-b p-4 transition-colors hover:bg-gray-50">
                        <div className="flex gap-3">
                          {notification.type !== 'event' ? (
                            <img src="/api/placeholder/40/40" alt="" className="h-10 w-10 rounded-full" />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <span className="text-xl text-blue-500">G</span>
                            </div>
                          )}
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">
                              <span className="font-medium">{notification.user}</span> {notification.message}
                              {notification.linkText && <span className="text-blue-500"> {notification.linkText}</span>}
                              {notification.amount}
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

            <Link
              to="/editprofile"
              className="hidden cursor-pointer items-center gap-2 rounded-lg p-2 transition-all hover:bg-gray-50 sm:flex"
            >
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full border-2 border-transparent transition-all hover:border-orange-500"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">Moni Roy</p>
                <p className="text-xs text-gray-500">admin</p>
              </div>
            </Link>
          </div>
        </header>

        <div className="container p-2">
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
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{protocol.description}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{protocol.date}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{protocol.time}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm space-x-2">
                        <button onClick={handleEditModel} className="p-1 text-green-600 hover:text-green-800">
                          <PencilIcon className='w-4'/>
                        </button>
                        <button onClick={handleViewModel}  className="p-1 text-blue-600 hover:text-blue-800">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button onClick={handleDeleteModel} className="p-1 text-red-600 hover:text-red-800">
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
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
                        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Security Protocols</h2>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Title<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-medium">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          required
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={() => setOpenModel(false)}
          type="button"
          className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Save
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
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => setDate(e.target.value)}
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
              onChange={(e) => setTime(e.target.value)}
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
            <button onClick={()=>setOpenDeleteModel(false)}
              type="button"
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
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

{openViewModel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
          <div className="p-6 space-y-4">
          <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">View Security Protocol</h1>
          <button onClick={()=> setOpenViewModel(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Title
            </label>
            <div className="text-sm">
              Physical Security
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Description
            </label>
            <div className="text-sm">
              A visual representation of your spending categories visual representation.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Date
              </label>
              <div className="text-sm">
                01/02/2024
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Time
              </label>
              <div className="text-sm">
                3:45 PM
              </div>
            </div>
          </div>
        </div>
        </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default SecurityProtocols