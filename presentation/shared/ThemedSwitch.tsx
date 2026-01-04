import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Platform, Pressable, Switch, SwitchProps } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends SwitchProps {
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ text, value, onValueChange, className }: Props) => {

  const switchActiveColor = useThemeColor({}, "primary")

  return (
    <Pressable
    onPress={() => onValueChange(!value)}
      className={`flex mx-2 flex-row items-center justify-start active:opacity-80 ${className}`}
    >
      {text && <ThemedText type="h2">{text}</ThemedText>}
      <Switch
        value={value}
        onValueChange={onValueChange}
        className="flex justify-end flex-1"
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false:"gray",
          true: switchActiveColor
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
