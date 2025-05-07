import React from "react";

import { StyleSheet } from "react-native";

import ScreenWrapper from "@/components/screen-wrapper";
import TypedText from "@/components/typed-text";
import { colors } from "@/constants/theme";

const Main = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <TypedText fontWeight="600">Welcome</TypedText>
    </ScreenWrapper>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});
