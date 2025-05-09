import React from "react";

import { StyleSheet, View } from "react-native";

import TypedText from "@/components/typed-text";
import { BalanceInfoProps } from "@/utils/types";

import { colors, spacingX, spacingY } from "../constants/theme";

const BalanceInfo: React.FC<BalanceInfoProps> = ({ balance }) => {
  return (
    <View style={styles.container}>
      <TypedText size={20} fontWeight={400} style={styles.balanceAmount}>
        Total Balance
      </TypedText>
      <TypedText size={40} fontWeight={600} style={styles.balanceAmount}>
        RM{balance.toFixed(2)}
      </TypedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: spacingY._20,
    marginHorizontal: spacingX._12,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceText: {
    color: colors.mediumGray,
    fontFamily: "Inter-Regular",
  },
  balanceAmount: {
    fontFamily: "Inter-Regular",
    color: colors.mediumGray,
  },
});

export default BalanceInfo;
