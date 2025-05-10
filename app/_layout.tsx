import React from "react";

import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(protected)" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
