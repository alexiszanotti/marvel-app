import marvelApi, { apiEndpoints } from '../../config';

export const apiComics = async () => {
  try {
    const { data } = await marvelApi(`${apiEndpoints.comics}`);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
