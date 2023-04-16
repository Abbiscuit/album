// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Album } from '../index';

const imageData = [
  { id: 1, image: 'https://picsum.photos/800/450?random=1' },
  { id: 2, image: 'https://picsum.photos/800/450?random=2' },
  { id: 3, image: 'https://picsum.photos/800/450?random=3' },
  { id: 4, image: 'https://picsum.photos/800/450?random=4' },
  { id: 5, image: 'https://picsum.photos/800/450?random=5' },
  { id: 6, image: 'https://picsum.photos/800/450?random=6' },
  { id: 7, image: 'https://picsum.photos/800/450?random=7' },
  { id: 8, image: 'https://picsum.photos/800/450?random=8' },
  { id: 9, image: 'https://picsum.photos/800/450?random=9' },
  { id: 10, image: 'https://picsum.photos/800/450?random=10' },
];

type Data = Album[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json(imageData);
}
