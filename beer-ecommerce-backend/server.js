import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST'], // Allowed HTTP methods
};

// Middleware
app.use(cors(corsOptions));
app.use('/api', apiRoutes);

// Port configuration
const PORT = process.env.PORT || 5001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
