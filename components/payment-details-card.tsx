import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { colors, radius } from "@/constants/theme";
import { PaymentDetailsCardProps } from "@/utils/types";

import TypedText from "./typed-text";

const PaymentDetailsCard: React.FC<PaymentDetailsCardProps> = ({
  lastFourDigits,
  cardSchema,
  style,
}) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      <Text style={styles.cardTitle}>Payment details</Text>
      <View style={styles.paymentDetailsRow}>
        {cardSchema === "mastercard" ? (
          <Image
            source={require("../assets/images/mastercard.png")}
            style={styles.paymentImage}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/images/visa.png")}
            style={styles.paymentImage}
            resizeMode="contain"
          />
        )}
        <TypedText
          style={styles.paymentDetails}
        >{`• • • •  ${lastFourDigits}`}</TypedText>
      </View>
    </View>
  );
};

export default PaymentDetailsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius._6,
    padding: 15,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    shadowColor: colors.black,
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
