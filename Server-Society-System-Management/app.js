const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/society', require('./routes/society'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
