import React, { useEffect, useState } from "react";

import { useRouter } from "expo-router";
import { SectionList, StyleSheet, Text, View } from "react-native";

import TransactionItem from "@/components/transaction-item";
import { useUpdateHeaderOption } from "@/hooks/useUpdateHeaderOption";
import { TransactionService } from "@/services/transaction.service";
import { GroupedTransactions } from "@/utils/types";

const TransactionHistoryScreen = () => {
  useUpdateHeaderOption("Transaction History");

  const router = useRouter();

  const [recentTransactions, setRecentTransactions] = useState<
    GroupedTransactions[]
  >([]);

  const fetchRecentTransactions = () => {
    const transactions = TransactionService.getTransactionGroupByDate();
    setRecentTransactions(transactions);
  };
  useEffect(() => {
    fetchRecentTransactions();
  }, []);

  return (
    <SectionList
      sections={recentTransactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ backgroundColor: "white" }}>
          <TransactionItem
            data={{
              id: item.id,
              category: item.category,
              description: item.name,
              date: item.createdAt,
              amount: item.amount,
              type: item.type,
            }}
            router={router}
          />
        </View>
      )}
      renderSectionHeader={({ section: { day } }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{day}</Text>
        </View>
      )}
      stickySectionHeadersEnabled={true}
    />
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
