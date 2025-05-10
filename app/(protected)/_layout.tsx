import React from "react";

import { Redirect, Stack } from "expo-router";

import { useAuth } from "@/utils/authContext";

const ProtectedLayout = () => {
  const { isLoggedIn, isFinishLoading } = useAuth();

  if (!isFinishLoading) return null;
  if (!isLoggedIn) return <Redirect href="/login" />;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="transactions/[id]" />
      <Stack.Screen name="transactions-history" />
    </Stack>
  );
};

export default ProtectedLayout;
