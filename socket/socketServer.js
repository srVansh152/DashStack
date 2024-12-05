const socketIO = require('socket.io');
const Chat = require('../models/Chat');
const Message = require('../models/Message');

const initializeSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  // Track active users
  const activeUsers = new Map(); // userId -> socketId

  io.on('connection', (socket) => {
    console.log('New socket connection:', socket.id);

    socket.on('userConnected', (userId) => {
      console.log('User connected:', userId);
      activeUsers.set(userId, socket.id);
      socket.userId = userId;
      io.emit('activeUsers', Array.from(activeUsers.keys()));
    });

    socket.on('joinChat', async ({ chatId, userId }) => {
      try {
        // Leave all other rooms first
        const rooms = [...socket.rooms];
        rooms.forEach(room => {
          if (room !== socket.id) {
            socket.leave(room);
          }
        });

        console.log(`User ${userId} joining chat ${chatId}`);
        socket.join(chatId);
        
        const chat = await Chat.findById(chatId).populate('participants');
        if (chat) {
          chat.participants.forEach(participant => {
            if (participant._id.toString() !== userId) {
              const participantSocket = activeUsers.get(participant._id.toString());
              if (participantSocket) {
                io.to(participantSocket).emit('userJoinedChat', { chatId, userId });
              }
            }
          });
        }
      } catch (error) {
        console.error('Error joining chat:', error);
        socket.emit('error', { message: 'Failed to join chat' });
      }
    });

    socket.on('sendMessage', async (messageData) => {
      try {
        const { chatId, text, senderId, receiverId } = messageData;
        console.log(`Processing message in chat ${chatId} from ${senderId}`);

        // Create and save message
        const newMessage = new Message({
          chat: chatId,
          sender: senderId,
          text: text,
          type: 'text'
        });
        await newMessage.save();

        // Get populated message
        const populatedMessage = await Message.findById(newMessage._id)
          .populate('sender', 'fullName email photo');

        // Update chat
        await Chat.findByIdAndUpdate(chatId, {
          $push: { messages: newMessage._id }
        });

        // Only emit to the specific chat room
        console.log(`Emitting message to chat room ${chatId}`);
        socket.to(chatId).emit('newMessage', {
          _id: populatedMessage._id,
          chat: chatId,
          text: populatedMessage.text,
          sender: populatedMessage.sender,
          createdAt: populatedMessage.createdAt
        });

        // Also emit back to sender but with a different socket call
        socket.emit('newMessage', {
          _id: populatedMessage._id,
          chat: chatId,
          text: populatedMessage.text,
          sender: populatedMessage.sender,
          createdAt: populatedMessage.createdAt
        });

      } catch (error) {
        console.error('Error handling message:', error);
        socket.emit('messageError', { error: 'Failed to send message' });
      }
    });

    socket.on('disconnect', () => {
      if (socket.userId) {
        activeUsers.delete(socket.userId);
        io.emit('activeUsers', Array.from(activeUsers.keys()));
      }
      console.log('User disconnected:', socket.id);
    });
  });

  return io;
};

module.exports = initializeSocket;