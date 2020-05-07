import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../../middlewares/db';
import Portfolio from '../../../models/Portfolio';

export default dbConnected(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const portfolio = await new Portfolio(req.body).save();
      res.status(201).json(portfolio);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    try {
      const users = await Portfolio.find().populate('user').exec();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});
