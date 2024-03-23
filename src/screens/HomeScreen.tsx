import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCharacter, useSeries } from '../hooks';
import { useFonts } from 'expo-font';
import { GradientBg, Poster } from '../components';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const HomeScreen = () => {
  const { characters, loadingCharacters } = useCharacter();
  const { loadginSeries, series } = useSeries();
  const { width } = useWindowDimensions();

  const { isDark, theme } = useContext(ThemeContext);

  const { top } = useSafeAreaInsets();

  const [loaded] = useFonts({
    'Montserrat-Black': require('../../assets/font/Montserrat-Black.ttf'),
  });

  if (loadingCharacters || loadginSeries) {
    return <ActivityIndicator size={30} color={'gray'} />;
  }

  const filterCharacters = characters.filter(
    (c) =>
      c.thumbnail.path !==
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
  );

  const filterSeries = series.filter(
    (c) =>
      c.thumbnail.path !==
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
  );

  if (!loaded) {
    return null;
  }

  return (
    <GradientBg>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginTop: top, flex: 1 }}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Personajes</Text>
              <Carousel
                data={filterCharacters}
                renderItem={({ item }: any) => <Poster data={item} />}
                sliderWidth={width}
                itemWidth={180}
                vertical={false}
              />
            </View>
            <View>
              <Text style={styles.title}>Series</Text>
              <Carousel
                data={filterSeries}
                renderItem={({ item }) => <Poster data={item} />}
                sliderWidth={width}
                itemWidth={180}
                vertical={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </GradientBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 20,
    marginTop: 20,
  },
  title: {
    padding: 2,
    backgroundColor: '#000',
    fontFamily: 'Montserrat-Black',
    width: '100%',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});
