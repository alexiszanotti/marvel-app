import { createStackNavigator } from '@react-navigation/stack';
import {
  ComicsScreen,
  DetailScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';
import { Character } from '../interfaces/characterInterface';
import { globalStyles } from '../theme/theme';

export type RootStackParams = {
  Home: undefined;
  Detail: Character;
  Profile: undefined;
  Comics: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
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
