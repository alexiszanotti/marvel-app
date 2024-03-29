import { createStackNavigator } from '@react-navigation/stack';
import {
  ComicsScreen,
  DetailScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';
import { Character } from '../interfaces/characterInterface';
import { useColorsTheme } from '../hooks/useColorsTheme';

export type RootStackParams = {
  Home: undefined;
  Detail: Character;
  Profile: undefined;
  Comics: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const { colors } = useColorsTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.backgroundColor,
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Comics" component={ComicsScreen} />
    </Stack.Navigator>
  );
};
