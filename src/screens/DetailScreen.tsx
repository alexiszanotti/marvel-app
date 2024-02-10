import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { RootStackParams } from '../navigation/Navigation';
import { CharacterDetail } from '../components';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
  const { name, description, thumbnail, id } = route.params;

  const uri = `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <View style={styles.marginContainer}>
        <View>
          <CharacterDetail character={route.params} />
        </View>
      </View>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={40} color="white" />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
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
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 50,
    height: 50,
  },
});
