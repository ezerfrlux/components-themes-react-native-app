import React from "react";
import { Pressable, PressableProps } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends PressableProps {
  className?: string;
  children: string;
}
const ThemedButton = ({ children,className, ...rest }:Props) => {
  return (
    <Pressable {...rest} className={`items-center px-6 py-2 bg-light-primary dark:bg-dark-primary rounded-xl active:opacity-80 ${className}`}>
      <ThemedText className="text-2xl text-white">{children}</ThemedText>
    </Pressable>
  );
};

export default ThemedButton;
