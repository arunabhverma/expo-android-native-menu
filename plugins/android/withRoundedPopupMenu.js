const { withDangerousMod } = require("@expo/config-plugins");
const fs = require("node:fs");
const path = require("node:path");

/**
 * Config plugin to add border radius to Android popup menus
 * @param {import('@expo/config-types').ExpoConfig} config - Expo config
 * @param {Object} options - Plugin options
 * @param {number} [options.radius=14] - Border radius in dp
 * @param {string} [options.lightBackgroundColor='#FFFFFF'] - Background color for light theme
 * @param {string} [options.darkBackgroundColor='#000000'] - Background color for dark theme
 * @param {number} [options.paddingVertical=14] - Vertical padding in dp
 * @param {number} [options.paddingHorizontal=0] - Horizontal padding in dp
 * @returns {import('@expo/config-types').ExpoConfig} - Modified Expo config
 */
const withRoundedPopupMenu = (config, options = {}) => {
  const radius = options.radius || 14;
  const lightBackgroundColor = options.lightBackgroundColor || "#FFFFFF";
  const darkBackgroundColor = options.darkBackgroundColor || "#000000";
  const paddingVertical = options.paddingVertical || 14;
  const paddingHorizontal = options.paddingHorizontal || 0;

  let modifiedConfig = withDangerousMod(config, [
    "android",
    async (config) => {
      const androidDir = path.join(config.modRequest.platformProjectRoot, "app", "src", "main");
      const resDir = path.join(androidDir, "res");
      const drawableDir = path.join(resDir, "drawable");
      const drawableNightDir = path.join(resDir, "drawable-night");

      if (!fs.existsSync(drawableDir)) {
        fs.mkdirSync(drawableDir, { recursive: true });
      }

      if (!fs.existsSync(drawableNightDir)) {
        fs.mkdirSync(drawableNightDir, { recursive: true });
      }

      const roundedPopupLightXml = `<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="${lightBackgroundColor}" />
    <corners android:radius="${radius}dp" />
    <padding
        android:bottom="${paddingVertical}dp"
        android:top="${paddingVertical}dp"
        android:left="${paddingHorizontal}dp"
        android:right="${paddingHorizontal}dp" />
</shape>`;

      const roundedPopupDarkXml = `<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="${darkBackgroundColor}" />
    <corners android:radius="${radius}dp" />
    <padding
        android:bottom="${paddingVertical}dp"
        android:top="${paddingVertical}dp"
        android:left="${paddingHorizontal}dp"
        android:right="${paddingHorizontal}dp" />
</shape>`;

      fs.writeFileSync(path.join(drawableDir, "rounded_popup.xml"), roundedPopupLightXml);
      fs.writeFileSync(path.join(drawableNightDir, "rounded_popup.xml"), roundedPopupDarkXml);

      return config;
    },
  ]);

  modifiedConfig = withDangerousMod(modifiedConfig, [
    "android",
    async (config) => {
      const androidDir = path.join(config.modRequest.platformProjectRoot, "app", "src", "main");
      const resDir = path.join(androidDir, "res");
      const valuesDir = path.join(resDir, "values");

      if (!fs.existsSync(valuesDir)) {
        fs.mkdirSync(valuesDir, { recursive: true });
      }

      const stylesPath = path.join(valuesDir, "styles.xml");

      const stylesXml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
        <item name="android:popupMenuStyle">@style/RoundedPopupMenuStyle</item>
    </style>
    
    <style name="RoundedPopupMenuStyle" parent="Widget.AppCompat.PopupMenu">
        <item name="android:popupBackground">@drawable/rounded_popup</item>
    </style>
</resources>`;

      fs.writeFileSync(stylesPath, stylesXml);

      return config;
    },
  ]);

  return modifiedConfig;
};

module.exports = withRoundedPopupMenu;
