import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/HomeScreen";
import SettingsScrees from "../components/SettingsScrees";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScrees} />
    </Drawer.Navigator>
  );
}
