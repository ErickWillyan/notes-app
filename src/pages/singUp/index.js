import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import styles from "./style";
import { CreateUserService } from "../../services/users/createUser";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const singUp = async () => {
    if (email === "" || password === "" || name === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };

    await CreateUserService(data);
    navigation.navigate("Login");
  };
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft style={styles.backButton} size={32} />
      </TouchableOpacity>
      <View style={styles.forms}>
        <Text style={styles.textTitle}>Crie sua conta</Text>
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
          <TouchableOpacity onPress={singUp} style={styles.button}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
