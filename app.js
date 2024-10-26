const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenseRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware'); 

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

// Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Route definitions
app.use('/api/auth', require('./routes/auth'));
app.use('/api/society', require('./routes/society'));
app.use('/api/important-numbers', require('./routes/importantNumber'));
app.use('/api/residents', require('./routes/resident'));
app.use('/api/expenses', expenseRoutes);  // Expense routes

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Error handling middleware (after all routes)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});


