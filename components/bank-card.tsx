import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import TypedText from "@//components/typed-text";
import { scale, verticalScale } from "@/utils/styling";
import { BankCardProps } from "@/utils/types";

import { colors, radius, spacingX, spacingY } from "../constants/theme";

const { width } = Dimensions.get("window");

const BankCard: React.FC<BankCardProps> = ({
  lastFourDigits,
  expiryDate,
  cardBrand: paymentProvider,
  backgroundColor,
}) => {
  const formattedCardNumber = `************${lastFourDigits}`
    .match(/.{1,4}/g)
    ?.join(" ");

  return (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={
          backgroundColor ? backgroundColor : [colors.primary, colors.secondary]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <TypedText style={styles.cardNumber} fontWeight={300}>
            {formattedCardNumber}
          </TypedText>
          <View style={styles.bottomContainer}>
            <TypedText style={styles.expiryDate} fontWeight={300}>
              {expiryDate}
            </TypedText>

            {paymentProvider === "visa" ? (
              <Image
                source={require("../assets/images/visa.png")}
                style={{
                  width: scale(70),
                  height: "auto",
                  aspectRatio: 1024 / 314,
                }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../assets/images/mastercard.png")}
                style={{
                  width: scale(70),
                  height: "auto",
                  aspectRatio: 1024 / 599,
                }}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.9,
    height: width * 0.9 * 0.6, // Aspect ratio of a credit card (approx 1.6)
    borderRadius: radius._12,
    overflow: "hidden",
    marginVertical: spacingY._20,
    marginHorizontal: spacingX._12,
    alignSelf: "center",
  },
  gradient: {
    flex: 1,
    padding: verticalScale(20),
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardNumber: {
    fontSize: 20,
    color: colors.white,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  expiryDate: {
    fontSize: 15,
    color: colors.white,
  },
});

export default BankCard;
