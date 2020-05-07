import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../../middlewares/db';
import Character from '../../../models/Character';

export default dbConnected(async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const characters = await Character.find();

    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});
