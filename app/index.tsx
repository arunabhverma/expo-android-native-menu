import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Link } from "expo-router";

export default function Main() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href="/myNotes">
        <Text style={{ color: theme.colors.text }}>My Notes</Text>
      </Link>
    </View>
  );
}
