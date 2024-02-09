import { useEffect, useState } from 'react';
import type { Character } from '../interfaces/characterInterface';
import { apiCharacters } from '../api/apiCharacters';

export const useCharacter = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);

  const getCharacters = async () => {
    const { data } = await apiCharacters();
    setCharacters(data.results);
    setLoadingCharacters(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters,
    loadingCharacters,
  };
};
