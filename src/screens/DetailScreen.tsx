import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParams } from '../navigation/Navigation';
import { CharacterComics } from '../components/CharacterComics';
import { CharacterDetail } from '../components';
import { globalStyles } from '../theme/theme';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
  const Tab = createBottomTabNavigator();

  const { colors } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: colors.subTitle,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tab.Screen
        name="Detail"
        children={() => <CharacterDetail character={route.params} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Comics"
        component={CharacterComics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
