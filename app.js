const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { Server } = require('socket.io'); // For real-time communication
const http = require('http'); // Required for Socket.IO
const errorHandler = require('./middlewares/errorMiddleware');
const { protect } = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();
const server = http.createServer(app); // Create HTTP server for Socket.IO
const io = new Server(server, { cors: { origin: '*' } }); // Initialize Socket.IO

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));

connectDB();

console.log('Request routes loaded');

// Real-time communication setup with Socket.IO
let users = [];

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join chat
  socket.on('joinChat', ({ userId }) => {
    users.push({ userId, socketId: socket.id });
    console.log('User joined chat:', userId);
  });

  // Handle sending a message
  socket.on('sendMessage', (data) => {
    const recipient = users.find((user) => user.userId === data.recipientId);
    if (recipient) {
      io.to(recipient.socketId).emit('newMessage', data);
    }
  });

  // Handle video/audio call signaling
  socket.on('callUser', (data) => {
    const recipient = users.find((user) => user.userId === data.userToCall);
    if (recipient) {
      io.to(recipient.socketId).emit('callIncoming', {
        signal: data.signal,
        from: data.from,
        name: data.name,
      });
    }
  });

  // Handle call accepted
  socket.on('acceptCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });

  // Disconnect user
  socket.on('disconnect', () => {
    users = users.filter((user) => user.socketId !== socket.id);
    console.log('User disconnected:', socket.id);
  });
});

// Routes setup
app.use('/api/auth', require('./routes/auth'));
app.use('/api/society', require('./routes/society'));
app.use('/api/important-numbers', require('./routes/importantNumber'));
app.use('/api/residents', require('./routes/resident'));
app.use('/api/financial', require('./routes/financialRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/facilities', require('./routes/facilityRoutes'));
app.use('/api/complaints', require('./routes/complaintRoutes'));
app.use('/api/visitor-logs', require('./routes/visitorLogRoutes'));
app.use('/api/security-protocols', require('./routes/securityProtocolRoutes'));
app.use('/api/announcements', require('./routes/announcementRoutes'));
app.use('/api/emergency-alerts', require('./routes/emergencyRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/otherincome', require('./routes/otherIncomeRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));
app.use('/api/polls', require('./routes/pollRoutes'));

// Chatbox routes
app.use('/api/chat', require('./routes/chatRoutes'));

// Sample protected route
app.get('/protected', protect, (req, res) => {
  res.json({
    message: 'Access granted!',
    user: req.user,
    residents: req.residents,
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Common get route
app.get('/', (req, res) => {
  res.status(200).send('done bhai bas hogaya 😞 🎉');
});

// Use the error handling middleware after all routes
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

           


            