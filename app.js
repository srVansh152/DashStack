// app.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const cron = require('node-cron');

const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

// Route definitions
app.use('/api/auth', require('./routes/auth'));
app.use('/api/society', require('./routes/society'));
app.use('/api/important-numbers', require('./routes/importantNumber'));
app.use('/api/residents', require('./routes/resident'));
app.use('/api/expenses', require('./routes/expenseRoutes')); // Expense routes
app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/facilities', require('./routes/facilityRoutes'));

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Scheduled task for facility notifications
const facilityController = require('./controllers/facilityController');
cron.schedule('0 0 * * *', () => {
    facilityController.sendFacilityNotifications();
});

process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});



