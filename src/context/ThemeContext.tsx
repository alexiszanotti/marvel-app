import { PropsWithChildren, createContext, useState } from 'react';
import { ThemeColors, darkColors, ligthColors } from '../theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContexProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContexProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colors: currentTheme === 'light' ? ligthColors : darkColors,
        setTheme: setTheme,
      }}
    >
      <NavigationContainer>
        <SafeAreaView
          style={{
            backgroundColor:
              currentTheme === 'light'
                ? ligthColors.background
                : darkColors.background,
          }}
        />
        <StatusBar style={currentTheme === 'light' ? 'dark' : 'light'} />
        {children}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};
