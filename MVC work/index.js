const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is at the top
const routes = require('./routes/TaskRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error('MONGO_URI is not defined in .env file');
    process.exit(1); 
}

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected ...'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
