import React, { createContext, useContext, useState, useEffect } from 'react';
import socketService from '../services/socketService';
import { chatApi } from '../services/chatApi';

const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState(new Map());
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId && !socket) {
            const newSocket = socketService.connect();
            setSocket(newSocket);

            newSocket.on('connect', () => {
                console.log('Socket connected:', newSocket.id);
                newSocket.emit('userConnected', userId);
            });

            newSocket.on('activeUsers', (users) => {
                const usersMap = new Map();
                users.forEach(userId => {
                    usersMap.set(userId, { status: 'online' });
                });
                setOnlineUsers(usersMap);
            });

            newSocket.on('newMessage', (newMessage) => {
                console.log('New message received in context:', newMessage);
                setMessages(prev => {
                    // Prevent duplicate messages
                    if (prev.some(msg => msg.id === newMessage._id)) {
                        return prev;
                    }
                    
                    const formattedMessage = {
                        id: newMessage._id,
                        sender: newMessage.sender._id,
                        content: newMessage.text,
                        timestamp: new Date(newMessage.createdAt).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                        }),
                        senderId: newMessage.sender._id
                    };
                    
                    return [...prev, formattedMessage];
                });
            });

            return () => {
                newSocket.off('connect');
                newSocket.off('activeUsers');
                newSocket.off('newMessage');
                socketService.disconnect();
            };
        }
    }, []);

    const sendMessage = async (messageData) => {
        try {
            if (!socket) {
                throw new Error('Socket connection not available');
            }
            
            // Only emit through socket, don't add to state here
            socketService.sendMessage(messageData);
            
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    };

    const joinChat = (chatId) => {
        if (socket) {
            socket.emit('joinChat', { 
                chatId, 
                userId: localStorage.getItem('userId') 
            });
            setActiveChat(chatId);
        }
    };

    const leaveChat = (chatId) => {
        if (socket) {
            socket.emit('leaveChat', { 
                chatId, 
                userId: localStorage.getItem('userId') 
            });
            setActiveChat(null);
        }
    };

    const isUserOnline = (userId) => {
        const userStatus = onlineUsers.get(userId);
        return userStatus?.status === 'online';
    };

    const getUserLastSeen = (userId) => {
        const userStatus = onlineUsers.get(userId);
        return userStatus?.lastSeen;
    };

    const value = {
        socket,
        onlineUsers,
        activeChat,
        setActiveChat,
        messages,
        setMessages,
        sendMessage,
        joinChat,
        leaveChat,
        loading,
        isUserOnline,
        getUserLastSeen
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};