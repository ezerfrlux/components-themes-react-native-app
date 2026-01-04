import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import React, { useState } from "react";

export default function TextInputsScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <ThemedView margin>
      <ThemedCard className="mb-5">
        <ThemedTextInput 
          placeholder="name"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })} 
        />

      </ThemedCard>
      <ThemedCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
}
