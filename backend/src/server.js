import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import complaintRoutes from './routes/complaintRoutes.js';
import { connectDB } from './config/db.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ ok: true, service: 'scscms-backend' });
});

app.use('/api/complaints', complaintRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
