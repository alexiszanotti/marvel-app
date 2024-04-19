import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { Character } from '../interfaces/characterInterface';
import { globalStyles } from '../theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  character: Character;
}

export const CharacterDetail = ({ character }: Props) => {
  const { name, description, thumbnail } = character;

  const { goBack } = useNavigation();
  const { colors } = useContext(ThemeContext);

  const { height: screenHeight } = useWindowDimensions();

  const uri = `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;

  return (
    <ScrollView>
      <Pressable style={styles.backButton} onPress={() => goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </Pressable>
      <View
        style={[
          { ...styles.container },
          { height: screenHeight, backgroundColor: colors.background },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.title }]}>{name}</Text>
          <Text style={[styles.description, { color: colors.subTitle }]}>
            {description || 'No description available'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '60%',
  },
  textContainer: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 100,
    zIndex: 999,
  },
});
