import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import React, { useState } from "react";

export default function SwitchesScreen() {
  const [switchState, setSwitchState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const toggleSwitch = (value: boolean) => {
    setSwitchState({ ...switchState, isActive: value });
  };

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switchState.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor={"#3e3e3e"}
          onValueChange={() => toggleSwitch(!switchState.isActive)}
          value={switchState.isActive}
        /> */}
        <ThemedSwitch 
          text="Activo"
          onValueChange={() => toggleSwitch(!switchState.isActive)}
          value={switchState.isActive}
        />
      </ThemedCard>
    </ThemedView>
  );
}
