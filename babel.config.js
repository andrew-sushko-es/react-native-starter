module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          screens: './src/screens',
          navigation: './src/navigation',
          components: './src/components',
          i18n: './src/i18n',
          store: './src/store',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
  ],
};
