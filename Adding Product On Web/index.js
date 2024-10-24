import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import Routes from './routes/taskRoute.js';

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', Routes);

app.post

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
