import React, { useEffect, useState } from "react";

import { useRouter } from "expo-router";
import { Eye, EyeSlash } from "phosphor-react-native";
import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";

import TransactionItem from "@/components/transaction-item";
import { colors } from "@/constants/theme";
import { useBiometricAuth } from "@/hooks/useBiometricAuth";
import { useUpdateHeaderOption } from "@/hooks/useUpdateHeaderOption";
import { TransactionService } from "@/services/transaction.service";
import { GroupedTransactions } from "@/utils/types";

const TransactionHistoryScreen = () => {
  useUpdateHeaderOption("Transaction History");

  const router = useRouter();
  const { authenticate } = useBiometricAuth();

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

  const [showAmount, setShowAmount] = useState(false);
  const [hasAuthenticated, setHasAuthenticated] = useState(false);

  const handleShowAmount = () => {
    if (!hasAuthenticated) {
      setHasAuthenticated(true);
      authenticate(() => setShowAmount((prev) => !prev));
    } else {
      setShowAmount((prev) => !prev);
    }
  };
  return (
    <View style={styles.container}>
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
              showAmount={showAmount}
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
      {/* Reveal Button */}
      <Pressable style={styles.floatingButton} onPress={handleShowAmount}>
        <View>
          {showAmount ? (
            <Eye color={colors.white} />
          ) : (
            <EyeSlash color={colors.white} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
