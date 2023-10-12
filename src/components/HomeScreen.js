import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button title="Settings" onPress={goToSettings}></Button>
    </View>
  );
};

export default HomeScreen;
