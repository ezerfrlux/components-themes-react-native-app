import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedView from "@/presentation/shared/ThemedView";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ThemedText from '../presentation/shared/ThemedText';
import "./global.css";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background")

  return (
    <GestureHandlerRootView style={{backgroundColor:backgroundColor, flex:1}}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <ThemedText type="link" className="mt-10">Hola Mundo!!</ThemedText>

        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
