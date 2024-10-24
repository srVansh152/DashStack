const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorMiddleware'); // Import the error middleware

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

connectDB();

// Auth and society routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/society', require('./routes/society'));

// Important numbers routes
app.use('/api/important-numbers', require('./routes/importantNumber'));

// Resident management routes
app.use('/api/residents', require('./routes/resident'));

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Use the error handling middleware after all routes
app.use(errorHandler);



// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});


