import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/ThemeContext';
import { Header } from './src/components';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Navigation />
    </ThemeProvider>
  );
}
