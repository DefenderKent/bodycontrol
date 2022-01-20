module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src/app/',
          '@processes': './src/processes/',
          '@pages': './src/pages/',
          '@features': './src/features/',
          '@entities': './src/entities',
          '@shared': './src/shared/',
        },
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
