import React from "react";

import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/utils/types";

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={{ ...styles.container, ...style }}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
