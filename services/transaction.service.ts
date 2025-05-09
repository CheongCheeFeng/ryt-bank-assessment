import transactionData from "@/mock-data/transactions.json";
import { GroupedTransactions, Transaction } from "@/utils/types";

export const TransactionService = {
  getTransactionList() {
    return transactionData as Transaction[];
  },
  getTransactionById(id: string) {
    return transactionData.find(
      (transaction) => transaction.id === id,
    ) as Transaction;
  },
  getTransactionGroupByDate() {
    const transactions = transactionData as Transaction[];
    const groupedTransactions: GroupedTransactions[] = [];

    transactions.forEach((transaction) => {
      const date = new Date(transaction.createdAt);
      const today = new Date();
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);

      const day =
        date.toDateString() === today.toDateString()
          ? "Today"
          : date.toDateString() === yesterday.toDateString()
            ? "Yesterday"
            : date.toLocaleDateString("en-MY", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });

      const existingGroup = groupedTransactions.find(
        (group) => group.day === day,
      );

      if (existingGroup) {
        existingGroup.data.push(transaction);
      } else {
        groupedTransactions.push({
          day,
          data: [transaction],
        });
      }
    });

    return groupedTransactions;
  },
};
