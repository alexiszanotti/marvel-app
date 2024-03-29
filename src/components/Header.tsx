import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LogoMarvel } from './LogoMarvel';
import { useColorsTheme } from '../hooks/useColorsTheme';

export const Header = () => {
  const { colors } = useColorsTheme();
  return (
    <View style={[colors, styles.headerContainer]}>
      <View>
        <Pressable onPress={() => {}}>
          <Feather name="menu" size={30} color={colors.color} />
        </Pressable>
      </View>
      <LogoMarvel />
      <View>
        <Pressable onPress={() => {}}>
          <FontAwesome name="search" size={30} color={colors.color} />
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
    flexDirection: 'row',
  },
});
