import React, { useContext } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { Entypo } from "@expo/vector-icons";

export default function navbar() {
  const { user, singOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    await singOut();
  };
  return (
    <View style={styles.view}>
      <Text style={styles.nameText}>{user.name}</Text>
      <Entypo onPress={handleLogOut} name="log-out" size={30} color="#85a7ca" />
    </View>
  );
}
