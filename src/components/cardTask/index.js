import { View, Text } from "react-native";
import styles from "./styles";

export default function cardTask({ data }) {
  return (
    <View style={styles.cardTask}>
      <View style={styles.titleView}>
        <Text style={styles.titleCard}>{data.name}</Text>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>{data.description}</Text>
      </View>
    </View>
  );
}
