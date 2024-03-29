import { useColorScheme } from 'react-native';

export const useColorsTheme = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';

  const colors = {
    color: isDark ? '#fff' : '#000',
    backgroundColor: isDark ? '#1d1d1d' : '#eee',
  };

  return {
    colors,
    isDark,
  };
};
