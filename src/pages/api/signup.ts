import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../middlewares/db';
import User from '../../models/User';
import { hash } from 'bcrypt';

export default dbConnected(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const hashedPassword = await hash(req.body.password, 10);
      const user = await(new User({ ...req.body, password: hashedPassword })).save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
});
