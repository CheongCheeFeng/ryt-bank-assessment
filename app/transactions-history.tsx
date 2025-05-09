import React, { useEffect } from "react";

import { useNavigation } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const TransactionHistory = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Transaction History",
    });
  }, [navigation]);
  return (
    <View>
      <Text>TransactionHistory</Text>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
