import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { Character } from '../interfaces/characterInterface';
import type { Series } from '../interfaces/seriesInterface';

interface Props {
  data: Character | Series;
  height?: number;
  width?: number;
}
const Poster = ({ data, height = 310, width = 180 }: Props) => {
  const uri = `${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`;

  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigate('Detail', data)}
        style={{ width, height }}
      >
        <Image source={{ uri }} style={styles.image} />
        <View style={styles.separator}></View>
        <View style={styles.containerName}>
          <Text numberOfLines={1} style={styles.name}>
            {isCharacter(data) ? data.name : data.title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const isCharacter = (data: Character | Series): data is Character => {
  return (data as Character).name !== undefined;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    shadowColor: '#000',
    alignItems: 'center',
    padding: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    resizeMode: 'cover',
  },
  containerName: {
    width: 180,
    height: 50,
    backgroundColor: '#000',
    padding: 10,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  separator: {
    width: 180,
    height: 3,
    backgroundColor: '#fff',
  },
});

export default Poster;
