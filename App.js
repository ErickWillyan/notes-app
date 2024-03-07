import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor="rgba(45, 48, 51, 0.6)"
          barStyle="light-content"
          translucent={false}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
