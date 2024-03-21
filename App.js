import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";
import TaskProvider from "./src/contexts/taskContext";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <TaskProvider>
            <StatusBar
              backgroundColor="#fff"
              barStyle="light-content"
              translucent={false}
            />
            <Routes />
          </TaskProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
