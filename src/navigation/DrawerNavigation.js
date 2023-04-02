import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackNavigation } from './StackNavigation';
import { CustomSidebarMenu } from '../components/CustomSidebarMenu/index';
import { PlanetStackNavigation } from './StackNavigation';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      initialRouteName="Solar System">
      <Drawer.Screen
        name="Solar System"
        component={HomeStackNavigation}
      />
      <Drawer.Screen
        name="Planet"
        component={PlanetStackNavigation}
      />
    </Drawer.Navigator>
  );
}
