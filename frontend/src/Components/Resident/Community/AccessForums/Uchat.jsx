import React, { useState, useEffect, useRef } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import UAside from '../../../Common/SideBar/ResidentSideBar/UAside';
import EmojiPicker from 'emoji-picker-react';
import { Video, Phone, Paperclip, Smile, Send, Bell, X } from 'lucide-react';
import { Link } from 'react-router-dom';



const Uchat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [callState, setCallState] = useState({ isActive: false, type: null });
    const fileInputRef = useRef(null);

    // Mock data for initial contacts
    useEffect(() => {
        const initialContacts = [
            { id: 1, name: 'Ariene McCoy', lastMessage: 'Hi there! How are you?', lastMessageTime: '9:00 PM' },
            { id: 2, name: 'Michael John', lastMessage: 'Can we meet tomorrow?', lastMessageTime: '8:30 PM' },
            { id: 3, name: 'Elizabeth Sarah', lastMessage: 'The project is done!', lastMessageTime: '7:45 PM' },
            { id: 4, name: 'Jenny Wilson', lastMessage: "Don't forget the meeting", lastMessageTime: '6:15 PM' },
            { id: 5, name: 'Esther Howard', lastMessage: 'Thanks for your help', lastMessageTime: '5:30 PM' },
        ];
        setContacts(initialContacts);
        setSelectedContact(initialContacts[0]);
    }, []);

    // Mock data for initial messages
    useEffect(() => {
        if (selectedContact) {
            const initialMessages = [
                { id: 1, sender: selectedContact.name, content: 'Hi there! How are you?', timestamp: '9:00 PM', type: 'text' },
                { id: 2, sender: 'You', content: "Hey! I'm doing great, thanks for asking!", timestamp: '9:02 PM', type: 'text' },
                { id: 3, sender: selectedContact.name, content: 'https://s3-alpha-sig.figma.com/img/f214/0926/d71e2d85050dcb9cf461aa925fc7d4ce?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oE3cN04u4Ph2RrMhlG77bv29~onm6Rf015EDn-NcYUtMgq-spMjDFtabpMtkpUnxPxcCm1UlVwDfFxsqmpzAMg6A1jXfH01fLXtatGclxILNGtRm1geoiUJDKPTyt03Te7NJzfaVvQjqPrJg6qvYMWyYByWmIQQ25-G5aoBvY~grZMtIPOc9q7YiP3TxVc-mua8mPtfzCqIrkZn0vDL6IFxj~YzkBh~7gpfH-BHv7Cr41P1WR3TRBzjY1FoJiq2F6On8b8lF6j5wIFag24CU4yTm2eA2ff~9awAa4PDAJmBrnjFj5el7~HKbHGPe~fAJNi99acAQjIEwlGZypfnTVA__', timestamp: '9:15 PM', type: 'image' },
            ];
            setMessages(initialMessages);
        }
    }, [selectedContact]);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = {
                id: messages.length + 1,
                sender: 'You',
                content: message,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'text',
            };
            setMessages([...messages, newMessage]);
            setMessage('');

            if (selectedContact) {
                const updatedContacts = contacts.map((contact) =>
                    contact.id === selectedContact.id
                        ? { ...contact, lastMessage: message, lastMessageTime: newMessage.timestamp }
                        : contact
                );
                setContacts(updatedContacts);
            }
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredContacts = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.lastMessage.toLowerCase().includes(query.toLowerCase())
        );
        setContacts(filteredContacts);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result;
                const newMessage = {
                    id: messages.length + 1,
                    sender: 'You',
                    content,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    type: file.type.startsWith('image/') ? 'image' : 'video',
                };
                setMessages([...messages, newMessage]);
            };
            reader.readAsDataURL(file);
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

    const notifications = [
        {
            id: 1,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a fund of',
            amount: '1000 rupees for Navratri.',
            time: '30 Minutes ago',
            avatar: '/api/placeholder/40/40',
            type: 'fund'
        },
        {
            id: 2,
            user: 'Evelyn Harper',
            userCode: 'A- 101',
            message: 'gave a',
            linkText: 'Maintenance',
            amount: ' of 1000 rupees.',
            time: '2 days ago',
            avatar: '/api/placeholder/40/40',
            type: 'maintenance'
        },
        {
            id: 3,
            user: 'Ganesh Chaturthi',
            userCode: 'A- 101',
            amount: '₹ 1,500',
            subtitle: 'Per Person Amount :',
            description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesh in OutResident.',
            time: '2 days ago',
            type: 'event'
        }
    ];


    return (
        <div className='flex h-screen bg-gray-50'>
            <UAside />
            <div className="flex-1 overflow-auto">
                <header className="bg-white py-2 mb-3 border-b flex justify-between items-center shadow-sm  top-0 z-10">
                    {/* Search Bar - hidden on smaller screens */}
                    <div className="flex items-center ms-3 gap-2 text-sm">
                        <span className="text-gray-500">Home</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-blue-500">Access Forums</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            {/* Notification Bell Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            {/* Notification Dropdown Panel */}
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-lg border overflow-hidden z-20">
                                    <div className="flex justify-between items-center p-4 border-b">
                                        <h2 className="font-semibold text-gray-800">Notifications</h2>
                                        <button
                                            onClick={() => { }}
                                            className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notifications.map((notification) => (
                                            <div key={notification.id} className="p-4 border-b hover:bg-gray-50 transition-colors">
                                                <div className="flex gap-3">
                                                    {/* Avatar or Icon */}
                                                    {notification.type !== 'event' ? (
                                                        <img
                                                            src='/image/3504bec22d3fe96515e7c73aeadb9d13.jpg'
                                                            alt=""
                                                            className="w-10 h-10 rounded-full"
                                                        />
                                                    ) : (
                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <span className="text-blue-500 text-xl">G</span>
                                                        </div>
                                                    )}

                                                    {/* Content */}
                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-800">
                                                            <span className="font-medium">{notification.user}</span> {notification.message}
                                                            {notification.linkText && (
                                                                <span className="text-blue-500"> {notification.linkText}</span>
                                                            )}
                                                        </p>
                                                        <span className="text-xs text-gray-400">{notification.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile Section */}
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
                </header>
                <div className="flex shadow bg-white p-2 h-[860px] flex-col md:flex-row">
                    {/* Left Sidebar */}
                    <div className="w-full md:w-80 border-r flex flex-col">
                        <div className="p-4 border-b">
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="Search Here"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none"
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {/* Chat List */}
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}`}
                                    onClick={() => setSelectedContact(contact)}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="font-medium truncate">{contact.name}</p>
                                            <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 truncate">
                                            {contact.lastMessage}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Chat Area */}
                    <div className="flex-1 flex flex-col">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200" />
                                <div>
                                    <h2 className="font-semibold">{selectedContact?.name || 'Select a contact'}</h2>
                                    <p className="text-sm text-gray-500">{selectedContact ? 'Active Now' : 'No contact selected'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                    onClick={() => handleCall('audio')}
                                    aria-label="Start audio call"
                                >
                                    <Phone className="w-5 h-5 text-gray-500" />
                                </button>
                                <button
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                    onClick={() => handleCall('video')}
                                    aria-label="Start video call"
                                >
                                    <Video className="w-5 h-5 text-gray-500" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <svg
                                        className="w-6 h-6 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {selectedContact && messages.map((msg) => (
                                <div key={msg.id} className={`flex items-start gap-2.5 ${msg.sender === 'You' ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                                    <div className={`flex flex-col gap-1 ${msg.sender === 'You' ? 'items-end' : ''}`}>
                                        <div className="flex items-center gap-2">
                                            {msg.sender !== 'You' && <span className="font-medium">{msg.sender}</span>}
                                            <span className="text-sm text-gray-500">{msg.timestamp}</span>
                                            {msg.sender === 'You' && <span className="font-medium">{msg.sender}</span>}
                                        </div>
                                        <div className={`${msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-100'} rounded-lg p-3 max-w-md`}>
                                            {msg.type === 'text' && <p>{msg.content}</p>}
                                            {msg.type === 'image' && (
                                                <img
                                                    src={msg.content}
                                                    alt="Shared image"
                                                    className="rounded-lg mb-2 w-full h-48 object-cover"
                                                />
                                            )}
                                            {msg.type === 'video' && (
                                                <video controls className="rounded-lg mb-2 w-full h-48 object-cover">
                                                    <source src={msg.content} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t">
                            <div className="flex items-center gap-2">
                                <button
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        />
                                    </svg>
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileUpload}
                                    accept="image/*,video/*"
                                />
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                    className="flex-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                                />
                                <button
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full"
                                    onClick={handleSendMessage}
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {showEmojiPicker && (
                                <div className="absolute bottom-20 right-4">
                                    <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Call Overlay */}
                    {callState.isActive && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                                <h3 className="text-xl font-semibold mb-4">
                                    {callState.type === 'audio' ? 'Audio Call' : 'Video Call'} with {selectedContact?.name}
                                </h3>
                                <p className="mb-4">Call duration: 00:00</p>
                                <button
                                    onClick={endCall}
                                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200"
                                >
                                    <X className="w-6 h-6 inline-block mr-2" />
                                    End Call
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Uchat
