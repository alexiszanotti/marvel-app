import md5 from 'md5';
import axios from 'axios';

import { MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from '@env';

const ts = Date.now();

const hash = md5(`${ts}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`);

export const apiParams = {
  ts,
  apikey: MARVEL_PUBLIC_KEY,
  hash,
};

export const apiEndpoints = {
  characters: '/v1/public/characters',
  comics: '/v1/public/comics',
  series: '/v1/public/series',
};

const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: apiParams,
});

export default marvelApi;
