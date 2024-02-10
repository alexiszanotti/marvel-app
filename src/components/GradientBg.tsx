import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBg = ({ children }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['red', 'yellow', 'blue']}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
      />

      {children}
    </View>
  );
};

export default GradientBg;
