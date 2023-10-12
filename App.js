//import { StatusBar } from "expo-status-bar";
//import LoginForm from "./src/components/LoginForm.js";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
//import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}
