import { Appearance, Image, Pressable, View, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { MenuView } from "@react-native-menu/menu";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { NotesList } from "@/components/NotesList";
import { MENU_ACTIONS } from "@/constants/menuActions";

const Moon = require("../assets/images/moon.png");
const Sun = require("../assets/images/sun.png");

const ThemeToggle = () => {
  const theme = useTheme();
  const isDark = Appearance.getColorScheme() === "dark";

  const handleThemeToggle = () => {
    Appearance.setColorScheme(isDark ? "light" : "dark");
  };

  return (
    <Pressable onPress={handleThemeToggle}>
      <Image
        source={isDark ? Moon : Sun}
        style={styles.themeIcon}
        tintColor={theme.colors.text}
      />
    </Pressable>
  );
};

const HeaderMenu = () => {
  const theme = useTheme();
  const MENU_ACTION_TRANSFORMED = MENU_ACTIONS.map((action) => ({
    ...action,
    titleColor: theme.colors.text,
  }));

  return (
    <MenuView
      hitSlop={styles.menuHitSlop}
      title="Menu Title"
      actions={MENU_ACTION_TRANSFORMED}
      onPressAction={() => {}}
    >
      <Image
        source={require("../assets/images/threeDots.png")}
        style={styles.menuIcon}
        tintColor={theme.colors.text}
      />
    </MenuView>
  );
};

const HeaderActions = () => {
  return (
    <View style={styles.headerActions}>
      <ThemeToggle />
      <HeaderMenu />
    </View>
  );
};

export default function MyNotes() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderActions />,
    });
  }, [navigation]);

  return <NotesList />;
}

const styles = StyleSheet.create({
  themeIcon: {
    width: 20,
    height: 20,
  },

  menuIcon: {
    width: 24,
    height: 24,
  },
  menuHitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
});
