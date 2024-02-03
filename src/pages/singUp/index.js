import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import styles from "./style";
import {
  useFonts,
  Almarai_700Bold,
  Almarai_400Regular,
} from "@expo-google-fonts/almarai";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fontsLoaded, fontError] = useFonts({
    Almarai_700Bold,
    Almarai_400Regular,
  });

  async function handleSignIn() {
    if (email === "" || password === "" || name === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
      return;
    }
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const exibir = () => {
    console.log(name);
    console.log(email);
    console.log(password);
  };
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft style={styles.backButton} size={32} />
      </TouchableOpacity>
      <View style={styles.forms}>
        <Text style={[styles.textTitle, { fontFamily: "Almarai_700Bold" }]}>
          Crie sua conta
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
          placeholder="Nome"
          placeholderTextColor="#423939"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          placeholderTextColor="#423939"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
          placeholderTextColor="#423939"
        />

        <View style={styles.cardButton}>
          <TouchableOpacity onPress={exibir} style={styles.button}>
            <Text
              style={[styles.textButton, { fontFamily: "Almarai_700Bold" }]}
            >
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
