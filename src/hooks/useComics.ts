import { useEffect, useState } from 'react';
import { apiComics } from '../api/apiComics';

export const useComics = () => {
  const [comics, setComics] = useState([]);

  const [loadingComics, setLoadingComics] = useState(true);
  const getComics = async () => {
    const { data } = await apiComics();
    setComics(data.results);
    setLoadingComics(false);
  };

  useEffect(() => {
    getComics();
  }, []);

  return {
    comics,
    loadingComics,
  };
};
