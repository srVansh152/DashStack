const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorMiddleware'); // Import the error middleware
const { protect } = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
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

// Auth and society routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/society', require('./routes/society'));

// Important numbers routes
app.use('/api/important-numbers', require('./routes/importantNumber'));

// Resident management routes
app.use('/api/residents', require('./routes/resident'));

// Middleware to protect routes
app.use('/api/financial', require('./routes/financialRoutes'));

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

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
