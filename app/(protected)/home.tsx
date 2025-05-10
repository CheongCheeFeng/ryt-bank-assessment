import React, { useEffect, useState } from "react";

import { useRouter } from "expo-router";
import { Gear, User } from "phosphor-react-native";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import BalanceInfo from "@/components/account-balance";
import BankCard from "@/components/bank-card";
import ScreenWrapper from "@/components/screen-wrapper";
import TransactionItem from "@/components/transaction-item";
import TypedText from "@/components/typed-text";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { TransactionService } from "@/services/transaction.service";
import { verticalScale } from "@/utils/styling";
import { Transaction } from "@/utils/types";

const HomeScreen = () => {
  const router = useRouter();

  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    [],
  );

  const fetchRecentTransactions = () => {
    const transactions = TransactionService.getTransactionList();
    const recentTransactions = transactions.slice(0, 5);
    setRecentTransactions(recentTransactions);
  };
  useEffect(() => {
    fetchRecentTransactions();
  }, []);

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
            lastFourDigits="3456"
            expiryDate="12/25"
            type="debit"
            cardBrand="visa"
          />

          <View>
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
              <Pressable
                onPress={() => router.navigate("/transactions-history")}
              >
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
            {recentTransactions.map((item, index) => (
              <View key={item.id}>
                <TransactionItem
                  data={{
                    category: item.category,
                    description: item.name,
                    date: item.createdAt,
                    amount: item.amount,
                    type: item.type,
                  }}
                  callback={() =>
                    router.push({
                      pathname: "/transactions/[id]",
                      params: { id: item.id },
                    })
                  }
                />
                {index !== recentTransactions.length - 1 && (
                  <View style={styles.line} />
                )}
              </View>
            ))}
          </View>
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
  line: {
    height: 1,
    backgroundColor: colors.neutral100, // You can change the color
  },
});
