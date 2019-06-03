module.exports = {
  extends: [
    'prettier',
    'plugin:jest/recommended',
  ],
  plugins: [
    'typescript',
    'jest',
    'prettier'
  ],
  env: {
    node: true,
    'jest/globals': true,
  },
  parser: "typescript-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "trailingcomma": "es5",
        "singleQuote": true,
        "printWidth": 80,
        "semi": true,
        "bracketSpacing": true,
      }
    ]
  }
};