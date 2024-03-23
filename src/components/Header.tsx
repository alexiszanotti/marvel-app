import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LogoMarvel } from './LogoMarvel';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Pressable onPress={() => {}}>
          <Feather name="menu" size={30} color="white" />
        </Pressable>
      </View>
      <LogoMarvel />
      <View>
        <Pressable onPress={() => {}}>
          <FontAwesome name="search" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    flexDirection: 'row',
  },
});
