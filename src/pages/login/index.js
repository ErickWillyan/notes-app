import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function ScreenLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    if (email === "" || password === "") {
      console.log("PREENCHA TODOS OS CAMPOS");
      return;
    }

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    console.log(email);
    console.log(password);
  }

  return (
    <View>
      <TextInput
        style={{ height: 20, width: 100, marginBottom: 10 }}
        placeholder="Insira seu email"
      />
      <TextInput
        style={{ height: 20, width: 100 }}
        placeholder="Insira sua senha"
      />

      <View>
        <TouchableOpacity onPress={handleSignIn}>Entrar</TouchableOpacity>
      </View>

      <View>
        <Text>Não possui uma conta?</Text>
        <Text>Clique aqui</Text>
      </View>
    </View>
  );
}
