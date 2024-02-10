import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Header } from './src/components';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          backgroundColor: 'black',
        }}
      />
      <StatusBar style="light" />
      <Header />
      {/* <FadeScreen /> */}
      <Navigation />
    </NavigationContainer>
  );
}
