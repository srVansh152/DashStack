import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../../Common/Navbar/Navbar';
import ChatSideBar from './ChatSidebar/ChatSideBar';
import ChatHeader from './ChatContainer/ChatHader/ChatHeader';
import ChatContainer from './ChatContainer/ChatContainer';
import NoChatSelected from './NoChatSelected/NoChatSelected';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const Uchat = () => {
    const [selectedUser, setSelectedUser] = useState(null); // Selected chat
    const [showSidebar, setShowSidebar] = useState(true); // Control visibility of the sidebar

    const handleContactSelect = (user) => {
        setSelectedUser(user);
        setShowSidebar(false); // Hide sidebar on small screens after selecting a contact
    };

    const handleBackToSidebar = () => {
        setShowSidebar(true); // Show sidebar when the back button is clicked
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Static Aside Component */}
            <UAside />

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Navbar */}
                <Navbar />

                {/* Content Layout */}
                <div className="flex shadow bg-white p-2 h-full flex-col md:flex-row">
                    {/* Sidebar - Hidden on small screens when chat is open */}
                    <div
                        className={`${
                            showSidebar ? 'block' : 'hidden'
                        } md:block md:w-80 border-r`}
                    >
                        <ChatSideBar setSelectedUser={handleContactSelect} />
                    </div>

                    {/* Main Chat Area */}
                    {!showSidebar && (
                        <div className="flex-1 flex flex-col relative">
                            {/* Chat Header */}
                            <ChatHeader selectedUser={selectedUser} />

                            {/* Back Button for small screens */}
                            <button
                                className="md:hidden p-2 text-black absolute top-4 left-[-12px]"
                                onClick={handleBackToSidebar}
                            >
                                <ArrowLeft />
                            </button>

                            {/* Messages Area */}
                            {selectedUser ? (
                                <ChatContainer selectedUser={selectedUser} />
                            ) : (
                                <NoChatSelected />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Uchat;
