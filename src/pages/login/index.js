import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { singIn } = useContext(AuthContext);

  async function handleSignIn() {
    if (email === "" || password === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
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
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#423939"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Senha"
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
    </View>
  );
}
