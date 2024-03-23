import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootStackParams } from '../navigation/Navigation';
import { CharacterDetail } from '../components';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const { name, description, thumbnail, id } = route.params;

  const uri = `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;

  return (
    <ScrollView>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </Pressable>
      <View style={[styles.imageContainer, { height: screenHeight * 0.6 }]}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <View style={styles.marginContainer}>
        <CharacterDetail character={route.params} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  marginContainer: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
