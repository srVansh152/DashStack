import React from 'react'
import { Link } from 'react-router-dom'
import Notifications from '../Notifications/Notifications'

const Navbar = () => {
  return (
    <div>
       <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm sticky  top-0 z-10">
          {/* Search Bar - hidden on smaller screens */}
          <div className="flex items-center flex-1">
            <input
              type="search"
              placeholder="Search Here"
              className="hidden md:block p-2 pl-4 bg-gray-50 rounded-lg w-full max-w-xs border-2 border-transparent focus:border-orange-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
             <Notifications/>
            </div>

            {/* Profile Section */}
            <div className='profile'>
            <Link to="/admin/editprofile" className="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-transparent hover:border-orange-500 transition-all"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium">Moni Roy</p>
                <p className="text-xs text-gray-500">admin</p>
              </div>
            </Link>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Navbar
