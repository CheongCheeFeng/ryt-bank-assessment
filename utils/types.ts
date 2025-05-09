import { LinearGradientProps } from "expo-linear-gradient";
import { IconProps } from "phosphor-react-native";
import { TextProps, TextStyle, ViewStyle } from "react-native";

type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

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
export type BankCardSchema = "visa" | "mastercard";
export type BankCardProps = {
  lastFourDigits: string;
  expiryDate: string;
  type: BankCardType;
  cardBrand: BankCardSchema;
  backgroundColor?: LinearGradientProps["colors"];
};

export type BalanceInfoProps = {
  balance: number;
};

export type TransactionCatogory =
  | "general"
  | "food"
  | "transport"
  | "shopping"
  | string;
export type TransactionType = "received" | "paid";
export type TransactionItemProps = {
  id: string;
  category?: TransactionCatogory;
  description: string;
  date: Date | string;
  amount?: number;
  type: TransactionType;
};

export type CategoryIconProps = {
  category?: TransactionCatogory;
  style?: ViewStyle;
  size?: IconProps["size"];
  weight?: IconProps["weight"];
  color?: string;
};

export type TransactionStatus = "success" | "pending";

export type BankCardTransaction = {
  cardSchema: BankCardSchema;
  lastFourDigits: string;
  type: BankCardType;
};

export type Transaction = {
  amount: number;
  createdAt: string;
  id: string;
  type: TransactionType;
  name: string;
  status?: TransactionStatus;
  category?: TransactionCatogory;
  bankCardTransaction?: BankCardTransaction;
};

export type GroupedTransactions = {
  day: string;
  data: Transaction[];
};

export type PaymentDetailsCardProps = StrictOmit<
  BankCardTransaction,
  "type"
> & {
  style?: ViewStyle;
};
