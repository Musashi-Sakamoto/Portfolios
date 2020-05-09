import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import { promises as fs } from 'fs';

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

const formidablePromise = (req: NextApiRequest) => {
  return new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const form = new formidable.IncomingForm();
      form.uploadDir = './';
      form.keepExtensions = true;
      const { files } = await formidablePromise(req);
      const result = await cloudinary.uploader.upload(files.image.path);
      fs.unlink(files.image.path);
      res.json({ result, message: 'Hey! This is your server response!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Failed to upload image' });
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
};
