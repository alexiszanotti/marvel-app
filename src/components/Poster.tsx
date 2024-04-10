import { useCallback, useContext } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import type { Character } from '../interfaces/characterInterface';
import type { Series } from '../interfaces/seriesInterface';
import { ThemeContext } from '../context/ThemeContext';
import { GradientBg } from './GradientBg';

interface Props {
  data: Character | Series;
  height?: number;
  width?: number;
}
export const Poster = ({ data, height = 310, width = 180 }: Props) => {
  const { navigate } = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Black': require('../../assets/font/Montserrat-Black.ttf'),
  });

  const uri = `${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Pressable onPress={() => navigate('Detail', data)}>
      <View style={{ height, width }}>
        <GradientBg
          styles={{ borderRadius: 18, zIndex: 2 }}
          colors={['transparent', 'black']}
        >
          <Image source={{ uri }} style={styles.image} />
        </GradientBg>
        <View style={{}}>
          <Text numberOfLines={1} style={[{ color: 'white' }, styles.name]}>
            {isCharacter(data) ? data.name : data.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const isCharacter = (data: Character | Series): data is Character => {
  return (data as Character).name !== undefined;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    shadowColor: '#000',
    alignItems: 'center',
    padding: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 15,
    fontFamily: 'Montserrat-Black',
    marginBottom: 'auto',
    marginTop: 'auto',
    opacity: 0.8,
    position: 'absolute',
    bottom: 8,
    left: 10,
  },
});
