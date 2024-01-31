import marvelApi, { apiEndpoints } from '../../config';

export const apiCharacters = async () => {
  try {
    const { data } = await marvelApi(
      `${apiEndpoints.characters}?orderBy=modified`
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
