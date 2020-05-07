import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../../middlewares/db';
import User from '../../../models/User';

export default dbConnected(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    body,
  } = req;
  if (req.method === 'PUT') {
    try {
      const user = await User.findByIdAndUpdate(id, body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await User.findByIdAndRemove(id);
      res.status(204).json('user successfully deleted');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});
