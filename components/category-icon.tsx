import React, { JSX } from "react";

import {
  Car,
  IconProps,
  Pizza,
  Receipt,
  ShoppingBag,
} from "phosphor-react-native";
import { View } from "react-native";

import { CategoryIconProps, TransactionCatogory } from "@/utils/types";

import { colors } from "../constants/theme";

const categoryIcons: Record<
  TransactionCatogory,
  ({ ...props }: IconProps) => JSX.Element
> = {
  general: Receipt,
  food: Pizza,
  transport: Car,
  shopping: ShoppingBag,
};

const CategoryIcon = ({
  category,
  style,
  size = 24,
  weight = "light",
  color = colors.white,
}: CategoryIconProps) => {
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || Receipt;
  return (
    <View style={style}>
      <Icon size={size} weight={weight} color={color} />
    </View>
  );
};

export default CategoryIcon;
