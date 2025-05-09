import React from "react";

import { useRouter } from "expo-router";
import { Gear, User } from "phosphor-react-native";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import BalanceInfo from "@/components/account-balance";
import BankCard from "@/components/bank-card";
import ScreenWrapper from "@/components/screen-wrapper";
import TransactionItem from "@/components/transaction-item";
import TypedText from "@/components/typed-text";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileImage}>
            <User size={30} weight="fill" color={colors.neutral500} />
          </View>
          <View>
            <TypedText size={14} color={colors.text}>
              Hello,
            </TypedText>
            <TypedText size={16} fontWeight={500} color={colors.text}>
              Alex Wong
            </TypedText>
          </View>
          <View style={styles.setting}>
            <Gear size={30} color={colors.neutral900} />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: verticalScale(80),
          }}
          showsVerticalScrollIndicator={false}
        >
          <BalanceInfo balance={1000} />
          {/* Bank Card */}
          <BankCard
            lastFourNumber="3456"
            expiryDate="12/25"
            type="debit"
            cardBrand="visa"
          />

          <View style={styles.transactionTitle}>
            <TypedText size={18} fontWeight={500} color={colors.text}>
              Recent Transactions
            </TypedText>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Pressable onPress={() => router.navigate("/transactions-history")}>
              <TypedText
                size={14}
                color={colors.darkGray}
                fontWeight={500}
                style={styles.transactionViewAll}
              >
                View all
              </TypedText>
            </Pressable>
          </View>
          {/* Transaction Items */}
          <TransactionItem
            data={{
              category: "shopping",
              description: "Walmart",
              date: "2025-05-08T10:00:00Z",
              amount: 50.0,
              type: "paid",
            }}
            callback={() =>
              router.push({
                pathname: "/transactions/[id]",
                params: { id: "1" },
              })
            }
          />
          <TransactionItem
            data={{
              category: "food",
              description: "Walmart",
              date: "2025-05-08T10:00:00Z",
              amount: 50.0,
              type: "received",
            }}
          />
          <TransactionItem
            data={{
              category: "transport",
              description: "Walmart",
              date: "2025-05-08T10:00:00Z",
              amount: 50.0,
              type: "paid",
            }}
          />
          <TransactionItem
            data={{
              category: "general",
              description: "Walmart",
              date: "2025-05-08T10:00:00Z",
              amount: 50.0,
              type: "paid",
            }}
          />
          <TransactionItem
            data={{
              category: "general",
              description: "Walmart",
              date: "2025-05-08T10:00:00Z",
              amount: 50.0,
              type: "received",
            }}
          />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacingY._12,
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
  transactionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacingY._20,
    marginBottom: spacingY._10,
    marginHorizontal: spacingX._12,
  },
  transactionViewAll: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});
