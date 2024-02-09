import marvelApi, { apiEndpoints } from '../../config';

export const apiSeries = async () => {
  try {
    const { data } = await marvelApi(`${apiEndpoints.series}`);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
