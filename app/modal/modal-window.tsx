import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";

const ModalScreen = () => {
  return (
    <ThemedView className="items-center justify-center flex-1" bgColor="#A52182">
      <ThemedText>Hello Im a Modal</ThemedText>
    </ThemedView>
  );
};

export default ModalScreen;
