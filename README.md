# Expo Android Native Menu Styling

This repository provides a complete implementation for customizing the Android native menu in your Expo app. This implementation is highly inspired by [this solution](https://github.com/react-native-menu/menu/issues/58#issuecomment-806530467) for styling Android popup menus.

## Demo

| Android                                                                                         |
| ----------------------------------------------------------------------------------------------- |
| <video src="https://github.com/user-attachments/assets/0319af69-b631-4348-a78a-2d936e792372" /> |

## Compatibility

This plugin is compatible with:

- [Zeego](https://zeego.dev/) - Beautiful, native menus for React Native + Web
- [@react-native-menu/menu](https://github.com/react-native-menu/menu) - UIMenu Component for React Native

## Quick Start

1. Clone this repository:

```bash
git clone https://github.com/yourusername/expo-android-native-menu.git
```

2. Copy the following directories/files to your Expo project:

   - `plugins/` directory - Contains the config plugin implementation
   - `app.json` - Contains the plugin configuration

3. Install the required dependencies in your project:

```bash
npm install
```

4. Add the plugin to your `app.json` or `app.config.js`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-android-native-menu",
        {
          "radius": 14,
          "lightBackgroundColor": "#FFFFFF",
          "darkBackgroundColor": "#000000",
          "paddingVertical": 14,
          "paddingHorizontal": 0
        }
      ]
    ]
  }
}
```

## Project Structure

```
expo-android-native-menu/
├── plugins/                # Config plugin implementation
│   └── android/            # Android-specific plugins
│       └── withRoundedPopupMenu.js  # Main plugin file
├── app.json               # Plugin configuration
└── package.json           # Project dependencies
```

## Configuration Options

The plugin accepts the following configuration options:

| Option               | Type   | Default   | Description                                                                                                                                                                   |
| -------------------- | ------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| radius               | number | 14        | Border radius in dp                                                                                                                                                           |
| lightBackgroundColor | string | "#FFFFFF" | Background color for light theme                                                                                                                                              |
| darkBackgroundColor  | string | "#000000" | Background color for dark theme                                                                                                                                               |
| paddingVertical      | number | 14        | Vertical padding in dp                                                                                                                                                        |
| paddingHorizontal    | number | 0         | Horizontal padding in dp. Note: Keep this at 0 to maintain the native Android ripple effect. On press, the padding will be visible as the ripple effect won't touch the edge. |

## Implementation Details

### Config Plugin

The config plugin (`plugins/android/withRoundedPopupMenu.js`) handles:

- Creating rounded popup menu backgrounds for both light and dark themes
- Applying custom padding to menu items
- Setting up the necessary drawable resources

## Usage

1. After copying the files and adding the configuration, rebuild your app:

```bash
npx expo prebuild
```

2. Run your app:

```bash
npx expo run:android
```

## Example Configuration

Here's a complete example of how to configure the plugin in your `app.config.js`:

```javascript
export default {
  expo: {
    name: "your-app-name",
    // ... other expo config
    plugins: [
      [
        "expo-android-native-menu",
        {
          radius: 14,
          lightBackgroundColor: "#FFFFFF",
          darkBackgroundColor: "#000000",
          paddingVertical: 14,
          paddingHorizontal: 0,
        },
      ],
    ],
  },
};
```

## Notes

- This implementation only affects the Android native menu appearance
- Changes require a rebuild of your app
- Make sure to test your menu styling on different Android versions and screen sizes
- Horizontal padding is 0 by default to keep the native Android ripple effect clean, adding padding would make the gap visible when tapping.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
