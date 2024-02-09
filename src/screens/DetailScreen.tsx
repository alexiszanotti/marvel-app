import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({ route }: Props) => {
  const { name, description, thumbnail, id } = route.params;

  const uri = `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{description}</Text>
      </View>
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
  subTitle: {
    fontSize: 20,
    opacity: 0.8,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
