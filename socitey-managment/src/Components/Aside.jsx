import React, { useState } from 'react';
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFinancialOpen, setIsFinancialOpen] = useState(false);

    const financialMenuItems = [
        { id: 1, label: 'Income', path: '/financial/income' },
        { id: 2, label: 'Expanse', path: '/financial/expanse' },
        { id: 3, label: 'Note', path: '/financial/note' },
    ];

    const handleFinancialClick = (e) => {
        e.preventDefault();
        setIsFinancialOpen(!isFinancialOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-4 fixed top-0 left-0 z-20"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <span className="text-2xl font-bold text-orange-500 mb-4">☰</span>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-[70%] md:w-[17%] bg-white border-r shadow-sm p-4 transition-transform duration-300 z-10
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
            >
                <h1 className="text-2xl font-bold text-orange-500 cursor-pointer hover:text-orange-600 transition-colors hidden lg:flex">
                    DashStack
                </h1>

                <nav className="mt-4">
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            {...item}
                            active={activeMenu === item.label}
                            hovered={hoveredMenu === item.label}
                            onClick={() => {
                                setActiveMenu(item.label);
                                setIsSidebarOpen(false); // Close sidebar on mobile after selecting
                            }}
                            onMouseEnter={() => setHoveredMenu(item.label)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        />
                    ))}
                </nav>
            </div>

            {/* Overlay for mobile menu */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-5 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

const SidebarItem = ({ icon: Icon, label, path, active, hovered, onClick, onMouseEnter, onMouseLeave }) => (
    <Link
        to={path}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 relative
            ${active ? 'bg-orange-50 text-orange-500 font-medium' : 'text-gray-600 hover:bg-orange-50/50 hover:text-orange-500'}
            ${hovered ? 'shadow-sm' : ''}`}
    >
        <Icon className={`w-5 h-5 transition-transform duration-200 ${hovered ? 'scale-110' : ''}`} />
        <span>{label}</span>
        {active && (
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l"></div>
        )}
    </Link>
);

const sidebarItems = [
    { icon: Activity, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Resident Management', path: '/residence' },
    { icon: DollarSign, label: 'Financial Management', path: '/financial' },
    { icon: Package, label: 'Facility Management', path: '/' },
    { icon: Bell, label: 'Complaint Tracking', path: '/' },
    { icon: Settings, label: 'Security Management', path: '/' },
    { icon: Users, label: 'Security Guard', path: '/' },
    { icon: Bell, label: 'Announcement', path: '/' },
    { icon: LogOut, label: 'Logout', path: '/' }
];

export default Aside;
