const fs = require('fs');

const folders = fs
  .readdirSync('src', {withFileTypes: true})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:boundaries/recommended',
    'plugin:effector/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'boundaries', 'effector'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^react', '^@?\\w'],
              [`^@(${folders.join('|')})`],
              ['^'],
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};
