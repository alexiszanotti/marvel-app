import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useCharacter } from '../hooks/useCharacter';
import { CharacterPoster, Spinner } from '../components';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {
  const { characters, isLoading } = useCharacter();

  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,
          rowGap: 10,
          height: 440,
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Personajes</Text>
          <Carousel
            data={characters}
            renderItem={({ item }: any) => <CharacterPoster character={item} />}
            sliderWidth={width}
            itemWidth={170}
            vertical={false}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Comics</Text>
          <FlatList
            data={characters}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }: any) => <CharacterPoster character={item} />}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
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
