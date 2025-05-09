import React, { useEffect } from "react";

import { useLocalSearchParams, useNavigation } from "expo-router";
import { ArrowCircleUpLeft } from "phosphor-react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import CategoryIcon from "@/components/category-icon";
import TypedText from "@/components/typed-text";
import { colors, radius } from "@/constants/theme";

export default function TransactionDetailsScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Transaction #${id}`,
    });
  }, [navigation, id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TypedText size={32}>Paid</TypedText>
        <ArrowCircleUpLeft size={90} weight="thin" color={colors.error} />
        <Text style={styles.amount}>RM 9.70</Text>
        <View style={styles.tag}>
          <CategoryIcon
            category="general"
            size={18}
            weight="fill"
            color={colors.white}
          />
          <Text style={styles.tagText}>General</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Transaction Details</Text>
        {[
          ["Pay to", "ABC Sdn Bhd"],
          ["Transaction date", "19 March 2025 at 03:31"],
          ["Transaction ID", "#3201785561"],
          ["Status", "Completed"],
        ].map(([label, value], index) => (
          <View key={index} style={styles.detailRow}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={{ ...styles.card, marginTop: 20 }}>
        <Text style={styles.cardTitle}>Payment details</Text>
        <View style={styles.paymentDetailsRow}>
          <Image
            source={require("../../assets/images/visa-card.png")}
            style={styles.paymentImage}
            resizeMode="contain"
          />
          <TypedText style={styles.paymentDetails}>{`• • • •  3125`}</TypedText>
        </View>
      </View>
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
  paymentDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentImage: {
    width: 48,
    height: 30,
    marginRight: 10,
  },
  paymentDetails: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "800",
    fontFamily: "Inter-Medium",
  },
});
