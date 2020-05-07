import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../../middlewares/db';
import Portfolio from '../../../models/Portfolio';

export default dbConnected(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    body,
  } = req;
  if (req.method === 'PUT') {
    try {
      const portfolio = await Portfolio.findByIdAndUpdate(id, body, { new: true }).exec();
      res.status(200).json(portfolio);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await Portfolio.findByIdAndRemove(id).exec();
      res.status(204).json('portfolio successfully deleted');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const user = await Portfolio.findById(id, 'title siteUrl').exec();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
});
