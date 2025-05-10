import React from "react";

import { Redirect, Stack } from "expo-router";

const isLoggedIn = true;
const ProtectedLayout = () => {
  if (!isLoggedIn) return <Redirect href="/login" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="transaction" />
      <Stack.Screen name="transaction-history" />
    </Stack>
  );
};

export default ProtectedLayout;
