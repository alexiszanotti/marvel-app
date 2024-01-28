import marvelApi, { apiEndpoints } from '../../config';

export const apiCharacters = async () => {
  try {
    const { data } = await marvelApi(apiEndpoints.characters);

    return data;
  } catch (error) {
    console.error(error);
  }
};
