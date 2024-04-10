import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCharacter, useSeries } from '../hooks';
import { GradientBg, Poster } from '../components';
import { globalStyles } from '../theme/theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useFonts } from 'expo-font';

export const HomeScreen = () => {
  const { characters, loadingCharacters } = useCharacter();
  const { loadginSeries, series } = useSeries();
  const { width } = useWindowDimensions();
  const { colors } = useContext(ThemeContext);

  const { top } = useSafeAreaInsets();

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Black': require('../../assets/font/Montserrat-Black.ttf'),
  });

  if (loadingCharacters || loadginSeries) {
    return <ActivityIndicator size={30} color={'gray'} />;
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const backgroundColorTitle = colors.title === '#1d1d1d' ? '#1d1d1d' : '#eee';
  const colorTitle = colors.title === '#1d1d1d' ? '#eee' : '#1d1d1d';

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

  return (
    <GradientBg>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            backgroundColor: colors.background,
            marginTop: top,
            flex: 1,
            paddingBottom: 30,
          }}
        >
          <View style={globalStyles.container}>
            <View>
              <Text
                style={[
                  {
                    color: colorTitle,
                    fontFamily: 'Montserrat-Black',
                    backgroundColor: backgroundColorTitle,
                  },
                  globalStyles.title,
                ]}
              >
                Personajes
              </Text>
              <Carousel
                data={filterCharacters}
                renderItem={({ item }: any) => <Poster data={item} />}
                sliderWidth={width}
                itemWidth={180}
                vertical={false}
              />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: colorTitle,
                    fontFamily: 'Montserrat-Black',
                    backgroundColor: backgroundColorTitle,
                  },
                  globalStyles.title,
                ]}
              >
                Series
              </Text>
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
