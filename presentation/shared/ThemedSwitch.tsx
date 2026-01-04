import React from "react";
import { Pressable, Switch, SwitchProps } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends SwitchProps {
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const ThemedSwitch = ({ text, value, onValueChange, className }: Props) => {
  return (
    <Pressable
      className={`flex flex-row items-center justify-center active:opacity-80 ${className}`}
    >
      {text && <ThemedText type="h2">{text}</ThemedText>}
      <Switch value={value} onValueChange={onValueChange} />
    </Pressable>
  );
};

export default ThemedSwitch;
