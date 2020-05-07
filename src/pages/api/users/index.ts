import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';
import { dbConnected } from '../../../middlewares/db';

export default dbConnected(async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }

    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});
