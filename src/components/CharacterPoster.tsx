import { View, Text, Image, StyleSheet } from 'react-native';
import { Character } from '../interfaces/characterInterface';

interface Props {
  character: Character;
}
const CharacterPoster = ({ character }: Props) => {
  const uri = `${character.thumbnail.path}/landscape_xlarge.${character.thumbnail.extension}`;

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.containerName}>
        <Text style={styles.name}>{character.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  container: {
    width: 300,
    height: 420,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  containerName: {
    width: '100%',
    height: 70,
    backgroundColor: '#000',
    opacity: 0.8,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default CharacterPoster;
