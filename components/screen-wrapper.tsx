import React from "react";

import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { ScreenWrapperProps } from "@/utils/types";

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={{ flex: 1, ...style }}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
