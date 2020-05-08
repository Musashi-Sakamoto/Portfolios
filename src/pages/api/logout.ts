import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 3600,
    path: '/',
  }));
  res.json({ message: 'Logout succeeded!!' });
};
