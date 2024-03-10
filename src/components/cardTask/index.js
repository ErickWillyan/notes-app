import react from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function cardTask({ data }) {
  return (
    <View style={styles.cardTask}>
      <View>
        <Text>{data.name}</Text>
      </View>
      <View>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
}
