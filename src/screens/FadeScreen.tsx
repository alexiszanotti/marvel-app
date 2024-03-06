import { Animated, StyleSheet, View } from 'react-native';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {
  const { fadeIn, fadeOut, opacity } = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={{
          backgroundColor: 'blue',
          width: 150,
          height: 150,
          opacity,
        }}
      />
    </View>
  );
};

export default FadeScreen;

const styles = StyleSheet.create({});
