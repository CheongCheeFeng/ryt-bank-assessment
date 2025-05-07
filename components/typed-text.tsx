import React from "react";

import { StyleSheet, Text, TextStyle } from "react-native";

import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { TypedTextProps } from "@/utils/types";

const TypedText = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps,
}: TypedTextProps) => {
  const textStyle: TextStyle = {
    fontSize: size ? verticalScale(size) : verticalScale(18),
    color,
    fontWeight,
    ...style,
  };
  return (
    <Text style={textStyle} {...textProps}>
      {children}
    </Text>
  );
};

export default TypedText;

const styles = StyleSheet.create({});
