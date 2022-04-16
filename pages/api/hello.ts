import { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  msg: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  res.status(200).json({ msg: 'Gretting John Doe' });
}
