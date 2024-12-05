// import React, { createContext, useContext, useState, useEffect } from 'react';
// import socketService from '../services/socketService';
// import { chatApi } from '../services/chatApi';

// const ChatContext = createContext(null);

// export const ChatProvider = ({ children }) => {
//     const [socket, setSocket] = useState(null);
//     const [onlineUsers, setOnlineUsers] = useState(new Map());
//     const [activeChat, setActiveChat] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const userId = localStorage.getItem('userId');
//         if (userId && !socket) {
//             const newSocket = socketService.connect();
//             setSocket(newSocket);

//             // Socket event listeners
//             const eventHandlers = {
//                 'connect': () => {
//                     console.log('Socket connected:', newSocket.id);
//                     newSocket.emit('userConnected', userId);
//                 },
//                 'userStatusChanged': ({ userId, status, lastSeen }) => {
//                     setOnlineUsers(prev => new Map(prev).set(userId, { status, lastSeen }));
//                 },
//                 'onlineUsers': (users) => {
//                     const usersMap = new Map();
//                     users.forEach(user => {
//                         usersMap.set(user.userId, {
//                             status: user.status,
//                             lastSeen: user.lastSeen
//                         });
//                     });
//                     setOnlineUsers(usersMap);
//                 },
//                 'newMessage': (newMessage) => {
//                     console.log('New message received in context:', newMessage);
//                     setMessages(prev => {
//                         // Check if message already exists
//                         if (prev.some(msg => msg._id === newMessage._id)) {
//                             return prev;
//                         }
                        
//                         // Format the message
//                         const formattedMessage = {
//                             id: newMessage._id,
//                             sender: newMessage.sender._id,
//                             content: newMessage.text,
//                             timestamp: new Date(newMessage.createdAt).toLocaleTimeString([], { 
//                                 hour: '2-digit', 
//                                 minute: '2-digit' 
//                             }),
//                             senderId: newMessage.sender._id
//                         };
                        
//                         return [...prev, formattedMessage];
//                     });
//                 },
//                 'messageError': (error) => {
//                     console.error('Message error:', error);
//                 }
//             };

//             // Register all event listeners
//             Object.entries(eventHandlers).forEach(([event, handler]) => {
//                 newSocket.on(event, handler);
//             });

//             // Handle offline/online status
//             window.addEventListener('online', () => {
//                 newSocket.connect();
//                 // Send any stored offline messages
//                 const offlineMessages = JSON.parse(localStorage.getItem('offlineMessages') || '[]');
//                 offlineMessages.forEach(msg => {
//                     newSocket.emit('sendMessage', msg);
//                 });
//                 localStorage.removeItem('offlineMessages');
//             });

//             window.addEventListener('offline', () => {
//                 console.log('Connection lost - switching to offline mode');
//             });

//             // Cleanup function
//             return () => {
//                 Object.keys(eventHandlers).forEach(event => {
//                     newSocket.off(event);
//                 });
//                 socketService.disconnect();
//             };
//         }
//     }, []);

//     // Define the missing functions
//     const sendMessage = async (messageData) => {
//         try {
//             if (!socket) {
//                 throw new Error('Socket connection not available');
//             }
            
//             // Add message to local state immediately for instant feedback
//             const tempMessage = {
//                 id: Date.now().toString(),
//                 sender: localStorage.getItem('userId'),
//                 content: messageData.text,
//                 timestamp: new Date().toLocaleTimeString([], { 
//                     hour: '2-digit', 
//                     minute: '2-digit' 
//                 }),
//                 senderId: localStorage.getItem('userId'),
//                 pending: true
//             };
            
//             setMessages(prev => [...prev, tempMessage]);
            
//             // Emit the message
//             socket.emit('sendMessage', messageData);
            
//             // Store message if offline
//             if (!navigator.onLine) {
//                 const offlineMessages = JSON.parse(localStorage.getItem('offlineMessages') || '[]');
//                 offlineMessages.push(messageData);
//                 localStorage.setItem('offlineMessages', JSON.stringify(offlineMessages));
//             }
//         } catch (error) {
//             console.error('Error sending message:', error);
//             throw error;
//         }
//     };

//     const joinChat = (chatId) => {
//         if (socket) {
//             socket.emit('joinChat', { 
//                 chatId, 
//                 userId: localStorage.getItem('userId') 
//             });
//             setActiveChat(chatId);
//         }
//     };

//     const leaveChat = (chatId) => {
//         if (socket) {
//             socket.emit('leaveChat', { 
//                 chatId, 
//                 userId: localStorage.getItem('userId') 
//             });
//             setActiveChat(null);
//         }
//     };

//     const isUserOnline = (userId) => {
//         const userStatus = onlineUsers.get(userId);
//         return userStatus?.status === 'online';
//     };

//     const getUserLastSeen = (userId) => {
//         const userStatus = onlineUsers.get(userId);
//         return userStatus?.lastSeen;
//     };

//     const value = {
//         socket,
//         onlineUsers,
//         activeChat,
//         setActiveChat,
//         messages,
//         setMessages,
//         sendMessage,
//         joinChat,
//         leaveChat,
//         loading,
//         isUserOnline,
//         getUserLastSeen
//     };

//     return (
//         <ChatContext.Provider value={value}>
//             {children}
//         </ChatContext.Provider>
//     );
// };

// export const useChat = () => {
//     const context = useContext(ChatContext);
//     if (!context) {
//         throw new Error('useChat must be used within a ChatProvider');
//     }
//     return context;
// };