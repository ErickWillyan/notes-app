import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function Dashboard() {
  const { singOut } = useContext(AuthContext);
  return (
    <View>
      <Text>Tela dashboard</Text>
      <TouchableOpacity
        style={{ height: 50, width: 80, backgroundColor: "#23f" }}
        onPress={singOut}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
