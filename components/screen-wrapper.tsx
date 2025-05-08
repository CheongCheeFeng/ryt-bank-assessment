import React from "react";

import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/utils/types";

const { height } = Dimensions.get("window");
const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  const paddingTop =
    Platform.OS === "android" ? StatusBar.currentHeight : height * 0.06;
  return (
    <View style={{ paddingTop, ...styles.container, ...style }}>
      <StatusBar barStyle="dark-content" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
