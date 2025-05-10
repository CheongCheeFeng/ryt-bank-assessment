import React, { useEffect, useState } from "react";

import { useLocalSearchParams } from "expo-router";
import { ArrowCircleDownRight, ArrowCircleUpLeft } from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CategoryIcon from "@/components/category-icon";
import PaymentDetailsCard from "@/components/payment-details-card";
import TypedText from "@/components/typed-text";
import { colors, radius } from "@/constants/theme";
import { useUpdateHeaderOption } from "@/hooks/useUpdateHeaderOption";
import { TransactionService } from "@/services/transaction.service";
import { formatDate } from "@/utils/helper";
import { Transaction } from "@/utils/types";

export default function TransactionDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  useUpdateHeaderOption("Transaction Details");
  const [transactionDetails, setTransactionDetails] =
    useState<Transaction | null>(null);

  useEffect(() => {
    const transaction = TransactionService.getTransactionById(id);
    setTransactionDetails(transaction);
  }, [transactionDetails, id]);

  if (!transactionDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Loading...</Text>
      </View>
    );
  }

  const {
    amount,
    createdAt,
    type: transactionType,
    name,
    status,
    category,
    bankCardTransaction: card,
  } = transactionDetails;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TypedText size={32} color={colors.darkGray} style={styles.type}>
          {transactionType}
        </TypedText>
        {transactionType === "paid" ? (
          <ArrowCircleUpLeft size={90} weight="thin" color={colors.error} />
        ) : (
          <ArrowCircleDownRight
            size={90}
            weight="thin"
            color={colors.success}
          />
        )}
        <Text style={styles.amount}>RM {amount}</Text>
        <View style={styles.tag}>
          <CategoryIcon
            category={category}
            size={18}
            weight="fill"
            color={colors.white}
          />
          <Text style={styles.tagText}>{category ? category : "Others"}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Transaction Details</Text>

        <View style={styles.detailRow}>
          <Text style={styles.label}>
            {transactionType === "paid" ? "Paid to" : "Receive from"}
          </Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date/ Time</Text>
          <Text style={styles.value}>{formatDate(createdAt)}</Text>
        </View>

        {status && (
          <View style={styles.detailRow}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>{status.toLocaleUpperCase()}</Text>
          </View>
        )}

        {card && (
          <View style={styles.detailRow}>
            <Text style={styles.label}>Card Type</Text>
            <Text style={styles.value}>{card.type.toLocaleUpperCase()}</Text>
          </View>
        )}
      </View>

      {card && (
        <PaymentDetailsCard
          lastFourDigits={card.lastFourDigits}
          cardSchema={card.cardSchema}
          style={{ marginTop: 20 }}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  type: {
    textTransform: "capitalize",
    fontFamily: "Inter-Medium",
  },
  amount: {
    fontSize: 32,
    color: colors.text,
    marginVertical: 5,
    fontFamily: "Inter-Medium",
  },
  tag: {
    backgroundColor: colors.lightPurple,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: radius._30,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  tagText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  card: {
    backgroundColor: "white",
    borderRadius: radius._6,
    padding: 15,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: colors.mediumGray,
    marginBottom: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    color: colors.textLight,
    fontSize: 14,
  },
  value: {
    color: colors.text,
    fontSize: 14,
  },
});
