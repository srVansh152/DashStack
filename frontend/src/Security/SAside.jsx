import React, { useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { Link } from 'react-router-dom';

function SAside() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenn, setIsOpenn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 bg-orange-500 text-white rounded-md sm:hidden fixed  top-2.5 left-4 z-20"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-lg flex flex-col fixed inset-0 top-0 left-0 sm:relative sm:block transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-orange-500"
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  Security
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isOpen && (
                <ul className="pl-12 mt-2 space-y-2">

                  <li>
                    <Link
                      to="/Svisitor"
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Visitor Tracking
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Semergency"
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                    >
                      Emergency Management
                    </Link>
                  </li>
                </ul>
              )}
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

export default SAside;
