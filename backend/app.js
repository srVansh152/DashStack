const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
// const cloudinary = require('cloudinary').v2;
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorMiddleware'); // Import the error middleware
const { protect } = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(morgan('dev'));

connectDB();

// Sample Route to test the protect middleware
app.get('/protected', protect, (req, res) => {
  res.json({
    message: 'Access granted!',
    user: req.user,
    residents: req.residents,
  });
});


// Auth routes
app.use('/api/auth', require('./routes/auth'));

// society routes 
app.use('/api/society', require('./routes/society'));

// Important numbers routes
app.use('/api/important-numbers', require('./routes/importantNumber'));

// Resident management routes
app.use('/api/residents', require('./routes/resident'));

// Middleware to protect routes
app.use('/api/financial', require('./routes/financialRoutes'));

//other income routes 
app.use('/api/other-income', require('./routes/otherIncomeRoutes'));

// payments routes 
app.use('/api/payments', require('./routes/paymentRoutes'));

// visitors log routes 
app.use('/api/visitor-logs', require('./routes/visitorLogRoutes'));

// security guards routes 
app.use('/api/security-guards', require('./routes/securityGuardRoutes'));

// Expense routes
app.use('/api/expenses', require('./routes/expenseRoutes'));

// note routes 
app.use('/api/notes', require('./routes/noteRoutes'));

// facilities routes
app.use('/api/facilities', require("./routes/facilityRoutes"));

// Complaints routes
app.use('/api/complaints', require("./routes/complaintRoutes"));

// security protocol routes
app.use('/api/security-protocols', require("./routes/securityProtocolRoutes"));

// announcement routes
app.use('/api/announcements', require("./routes/announcementRoutes"));

//emergency routes
app.use('/api/emergency-alerts', require("./routes/emergencyRoutes"));

// Health check routes
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

//  commen get api
app.get('/', (req, res) => {
  res.status(200).send("done bhai bas hogaya 😞 🎉")
})

// Use the error handling middleware after all routes
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
