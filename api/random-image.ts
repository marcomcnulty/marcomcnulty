import { RandomImage } from './../components/RandomImage';
import { renderToString } from 'react-dom/server';
import { NowRequest, NowResponse } from '@vercel/node';
import { getRandomImage } from '../utils/unsplash';

export default async function (req: NowRequest, res: NowResponse) {
  const imageUrl: string = await getRandomImage();

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  let imageSrc = '';

  if (imageUrl) {
    const buff = await (await fetch(imageUrl)).arrayBuffer();
    imageSrc = `data:image/jpeg;base64,${Buffer.from(buff).toString('base64')}`;
  }

  const text = renderToString(RandomImage({ imageSrc }));
  return res.status(200).send(text);
}
