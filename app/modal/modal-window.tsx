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
      <ThemedText>Hello Im a Modal</ThemedText>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window-2")}
        className="my-4"
      >
        Other Modal
      </ThemedButton>
      <ThemedButton onPress={() => router.dismiss()}>Close Modal</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
