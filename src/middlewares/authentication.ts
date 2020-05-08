import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { secret } from '../utils/secret';

export const authenticated = (fn: NextApiHandler) =>
async (req: NextApiRequest, res: NextApiResponse) => {
  const decoded = verify(req.cookies.auth!, secret);
  if (decoded) {
    await fn(req, res);
    return;
  }
  res.status(401).json({ message: 'Sorry you are not authenticated' });
};
