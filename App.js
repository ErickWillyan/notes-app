import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/pages/SplashScreen";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="rgba(45, 48, 51, 0.6)"
        barStyle="light-content"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  );
}
