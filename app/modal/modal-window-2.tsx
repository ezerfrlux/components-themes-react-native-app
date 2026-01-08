import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
const ModalScreen = () => {
  return (
    <ThemedView
      className="items-center justify-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText>Hello Im a different Modal</ThemedText>

      <ThemedButton
        onPress={() => router.dismiss()}
      >Close</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
