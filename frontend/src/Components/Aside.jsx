'use client'

import { 
  Activity, 
  DollarSign, 
  Package, 
  Users, 
  Bell, 
  Settings, 
  LogOut, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [activeMenu, setActiveMenu] = useState('')
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isFinancialOpen, setIsFinancialOpen] = useState(true)
  const [isComplaintOpen, setIsComplaintOpen] = useState(true)
  const [isSecurityOpen, setIsSecurityOpen] = useState(true)

  // Financial menu items
  const financialMenuItems = [
    { id: 2, label: 'Income', path: '/admin/otherincome' },
    { id: 3, label: 'Expanse', path: '/admin/expance' },
    { id: 4, label: 'Note', path: '/admin/note' },
  ]

  // Complaint menu items
  const complaintMenuItems = [
    { id: 1, label: 'Create Complaint', path: '/admin/createcomplain' },
    { id: 2, label: 'Request Tracking', path: '/admin/requesttracking' },
  ]

  // Security management menu items
  const securityManagement = [
    { id: 1, label: 'Vistors Logs', path: '/admin/visitorslogs' },
    { id: 2, label: 'Security Protocals', path: '/admin/securityprotocols' },
  ]

  const handleComplaintClick = () => {
    setHoveredMenu(null)
    if (activeMenu === 'Complaint Tracking') {
      setIsComplaintOpen(!isComplaintOpen)
    } else {
      setActiveMenu('Complaint Tracking')
      setIsComplaintOpen(true)
      setIsSidebarOpen(false)
    }
  }

  const handleSecurityClick = () => {
    setHoveredMenu(null)
    if (activeMenu === 'Security Management') {
      setIsSecurityOpen(!isSecurityOpen)
    } else {
      setActiveMenu('Security Management')
      setIsSecurityOpen(true)
      setIsSidebarOpen(false)
    }
  }

  const handleFinancialClick = () => {
    setHoveredMenu(null)
    if (activeMenu === 'Financial Management') {
      setIsFinancialOpen(!isFinancialOpen)
    } else {
      setActiveMenu('Financial Management')
      setIsFinancialOpen(true)
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-0 left-0 z-20 p-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span className="text-2xl font-bold text-orange-500">☰</span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] md:w-[17%] bg-white border-r shadow-sm p-4 transition-transform duration-300 z-20
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <h1 className="hidden text-2xl font-bold text-orange-500 cursor-pointer transition-colors hover:text-orange-600 lg:flex">
          DashStack
        </h1>

        <nav className="mt-4">
          {/* Dashboard */}
          <SidebarItem
            icon={Activity}
            label="Dashboard"
            path="/admin/dashboard"
            active={activeMenu === 'Dashboard'}
            hovered={hoveredMenu === 'Dashboard'}
            onClick={() => {
              setActiveMenu('Dashboard')
              setIsSidebarOpen(false)
              setHoveredMenu(null)
            }}
            onMouseEnter={() => setHoveredMenu('Dashboard')}
            onMouseLeave={() => setHoveredMenu(null)}
          />

          {/* Resident Management */}
          <SidebarItem
            icon={Users}
            label="Resident Management"
            path="/admin/residence"
            active={activeMenu === 'Resident Management'}
            hovered={hoveredMenu === 'Resident Management'}
            onClick={() => {
              setActiveMenu('Resident Management')
              setIsSidebarOpen(false)
              setHoveredMenu(null)
            }}
            onMouseEnter={() => setHoveredMenu('Resident Management')}
            onMouseLeave={() => setHoveredMenu(null)}
          />

          {/* Financial Management Dropdown */}
          <Dropdown
            label="Financial Management"
            icon={DollarSign}
            isOpen={isFinancialOpen}
            active={activeMenu === 'Financial Management'}
            hovered={hoveredMenu === 'Financial Management'}
            items={financialMenuItems}
            onClick={handleFinancialClick}
            onHoverEnter={() => setHoveredMenu('Financial Management')}
            onHoverLeave={() => setHoveredMenu(null)}
          />

           {/* Other menu items */}
           <SidebarItem
            icon={Package}
            label="Facility Management"
            path="/admin/Facilitymanagment"
            active={activeMenu === 'Facility Management'}
            hovered={hoveredMenu === 'Facility Management'}
            onClick={() => {
              setActiveMenu('Facility Management')
              setIsSidebarOpen(false)
              setHoveredMenu(null)
            }}
            onMouseEnter={() => setHoveredMenu('Facility Management')}
            onMouseLeave={() => setHoveredMenu(null)}
          />

          {/* Complaint Tracking Dropdown */}
          <Dropdown
            label="Complaint Tracking"
            icon={Bell}
            isOpen={isComplaintOpen}
            active={activeMenu === 'Complaint Tracking'}
            hovered={hoveredMenu === 'Complaint Tracking'}
            items={complaintMenuItems}
            onClick={handleComplaintClick}
            onHoverEnter={() => setHoveredMenu('Complaint Tracking')}
            onHoverLeave={() => setHoveredMenu(null)}
          />

          {/* Security Management Dropdown */}
          <Dropdown
            label="Security Management"
            icon={Settings}
            isOpen={isSecurityOpen}
            active={activeMenu === 'Security Management'}
            hovered={hoveredMenu === 'Security Management'}
            items={securityManagement}
            onClick={handleSecurityClick}
            onHoverEnter={() => setHoveredMenu('Security Management')}
            onHoverLeave={() => setHoveredMenu(null)}
          />

         

          <SidebarItem
            icon={Package}
            label="Security Guard"
            path="/admin/securityguard"
            active={activeMenu === 'Security Guard'}
            hovered={hoveredMenu === 'Security Guard'}
            onClick={() => {
              setActiveMenu('Security Guard')
              setIsSidebarOpen(false)
              setHoveredMenu(null)
            }}
            onMouseEnter={() => setHoveredMenu('Facility Management')}
            onMouseLeave={() => setHoveredMenu(null)}
          />

          <SidebarItem
            icon={Bell}
            label="Announcement"
            path="/admin/announcment"
            active={activeMenu === 'Announcement'}
            hovered={hoveredMenu === 'Announcement'}
            onClick={() => {
              setActiveMenu('Announcement')
              setIsSidebarOpen(false)
              setHoveredMenu(null)
            }}
            onMouseEnter={() => setHoveredMenu('Announcement')}
            onMouseLeave={() => setHoveredMenu(null)}
          />

          <SidebarItem
            icon={LogOut}
            className="mt-40"
            label="Logout"
            path="/"
            active={activeMenu === 'Logout'}
            hovered={hoveredMenu === 'Logout'}
            onClick={() => {
              setActiveMenu('Logout')
              setIsSidebarOpen(false)
              setHoveredMenu(null)
            }}
            onMouseEnter={() => setHoveredMenu('Logout')}
            onMouseLeave={() => setHoveredMenu(null)}
          />
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-5 bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  )
}

function SidebarItem({ icon: Icon, label, path, active, hovered, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <a
      href={path}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative flex w-full items-center gap-3 px-4 py-3 text-sm transition-all duration-200
        ${active ? 'bg-orange-50 font-medium text-orange-500' : 'text-gray-600 hover:bg-orange-50/50 hover:text-orange-500'}
        ${hovered ? 'shadow-sm' : ''}`}
    >
      <Icon className={`h-5 w-5 transition-transform duration-200 ${hovered ? 'scale-110' : ''}`} />
      <span>{label}</span>
      {active && <div className="absolute right-0 top-0 bottom-0 w-1 rounded-l bg-orange-500" />}
    </a>
  )
}

function Dropdown({ label, icon: Icon, isOpen, active, hovered, items, onClick, onHoverEnter, onHoverLeave }) {
  return (
    <div>
      <button
        onClick={onClick}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 relative
          ${active ? 'bg-orange-50 text-orange-500 font-medium' : 'text-gray-600 hover:bg-orange-50/50 hover:text-orange-500'}
          ${hovered ? 'shadow-sm' : ''}`}
      >
        <div className="flex items-center gap-3">
          <Icon
            className={`w-5 h-5 transition-transform duration-200 ${
              hovered ? 'scale-110' : ''
            }`}
          />
          <span>{label}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {active && <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l" />}
      </button>

      {isOpen && (
        <div className="bg-white pl-4">
          {items.map((item, index) => (
            <a
              key={item.id}
              href={item.path}
              onClick={() => setActiveMenu(item.label)}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50/50 hover:text-orange-500"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
     