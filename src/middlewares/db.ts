import Mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const DB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/portfolio-demo';

export const dbConnected = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    await Mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
    });
    await fn(req, res);
  } catch (error) {
    res.status(500).json({ error: 'DB Connection Error' });
  }
};
