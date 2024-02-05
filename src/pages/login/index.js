import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import {
  useFonts,
  Almarai_700Bold,
  Almarai_400Regular,
} from "@expo-google-fonts/almarai";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded, fontError] = useFonts({
    Almarai_700Bold,
    Almarai_400Regular,
  });

  async function handleSignIn() {
    if (email === "" || password === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
      return;
    }
  }

  if (!fontsLoaded && !fontError) {
    return null;
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
          <TouchableOpacity style={styles.button}>
            <Text
              style={[styles.textButton, { fontFamily: "Almarai_700Bold" }]}
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <Text
            onPress={handleSingUp}
            style={[styles.linkText, { fontFamily: "Almarai_400Regular" }]}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
    </View>
  );
}
