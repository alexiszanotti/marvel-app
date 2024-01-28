import { useEffect, useState } from 'react';
import { Character, CharacterResponse } from '../interfaces/characterInterface';
import { apiCharacters } from '../api/apiCharacters';

export const useCharacter = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = async () => {
    const { data } = await apiCharacters();
    setCharacters(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters,
    isLoading,
  };
};
