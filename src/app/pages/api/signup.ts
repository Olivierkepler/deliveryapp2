import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (name && email && password) {
      // Simulate signup success
      res.status(200).json({ message: 'Sign up successful!' });
    } else {
      // Handle missing fields
      res.status(400).json({ message: 'Missing required fields.' });
    }
  } else {
    // Reject non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
