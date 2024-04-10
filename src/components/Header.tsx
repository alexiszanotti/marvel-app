import { Pressable, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LogoMarvel } from './LogoMarvel';
import { SwitchTheme } from './SwitchTheme';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Header = () => {
  const { currentTheme, setTheme, colors } = useContext(ThemeContext);
  const [isEnable, setIsEnable] = useState(currentTheme === 'dark');

  const onChangeTheme = (value: boolean) => {
    setIsEnable(value);
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      <View>
        <Pressable onPress={() => {}}>
          <Feather name="menu" size={30} color={colors.iconColors} />
        </Pressable>
      </View>
      <LogoMarvel />
      <View>
        <SwitchTheme isEnable={isEnable} onChange={onChangeTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
