import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../../middlewares/db';
import User from '../../../models/User';

export default dbConnected(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const user = await (new User(req.body)).save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});
