import React from "react";

import { Router } from "expo-router";
import { StyleSheet, TouchableHighlight, View } from "react-native";

import { useBiometricAuth } from "@/hooks/useBiometricAuth";
import { TransactionItemProps } from "@/utils/types";

import { colors, radius, spacingX, spacingY } from "../constants/theme";
import CategoryIcon from "./category-icon";
import TypedText from "./typed-text";

const TransactionItem: React.FC<{
  data: TransactionItemProps;
  router: Router;
  showAmount?: boolean;
}> = ({ data, router, showAmount }) => {
  const { authenticate } = useBiometricAuth();
  const { id, category, description, date, amount, type } = data;
  const amountColor =
    showAmount && type === "paid" ? colors.error : colors.mediumGray;
  return (
    <TouchableHighlight
      onPress={() =>
        authenticate(() =>
          router.push({
            pathname: "/transactions/[id]",
            params: { id },
          }),
        )
      }
      underlayColor={colors.neutral100}
    >
      <View style={styles.container}>
        {/* Placeholder for category icon */}
        <CategoryIcon style={styles.iconPlaceholder} category={category} />

        <View style={styles.detailsContainer}>
          <TypedText style={styles.descriptionText}>{description}</TypedText>
          <TypedText style={styles.timeText}>{date}</TypedText>
        </View>

        {amount && (
          <TypedText size={12} color={amountColor} fontWeight={500}>
            {showAmount
              ? `${type === "paid" ? "-" : ""}RM ${amount.toFixed(2)}`
              : "RM **.**"}
          </TypedText>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacingY._15,
    paddingHorizontal: spacingX._12,
  },
  iconPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: radius._30,
    backgroundColor: colors.lightPurple,
    marginRight: spacingX._12,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginRight: spacingX._5,
  },
  descriptionText: {
    color: colors.neutral900,
    fontWeight: "500",
    letterSpacing: 0.2,
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    color: colors.lightGray,
  },
  amountText: {
    fontWeight: "bold",
  },
});

export default TransactionItem;
