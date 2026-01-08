import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function ModalScreen() {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <Text className="my-2 text-xl text-light-text dark:text-dark-text">
          open modal
        </Text>
      </Link>

      <ThemedButton
        onPress={() => router.push("/modal/modal-window")}
        className="mx-4"
      >
        Open Modal with Custom Button
      </ThemedButton>
    </ThemedView>
  );
}
