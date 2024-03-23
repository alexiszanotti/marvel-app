import { PropsWithChildren, createContext } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext({
  isDark: false,
  theme: NavigationDefaultTheme,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const theme = isDark ? NavigationDarkTheme : NavigationDefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <ThemeContext.Provider value={{ isDark, theme }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
