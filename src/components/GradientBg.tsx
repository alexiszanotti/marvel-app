import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
  colors?: string[];
  styles?: StyleProp<ViewStyle>;
}

export const GradientBg = ({ children, colors, styles }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={colors || ['transparent']}
        style={[styles, { ...StyleSheet.absoluteFillObject }]}
        start={{ x: 0.5, y: 0.8 }}
        end={{ x: 0.5, y: 0.9 }}
      />

      {children}
    </View>
  );
};
