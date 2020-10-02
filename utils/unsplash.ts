import { access } from 'fs';
import fetch from 'isomorphic-unfetch';

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
// get random image of London
const RANDOM_IMAGE_ENDPOINT = `https://api.unsplash.com/photos/random?client_id=${accessKey}&orientation=landscape&content_filter=high&query=london`;

export async function getRandomImage() {
  const response = await fetch(RANDOM_IMAGE_ENDPOINT, {
    headers: {
      'Accept-Version': 'v1',
    },
  });

  const { status } = response;

  if (status === 422) {
    return {};
  } else if (status === 200) {
    const data = await response.json();
    const rawPhoto = data.urls.raw;
    // resize to size suitable for GitHub profile: 854x279px
    const resizedImg = `${rawPhoto}&w=854&h=279`;

    return resizedImg;
  }
}
