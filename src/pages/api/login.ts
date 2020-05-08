import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnected } from '../../middlewares/db';
import User from '../../models/User';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';
import { secret } from '../../utils/secret';

export default dbConnected(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const user = await User.findOne({ email: req.body.email }).orFail().exec();
      if (user && await compare(req.body.password, user.password)) {
        const claims = { sub: user.id, email: user.email };
        const jwt = sign(claims, secret, { expiresIn: '1h' });
        res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 3600,
          path: '/',
        }));
        res.json({ message: 'Login succeeded!!' });
      } else {
        res.status(400).json({ message: 'Login Failed' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
});
