import { LinearGradientProps } from "expo-linear-gradient";
import { IconProps } from "phosphor-react-native";
import { TextProps, TextStyle, ViewStyle } from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};

export type TypedTextProps = {
  size?: number;
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  children: any | null;
  style?: TextStyle;
  textProps?: TextProps;
};

export type BankCardType = "credit" | "debit";
export type BankCardBrand = "visa" | "mastercard";
export type BankCardProps = {
  lastFourNumber: string;
  expiryDate: string;
  type: BankCardType;
  cardBrand: BankCardBrand;
  backgroundColor?: LinearGradientProps["colors"];
};

export type BalanceInfoProps = {
  balance: number;
};

export type TransactionCatogory = "general" | "food" | "transport" | "shopping";
export type TransactionType = "received" | "paid";
export type TransactionItemProps = {
  category: TransactionCatogory;
  description: string;
  date: Date | string;
  amount: number;
  type: TransactionType;
  card?: BankCardProps;
};

export type CategoryIconProps = {
  category: TransactionCatogory;
  style?: ViewStyle;
  size?: IconProps["size"];
  weight?: IconProps["weight"];
  color?: string;
};
