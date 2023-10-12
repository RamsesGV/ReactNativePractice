import { View, Text, Button } from "react-native";

const SettingsScrees = ({ navigation }) => {
  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button title="Home" onPress={goToHomeScreen}></Button>
    </View>
  );
};

export default SettingsScrees;
