import React, { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { Link } from 'react-router-dom';

function UAside() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 bg-orange-500 text-white rounded-md sm:hidden fixed  top-4 left-4 z-20"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-lg flex flex-col fixed inset-0 top-0 left-0 sm:relative sm:block transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:static`}
      >
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">Dash</span>
            <span className="text-gray-800">Stack</span>
          </h1>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2 py-4">
            <li>
              <Link to="/user/udashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/user/upersonaldetail" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Personal Detail
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Service and Complaint
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Events Participation
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-orange-500"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  Community
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isOpen && (
                <ul className="pl-12 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Access Forums
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Polls
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Communities Discussion
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => setIsOpenn(!isOpenn)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-orange-500"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                  Payment Portal
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isOpenn && (
                <ul className="pl-12 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/user/Maintenace"
                      className="block py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Maintenace invoices
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user/otherincome"
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Other Income invoice
                    </Link>
                  </li>

                </ul>
              )}
            </li>

            <li>
              <Link to="/user/usecurityprotocol" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Security Protocols
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default UAside;
