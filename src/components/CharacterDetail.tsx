import { StyleSheet, Text, View } from 'react-native';
import type { Character } from '../interfaces/characterInterface';
import { globalStyles } from '../theme/theme';

interface Props {
  character: Character;
}

export const CharacterDetail = ({ character }: Props) => {
  const { name, description } = character;

  return (
    <View>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.subTitle}>{description}</Text>
    </View>
  );
};
