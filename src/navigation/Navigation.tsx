import { createStackNavigator } from '@react-navigation/stack';
import {
  ComicsScreen,
  DetailScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ComicsScreen" component={ComicsScreen} />
    </Stack.Navigator>
  );
};
