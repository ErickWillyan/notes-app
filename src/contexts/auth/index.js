import React, { useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../../libs/axios";

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
    // async function getUser() {
    //   const userInfo = await AsyncStorage.getItem("@novusstatera");
    //   let hasUser = JSON.parse(userInfo || "{}");
    //   if (Object.keys(hasUser).length > 0) {
    //     api.defaults.headers.common[
    //       "Authorization"
    //     ] = `Bearer ${hasUser.token}`;
    //     setUser({
    //       id: hasUser.id,
    //       name: hasUser.name,
    //       email: hasUser.email,
    //       token: hasUser.token,
    //     });
    //   }
    // }
    // console.log(user);
    // getUser();
  }, []);

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/AuthUser", { email, password });

      const { id, name, token } = response.data;

      const data = {
        ...response.data,
      };

      await AsyncStorage.setItem("@notes-api", JSON.stringify(data));

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
        token,
      });
    } catch (error) {
      console.log("erro ao acessar", err);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
