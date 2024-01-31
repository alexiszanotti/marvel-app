import { View, Text, Image, StyleSheet } from 'react-native';
import { Character } from '../interfaces/characterInterface';

interface Props {
  character: Character;
  height?: number;
  width?: number;
}
const CharacterPoster = ({ character, height = 310, width = 170 }: Props) => {
  const uri = `${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`;

  return (
    <View style={{ ...styles.container, width, height }}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.separator}></View>
      <View style={styles.containerName}>
        <Text numberOfLines={1} style={styles.name}>
          {character.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    shadowColor: '#000',
    alignItems: 'center',
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
    resizeMode: 'contain',
    width: '100%',
  },
  containerName: {
    width: 170,
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
    width: 170,
    height: 3,
    backgroundColor: '#fff',
  },
});

export default CharacterPoster;
