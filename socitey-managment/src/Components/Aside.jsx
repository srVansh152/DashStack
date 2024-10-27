import React, { useState } from 'react';
import { Activity, DollarSign, Package, Users, Bell, Settings, LogOut, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Aside = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFinancialOpen, setIsFinancialOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate

    const financialMenuItems = [
        { id: 2, label: 'Income', path: '/otherincome' },
        { id: 3, label: 'Expanse', path: '/financial/expanse' },
        { id: 4, label: 'Note', path: '/financial/note' },
    ];

    const handleFinancialClick = () => {
        if (activeMenu === 'Financial Management') {
            setIsFinancialOpen(!isFinancialOpen);
        } else {
            setActiveMenu('Financial Management');
            setIsFinancialOpen(true);
            navigate('/financial'); // Navigate to financial management page
            setIsSidebarOpen(false); // Optionally close the sidebar
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-4 fixed top-0 left-0 z-20"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <span className="text-2xl font-bold text-orange-500">☰</span>
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
                    {sidebarItems.map((item, index) => {
                        if (item.label === 'Financial Management') {
                            return (
                                <div key={index}>
                                    <button
                                        onClick={handleFinancialClick}
                                        onMouseEnter={() => setHoveredMenu(item.label)}
                                        onMouseLeave={() => setHoveredMenu(null)}
                                        className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 relative
                                            ${activeMenu === item.label ? 'bg-orange-50 text-orange-500 font-medium' : 'text-gray-600 hover:bg-orange-50/50 hover:text-orange-500'}
                                            ${hoveredMenu === item.label ? 'shadow-sm' : ''}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <DollarSign className={`w-5 h-5 transition-transform duration-200 ${hoveredMenu === item.label ? 'scale-110' : ''}`} />
                                            <span>{item.label}</span>
                                        </div>
                                        {isFinancialOpen ? (
                                            <ChevronUp className="w-4 h-4" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                        {activeMenu === item.label && (
                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l"></div>
                                        )}
                                    </button>

                                    {/* Financial Dropdown */}
                                    {isFinancialOpen && (
                                        <div className="bg-white pl-4">
                                            {financialMenuItems.map((subItem, subIndex) => (
                                                <Link 
                                                    key={subItem.id}
                                                    to={subItem.path}
                                                    onClick={() => {
                                                        setActiveMenu(subItem.label);
                                                        setIsSidebarOpen(false);
                                                    }}
                                                    className="w-full flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-orange-50/50 hover:text-orange-500"
                                                >
                                                    <span className={`pl-2 ${subIndex === 0 ? 'border-l-2 border-orange-500' : ''}`}>
                                                        {subItem.label}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        return (
                            <SidebarItem
                                key={index}
                                {...item}
                                active={activeMenu === item.label}
                                hovered={hoveredMenu === item.label}
                                onClick={() => {
                                    setActiveMenu(item.label);
                                    setIsSidebarOpen(false);
                                }}
                                onMouseEnter={() => setHoveredMenu(item.label)}
                                onMouseLeave={() => setHoveredMenu(null)}
                            />
                        );
                    })}
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
