import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar({ firstName, lastName }) {
  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}

Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
