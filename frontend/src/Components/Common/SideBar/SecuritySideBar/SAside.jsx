import {
  Activity,
  Shield,
  LogOut,
  ChevronDown,
  ChevronUp,
  Menu
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// SidebarItem component
function SidebarItem({ icon: Icon, label, path, active, hovered, onClick }) {
  const isLogout = label === 'Logout';
  
  return (
    <div className="relative">
      {active && !isLogout && (
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-[#FF4B1C] to-[#FF8037] rounded-r"
          style={{ left: '-16px' }}
        />
      )}
      <a
        href={`/${path}`}
        onClick={onClick}
        className={`relative flex w-full items-center gap-3 px-4 py-3 text-sm transition-all duration-200 rounded-lg my-1
          ${isLogout 
            ? 'text-red-600 font-bold hover:scale-105' 
            : active 
              ? 'bg-gradient-to-r from-[#FF4B1C] to-[#FF8037] text-white'
              : 'text-gray-600 hover:bg-gradient-to-r hover:from-[#FF4B1C] hover:to-[#FF8037] hover:text-white'}
          ${hovered ? 'shadow-sm' : ''}`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </a>
    </div>
  )
}

// Dropdown component
function Dropdown({
  label,
  icon: Icon,
  isOpen,
  active,
  hovered,
  items,
  onClick,
  onHoverEnter,
  onHoverLeave,
  currentPath,
  setCurrentPath,
  setIsSidebarOpen,
  setOpenDropdown
}) {
  const navigate = useNavigate()

  const isDropdownActive = items.some(item => currentPath === `/security/${item.path}`) || active

  return (
    <div className="my-1 relative">
      {isDropdownActive && (
        <div 
          className={`absolute left-0 w-1 bg-gradient-to-b from-[#FF4B1C] to-[#FF8037] rounded-r
            ${isOpen 
              ? 'h-10 top-0' 
              : 'h-8 top-1/2 -translate-y-1/2'}`}
          style={{ left: '-16px' }}
        />
      )}
      <button
        onClick={onClick}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 rounded-lg
          ${isDropdownActive || isOpen
            ? 'bg-gradient-to-r from-[#FF4B1C] to-[#FF8037] text-white'
            : 'text-gray-600 hover:bg-gradient-to-r hover:from-[#FF4B1C] hover:to-[#FF8037] hover:text-white'}
          ${hovered ? 'shadow-sm' : ''}`}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 transition-transform duration-200 ${hovered ? 'scale-110' : ''}`} />
          <span>{label}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="pl-8 mt-2 space-y-2">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {currentPath === `/security/${item.path}` && (
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-[#FF4B1C] to-[#FF8037] rounded-r"
                  style={{ left: '-16px' }}
                />
              )}
              <a
                href={`/security/${item.path}`}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(`/security/${item.path}`)
                  setCurrentPath(`/security/${item.path}`)
                  setIsSidebarOpen(false)
                }}
                className={`w-full flex items-center px-4 py-2 text-sm rounded-lg
                  ${currentPath === `/security/${item.path}`
                    ? 'text-[#FF4B1C] font-medium'
                    : 'text-gray-600 hover:text-[#FF4B1C]'}`}
              >
                <span>{item.label}</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SAside() {
  const navigate = useNavigate()
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState('')

  // Security menu items
  const securityMenuItems = [
    { id: 1, label: 'Emergency', path: 'Semergency' },
    { id: 2, label: 'Visitors Logs', path: 'Svisitor' }
  ]

  const handleLogout = (e) => {
    e.preventDefault()
    // Clear all localStorage items
    localStorage.removeItem("token")
    localStorage.removeItem("Email")
    localStorage.removeItem("userId")
    navigate('/')
    setCurrentPath('/')
    setIsSidebarOpen(false)
    setHoveredMenu(null)
  }

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token")
    const userEmail = localStorage.getItem("Email")
    
    if (!token || !userEmail) {
      navigate('/')
    }

    setCurrentPath(window.location.pathname)
    if (securityMenuItems.some(item => currentPath.includes(item.path))) {
      setOpenDropdown('Security Management')
    }
  }, [currentPath, navigate])

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? '' : dropdown)
  }

  const isPathActive = (path) => {
    return currentPath === `/security/${path}` || currentPath.startsWith(`/security/${path}/`)
  }

  return (
    <>
      <button
        className="md:hidden fixed top-0 left-0 z-20 p-4"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="w-5 h-5 text-orange-500" />
      </button>

      <div className={`fixed top-0 left-0 h-screen w-[70%] md:w-[17%] bg-white border-r shadow-sm p-4 transition-transform duration-300 z-20 flex flex-col justify-between
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div>
          <h1 className="hidden text-2xl font-bold text-orange-500 cursor-pointer transition-colors hover:text-orange-600 lg:flex">
            Dash<span className="text-gray-800">Stack</span>
          </h1>

          <nav className="mt-8 space-y-2">
            <SidebarItem
              icon={Activity}
              label="Dashboard"
              path="security/sdashboard"
              active={isPathActive('sdashboard')}
              hovered={hoveredMenu === 'Dashboard'}
              onClick={(e) => {
                e.preventDefault()
                navigate('/security/sdashboard')
                setCurrentPath('/security/sdashboard')
                setIsSidebarOpen(false)
                setHoveredMenu(null)
              }}
            />

            <Dropdown
              label="Security Management"
              icon={Shield}
              isOpen={openDropdown === 'Security Management'}
              active={securityMenuItems.some(item => isPathActive(item.path))}
              hovered={hoveredMenu === 'Security Management'}
              items={securityMenuItems}
              onClick={() => handleDropdownToggle('Security Management')}
              onHoverEnter={() => setHoveredMenu('Security Management')}
              onHoverLeave={() => setHoveredMenu(null)}
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
              setIsSidebarOpen={setIsSidebarOpen}
              setOpenDropdown={setOpenDropdown}
            />
          </nav>
        </div>

        <SidebarItem
          icon={LogOut}
          className="mt-40"
          label="Logout"
          path="/"
          active={false}
          hovered={hoveredMenu === 'Logout'}
          onClick={handleLogout}
          onMouseEnter={() => setHoveredMenu('Logout')}
          onMouseLeave={() => setHoveredMenu(null)}
        />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-5 bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  )
}
