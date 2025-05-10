import React from "react";

import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

import AppStateHandler from "@/utils/app-state-handler";
import { AuthProvider } from "@/utils/authContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <AppStateHandler />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(protected)" />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
