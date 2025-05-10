import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

import { colors } from "@/constants/theme";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
} & PressableProps;

export const Button = ({ title, onPress, disabled, ...props }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabledButton,
        pressed && !disabled && styles.pressedButton,
      ]}
      {...props}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  pressedButton: {
    backgroundColor: colors.lightPurple,
  },
  disabledButton: {
    backgroundColor: "#d6d6d6",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledText: {
    color: "#A9A9A9",
  },
});
