import React, { useState } from 'react'
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [hoveredMenu, setHoveredMenu] = useState(null);
  
    return (
        <div className='w-[17%] fixed top-0 h-screen'>
            <div className="bg-white border-r shadow-sm h-screen">
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-orange-500 cursor-pointer hover:text-orange-600 transition-colors">DashStack</h1>
                </div>
                <nav className="mt-4">
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            {...item}
                            active={activeMenu === item.label}
                            hovered={hoveredMenu === item.label}
                            onClick={() => setActiveMenu(item.label)}
                            onMouseEnter={() => setHoveredMenu(item.label)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, link, active, hovered, onClick, onMouseEnter, onMouseLeave }) => (
    <Link
        to={link || '#'}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 relative
      ${active ? 'bg-orange-50 text-orange-500 font-medium' : 'text-gray-600 hover:bg-orange-50/50 hover:text-orange-500'}
      ${hovered ? 'shadow-sm' : ''}
    `}
    >
        <Icon className={`w-5 h-5 transition-transform duration-200 ${hovered ? 'scale-110' : ''}`} />
        <span>{label}</span>
        {active && (
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l"></div>
        )}
    </Link>
);

const sidebarItems = [
    { icon: Activity, label: 'Dashboard', link: '/dashboard' },
    { icon: Users, label: 'Resident Management', link: '/residence' },
    { icon: DollarSign, label: 'Financial Management', link: '' },
    { icon: Package, label: 'Facility Management', link: '' },
    { icon: Bell, label: 'Complaint Tracking', link: '' },
    { icon: Settings, label: 'Security Management', link: '' },
    { icon: Users, label: 'Security Guard', link: '' },
    { icon: Bell, label: 'Announcement', link: '' },
    { icon: LogOut, label: 'Logout', link: '' }
];

export default Aside;
