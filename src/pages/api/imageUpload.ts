import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';

cloudinary.config({
  cloud_name: 'dmrtlwisi',
  api_key: '529123257974891',
  api_secret: 'vvVXdDlQyPQoyMNLNzEjUGx6Z98',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();
      form.uploadDir = './';
      form.keepExtensions = true;
      form.parse(req, async (err, fields, files) => {
        console.log(err, fields, files);
        const result = await cloudinary.uploader.upload(files.image.path);
        res.json({ result, message: 'Hey! This is your server response!' });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to upload image' });
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
