import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { Alert } from "react-native";

export default function AlertScreen() {
  const createTwoButtonAlert = () => {
    Alert.alert("Yoo Bro", "Im you in the past 2026 4th january", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later Pressed"),
        style: "cancel",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
      },
    ]);
  };
  const createThreeButtonAlert = () => {
    Alert.alert("Custom Alert", "Im trying alerts in buttons react native", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
      },
    ]);
  };
  return (
    <ThemedView margin className="gap-5">
      <ThemedButton onPress={createTwoButtonAlert}>2026</ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert}>Button Alert</ThemedButton>
    </ThemedView>
  );
}
