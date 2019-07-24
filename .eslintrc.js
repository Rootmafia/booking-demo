module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'babel', 'react', 'promise', 'prettier', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    __DEV__: false,
    __TEST__: false,
    __PROD__: false,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 0,
    'react/destructuring-assignment': 'off',
    'import/no-useless-path-segments': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'no-else-return': ['error', { allowElseIf: true }],

    'react/require-default-props': ['error', { forbidDefaultForRequired: false }],
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'object-shorthand': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-use-before-define': ['error', 'nofunc'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
      },
    ],
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_links',
          '_embedded',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '__DEV__',
          '__TEST__',
          '__PROD__',
          '__INITIAL_STATE__',
        ],
        allowAfterThis: true,
      },
    ],
    'jsx-quotes': [2, 'prefer-double'],
    'react/sort-comp': [
      2,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/jsx-wrap-multilines': 0,
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
        semi: true,
        endOfLine: 'auto',
      },
    ],
    'class-methods-use-this': 0,
    'no-restricted-syntax': [0, 'ForOfStatement'],
    curly: ['error', 'all'],
  },
};
