import { NowRequest, NowResponse } from '@vercel/node';
import { getRandomImage } from '../utils/unsplash';

export default async function (req: NowRequest, res: NowResponse) {
  const image = await getRandomImage();

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  return res.status(200).send(image);
}
