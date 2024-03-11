import React, { useContext } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { Feather } from "@expo/vector-icons";
import { TaskContext } from "../../contexts/taskContext";

export default function navbar() {
  const { user, singOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    await singOut();
  };
  return (
    <View style={styles.view}>
      <Text style={styles.nameText}>{user.name}</Text>
      <Feather onPress={handleLogOut} name="menu" size={40} color="#85a7ca" />
    </View>
  );
}
