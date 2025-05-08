import React from "react";

import { Gear, User } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";

import BalanceInfo from "@/components/account-balance";
import BankCard from "@/components/bank-card";
import ScreenWrapper from "@/components/screen-wrapper";
import TypedText from "@/components/typed-text";
import { colors, spacingX, spacingY } from "@/constants/theme";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileImage}>
            <User size={30} weight="fill" color={colors.neutral500} />
          </View>
          <View>
            <TypedText size={12} color={colors.text}>
              Hello,
            </TypedText>
            <TypedText size={14} fontWeight={500} color={colors.text}>
              Alex Wong
            </TypedText>
          </View>
          <View style={styles.setting}>
            <Gear size={30} color={colors.neutral900} />
          </View>
        </View>
        <BalanceInfo balance={1000} />
        {/* Bank Card */}
        <BankCard
          lastFourNumber="3456"
          expiryDate="12/25"
          type="debit"
          cardBrand="visa"
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: spacingY._12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    marginLeft: spacingX._12,
    marginRight: spacingX._10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral100,
  },
  setting: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: spacingX._12,
  },
});
