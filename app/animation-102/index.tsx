import ThemedView from "@/presentation/shared/ThemedView";
import React, { useRef } from "react";
import { Animated, PanResponder } from "react-native";
// ? PAN RESPONDER DETECT TACTILE GESTURES
export default function Animation102Page() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      },
    ], {useNativeDriver:false}),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <ThemedView className="items-center justify-center">
      <Animated.View
        {...panResponder.panHandlers}
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={[pan.getLayout(),{ height: 130, width: 130 }]}
      />
    </ThemedView>
  );
}
