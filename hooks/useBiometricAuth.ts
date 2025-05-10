import { useCallback } from "react";

import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

export const useBiometricAuth = () => {
  const authenticate = useCallback(async (onSuccess: () => void) => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        Alert.alert(
          "Biometric Authentication",
          "Biometric authentication is not supported on this device.",
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to Login",
        fallbackLabel: "Use Passcode",
      });

      if (result.success) {
        onSuccess();
      } else {
        console.log(result);
        Alert.alert(
          "Authentication Failed",
          "Unable to authenticate. Please try again.",
        );
      }
    } catch {
      Alert.alert("Error", "An error occurred during authentication.");
    }
  }, []);

  return { authenticate };
};
