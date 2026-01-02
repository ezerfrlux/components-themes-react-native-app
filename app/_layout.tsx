import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedView from "@/presentation/shared/ThemedView";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Text, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background")

  return (
    <GestureHandlerRootView style={{backgroundColor:backgroundColor, flex:1}}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">
            Hola mundo!
          </Text>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
