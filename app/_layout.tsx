import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  let dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#181818",
      card: "#181818",
      text: "#FFFFFF",
    },
  };
  let light = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FDFBF7",
      card: "#FDFBF7",
      text: "#000000",
    },
  };
  const theme = colorScheme === "dark" ? dark : light;

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="myNotes" options={{ title: "Notes" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
