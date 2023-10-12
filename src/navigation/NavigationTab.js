import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import SettingsScrees from "../components/SettingsScrees";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScrees} />
    </Tab.Navigator>
  );
}
