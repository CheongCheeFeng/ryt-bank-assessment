import { scale, verticalScale } from "@/utils/styling";

export const colors = {
  primary: "#6772E5",
  secondary: "#8892A2",
  text: "#30313D",
  textLight: "#6B7385",
  textLighter: "#8892A2",
  white: "#FFFFFF",
  black: "#000000",
  disabled: "#C1C9D0",
  success: "#24B47E",
  warning: "#E39F48",
  error: "#E25950",
  neutral50: "#FAFAFA",
  neutral100: "#F0F0F0",
  neutral200: "#E5E5E5",
  neutral300: "#D9D9D9",
  neutral400: "#CCCCCC",
  neutral500: "#BFBFBF",
  neutral600: "#A6A6A6",
  neutral700: "#8C8C8C",
  neutral800: "#737373",
  neutral900: "#595959",
};

export const spacingX = {
  _3: scale(3),
  _5: scale(5),
  _7: scale(7),
  _10: scale(10),
  _12: scale(12),
  _15: scale(15),
  _20: scale(20),
  _25: scale(25),
  _30: scale(30),
  _35: scale(35),
  _40: scale(40),
};

export const spacingY = {
  _3: verticalScale(3),
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
};

export const radius = {
  _3: verticalScale(3),
  _6: verticalScale(6),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _30: verticalScale(30),
};
