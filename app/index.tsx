import React from "react";

import { StyleSheet } from "react-native";

import { colors } from "@/constants/theme";

import HomeScreen from "./home";

const Main = () => {
  return <HomeScreen />;
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
