let users = [];

const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    socket.on('joinChat', ({ userId }) => {
      users.push({ userId, socketId: socket.id });
    });

    socket.on('sendMessage', (data) => {
      const recipient = users.find((user) => user.userId === data.recipientId);
      if (recipient) {
        io.to(recipient.socketId).emit('newMessage', data);
      }
    });

    socket.on('disconnect', () => {
      users = users.filter((user) => user.socketId !== socket.id);
      console.log('User disconnected:', socket.id);
    });
  });
};

module.exports = socketHandler;