import React, { useState, useEffect, useRef } from 'react';
import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';
import Navbar from '../../../Common/Navbar/Navbar';
import { useChat } from '../../../../context/ChatContext.jsx';
import { getResidents } from '../../../../utils/api.js';
import { chatApi } from '../../../../services/chatApi.js';
import ChatHeader from './ChatContainer/ChatHeader.jsx';
import ChatSidebar from './ChatSidebar/ChatSideBar.jsx';
import ChatMessages from './ChatContainer/ChatMessages.jsx';
import ChatInput from './ChatContainer/ChatInput.jsx';
import NoChatSelected from './NoChatSelected/NoChatSelected.jsx';

const Uchat = () => {
    const {
        socket,
        messages: contextMessages,
        setMessages: setContextMessages,
        sendMessage: contextSendMessage,
        joinChat,
        onlineUsers,
        isUserOnline,
        getUserLastSeen
    } = useChat();

    const loggedInUserId = localStorage.getItem('userId');

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [message, setMessage] = useState('');
    const [residents, setResidents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedResident, setSelectedResident] = useState(null);
    const [callState, setCallState] = useState({ isActive: false, type: null });
    const fileInputRef = useRef(null);
    const [currentChatId, setCurrentChatId] = useState(null);
    const messagesEndRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const fetchResidents = async () => {
        try {
            const response = await getResidents();
            const loggedInUserEmail = localStorage.getItem('Email');
            const filteredResidents = response.data.filter(
                resident => resident.email !== loggedInUserEmail
            );
            setResidents(filteredResidents);
        } catch (error) {
            if (error.response?.status === 401) {
                window.location.href = '/login';
            }
            console.error('Error fetching residents:', error);
        }
    };

    useEffect(() => {
        fetchResidents();
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [contextMessages]);

    useEffect(() => {
        const initializeChat = async () => {
            if (!selectedResident || !socket) return;

            try {
                const response = await chatApi.createChat(selectedResident._id);
                const chatId = response._id;
                setCurrentChatId(chatId);

                const existingMessages = await chatApi.getChatMessages(chatId);
                setContextMessages(existingMessages);

                joinChat(chatId);
            } catch (error) {
                console.error('Error initializing chat:', error);
            }
        };

        initializeChat();
    }, [selectedResident, socket]);

    const handleSendMessage = async () => {
        if (message.trim() === '' || !selectedResident || !currentChatId) return;

        try {
            const messageData = {
                chatId: currentChatId,
                text: message.trim(),
                senderId: loggedInUserId,
                receiverId: selectedResident._id
            };

            setMessage('');

            await contextSendMessage(messageData);

        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredResidents = residents.filter((resident) =>
            resident.name?.toLowerCase().includes(query.toLowerCase()) ||
            resident.email?.toLowerCase().includes(query.toLowerCase())
        );
        setResidents(filteredResidents);
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files?.[0];
        if (!file || !currentChatId) return;

        try {
            const formData = new FormData();
            formData.append('file', file);

            const uploadResponse = await chatApi.uploadMedia(formData);

            const messageData = {
                chatId: currentChatId,
                text: file.name,
                senderId: loggedInUserId,
                receiverId: selectedResident._id,
                mediaUrl: uploadResponse.url
            };

            await contextSendMessage(messageData);

        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file. Please try again.');
        }
    };

    const handleEmojiSelect = (emoji) => {
        setMessage((prevMessage) => prevMessage + emoji.native);
        setShowEmojiPicker(false);
    };

    const handleCall = (type) => {
        setCallState({ isActive: true, type });
    };

    const endCall = () => {
        setCallState({ isActive: false, type: null });
    };

    const formatLastSeen = (userId) => {
        const lastSeen = getUserLastSeen(userId);
        if (!lastSeen) return 'Offline';
        return new Date(lastSeen).toLocaleString();
    };

    const handleResidentSelection = (resident) => {
        if (resident._id !== selectedResident?._id) {
            setSelectedResident(resident);
            setCurrentChatId(null);
            setContextMessages([]);
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            }
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to check if the screen is small
    const isSmallScreen = () => window.innerWidth < 768;

    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className='fixed top-0 w-full z-100'>
                    <Navbar />
                </div>
                <div className="flex flex-1 " >
                <div className={`fixed md:static z-10 md:z-auto inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-full md:w-80 border-r`} style={{ height: 'calc(100% - 69px)' }}>
                        <ChatSidebar
                            residents={residents}
                            selectedResident={selectedResident}
                            handleResidentSelection={handleResidentSelection}
                            searchQuery={searchQuery}
                            handleSearch={handleSearch}
                            isUserOnline={isUserOnline}
                            formatLastSeen={formatLastSeen}
                        />
                    </div>

                    <div className="flex-1 flex flex-col" style={{ height: 'calc(100vh - 21px)' }}>
                        {selectedResident ? (
                            <>
                                <div className="fixed top-0 w-full z-50 bg-white">
                                    <ChatHeader
                                        selectedResident={selectedResident}
                                        handleCall={handleCall}
                                        endCall={endCall}
                                        callState={callState}
                                        isUserOnline={isUserOnline}
                                        formatLastSeen={formatLastSeen}
                                        toggleSidebar={toggleSidebar}
                                    />
                                </div>
                                <div className="flex-1 overflow-y-auto" style={{ marginTop: '69px' }}>
                                    <ChatMessages
                                        contextMessages={contextMessages}
                                        loggedInUserId={loggedInUserId}
                                        selectedResident={selectedResident}
                                        messagesEndRef={messagesEndRef}
                                    />
                                    <ChatInput
                                        message={message}
                                        setMessage={setMessage}
                                        handleSendMessage={handleSendMessage}
                                        fileInputRef={fileInputRef}
                                        handleFileUpload={handleFileUpload}
                                        showEmojiPicker={showEmojiPicker}
                                        setShowEmojiPicker={setShowEmojiPicker}
                                        handleEmojiSelect={handleEmojiSelect}
                                    />
                                </div>
                            </>
                        ) : (
                            // Only show NoChatSelected on larger screens
                            !isSmallScreen() && <NoChatSelected />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uchat;