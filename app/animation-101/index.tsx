import useAnimation from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { Animated, Easing } from "react-native";

export default function Animation101Screen() {

  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingFromTopPosition} =  useAnimation()


  return (
    <ThemedView margin className="items-center justify-center flex-1">
        <Animated.View 
          className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
          style={{
            width:150,
            height:150,
            opacity: animatedOpacity,
            transform:[
              {
                translateY:animatedTop
              }
            ]
          }}
        />

      <ThemedButton className="my-5" onPress={() => {
        fadeIn({})
        startMovingFromTopPosition({initialPosition : -200, easing: Easing.bounce, duration: 300})
      }}>
        Fade In
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
}
