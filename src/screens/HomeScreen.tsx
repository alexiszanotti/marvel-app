import { ActivityIndicator, Text, View } from 'react-native';
import { useCharacter } from '../hooks/useCharacter';

export const HomeScreen = () => {
  const { characters, isLoading } = useCharacter();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <ActivityIndicator color="gray" />
      </View>
    );
  }

  return (
    <View>
      <Text>PILAR TE AMO JUERTE</Text>
    </View>
  );
};
