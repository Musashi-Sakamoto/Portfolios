import Mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const dbConnected = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  let connection = null;
  try {
    connection = await Mongoose.createConnection(process.env.MONGODB_URL!, {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
    });
    await fn(req, res);
  } catch (error) {
    connection?.close();
    res.status(500).json({ error: 'DB Connection Error' });
  }
};
