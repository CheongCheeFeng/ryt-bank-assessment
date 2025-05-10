import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { useAuth } from "@/authContext";
import { Button } from "@/components/button";
import { useBiometricAuth } from "@/hooks/useBiometricAuth";

const Login = () => {
  const { logIn } = useAuth();
  const { authenticate } = useBiometricAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Button
        title="Login"
        onPress={() => {
          authenticate(logIn);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});

export default Login;
