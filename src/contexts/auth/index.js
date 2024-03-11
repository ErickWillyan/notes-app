import React, { useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signService } from "../../services/auth";
import { getUserService } from "../../services/users/getUser/";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    token: "",
  });

  const isAuthenticated = !!user.name;

  useEffect(() => {
    async function getUser() {
      const response = await getUserService();

      setUser({
        id: response.id,
        name: response.name,
        email: response.email,
        token: response.token,
      });
    }
    getUser();
  }, []);

  async function singIn({ email, password }) {
    const response = await signService({ email, password });

    const { id, name, token } = response.data;

    setUser({
      id,
      name,
      email,
      token,
    });
  }

  async function singOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: "",
        name: "",
        email: "",
        token: "",
      });
    });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
