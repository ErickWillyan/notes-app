import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { AuthContext } from "../../contexts/auth";
import Toast from "react-native-toast-message";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn } = useContext(AuthContext);

  async function handleSignIn() {
    if (email === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos",
        visibilityTime: 3000,
      });
      return;
    }

    await singIn({ email, password });
  }

  const handleSingUp = () => {
    navigation.navigate("singUp");
  };
  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require("../../assets/img/notesApp-logo.png")}
        resizeMode="contain"
      />

      <View style={styles.forms}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => {
            const lowEmail = text.toLowerCase();
            setEmail(lowEmail);
          }}
          placeholderTextColor="#423939"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#423939"
        />

        <View style={styles.cardButton}>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
          <Text onPress={handleSingUp} style={styles.linkText}>
            Cadastre-se
          </Text>
        </View>
      </View>
      <Toast />
    </View>
  );
}
