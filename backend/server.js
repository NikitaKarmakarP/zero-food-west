import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

import authRoutes from './routes/auth.js';
import donationRoutes from './routes/donations.js';

app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('Zero Food Waste API is running...');
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zero-food-waste';

// Mock DB connection (Mongoose) - Error handled to not crash if mongo isn't running locally yet
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    httpServer.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err.message);
    // Continue running server even without DB for testing purposes
    httpServer.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (Without DB)`);
    });
  });
