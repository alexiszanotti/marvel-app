import { Navigation } from './src/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Header } from './src/components';
import { ThemeContextProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <SafeAreaView
        style={{
          backgroundColor: 'black',
        }}
      />
      <StatusBar style="light" />
      <Header />
      <Navigation />
    </ThemeContextProvider>
  );
}
