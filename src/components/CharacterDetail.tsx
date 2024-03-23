import { StyleSheet, Text, View } from 'react-native';
import type { Character } from '../interfaces/characterInterface';

interface Props {
  character: Character;
}

export const CharacterDetail = ({ character }: Props) => {
  const { name, description } = character;
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8,
  },
});
