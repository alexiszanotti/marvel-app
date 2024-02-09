import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useCharacter, useSeries } from '../hooks';
import { Header, Poster, Spinner } from '../components';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {
  const { characters, loadingCharacters } = useCharacter();

  const { loadginSeries, series } = useSeries();

  const { top } = useSafeAreaInsets();

  if (loadingCharacters || loadginSeries) {
    return <Spinner />;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ marginTop: top, flex: 1 }}>
        <Header />
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Personajes</Text>
            <Carousel
              data={characters}
              renderItem={({ item }: any) => <Poster data={item} />}
              sliderWidth={width}
              itemWidth={180}
              vertical={false}
            />
          </View>
          <View>
            <Text style={styles.title}>Series</Text>
            <Carousel
              data={series}
              renderItem={({ item }) => <Poster data={item} />}
              sliderWidth={width}
              itemWidth={180}
              vertical={false}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
    width: '100%',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
