import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Planet } from '../screens/Planet';
import { PlanetsContext } from '../context/planetsContext';
const Stack = createStackNavigator();

export function HomeStackNavigation({ }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: '#FFFAFA',
        }}
      />
    </Stack.Navigator>
  );
}

export function PlanetStackNavigation({ }) {
  const [planet] = useContext(PlanetsContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="planet"
        component={Planet}
        options={{
          title: planet.name,
          headerTransparent: true,
          headerTintColor: '#FFFAFA',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
