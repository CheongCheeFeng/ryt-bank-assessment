import React from "react";

import { Text, TextStyle } from "react-native";

import { colors } from "@/constants/theme";
import { TypedTextProps } from "@/utils/types";

const TypedText = ({
  size,
  color = colors.mediumGray,
  fontWeight = "400",
  children,
  style,
  textProps,
}: TypedTextProps) => {
  const textStyle: TextStyle = {
    fontSize: size,
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
