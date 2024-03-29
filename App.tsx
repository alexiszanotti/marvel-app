import { Navigation } from './src/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Header } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import { useColorsTheme } from './src/hooks/useColorsTheme';

export default function App() {
  const { colors, isDark } = useColorsTheme();

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          backgroundColor: colors.backgroundColor,
        }}
      />
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Header />
      <Navigation />
    </NavigationContainer>
  );
}
