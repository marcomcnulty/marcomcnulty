import { RandomImage } from './../components/RandomImage';
import { renderToString } from 'react-dom/server';
import { NowRequest, NowResponse } from '@vercel/node';
import { getRandomImage } from '../utils/unsplash';

export default async function (req: NowRequest, res: NowResponse) {
  const imgData = await getRandomImage();
  const imgUrl = imgData.urls.regular;
  const name = imgData.user.name;
  const userLink = imgData.links.html;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  let imageSrc = '';

  if (imgUrl) {
    const buff = await (await fetch(imgUrl)).arrayBuffer();
    imageSrc = `data:image/jpeg;base64,${Buffer.from(buff).toString('base64')}`;
  }

  const text = renderToString(RandomImage({ imageSrc, name, userLink }));
  return res.status(200).send(text);
}
