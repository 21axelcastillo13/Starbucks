import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicio from '../inicio';
import Details from '../details';
import Login from '../login';
import { useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Ini' component={Inicio} />
      <Drawer.Screen name='Details' component={Details}/>
    </Drawer.Navigator>
  );
}