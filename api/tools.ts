import { NowRequest, NowResponse } from '@vercel/node';
import { renderToString } from 'react-dom/server';

import { Tools } from '../components/Tools';

export default async function (req: NowRequest, res: NowResponse) {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  const text = renderToString(Tools({}));
  return res.status(200).send(text);
}
