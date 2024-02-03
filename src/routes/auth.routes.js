import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login";
import singUp from "../pages/singUp";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="singUp"
        component={singUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
