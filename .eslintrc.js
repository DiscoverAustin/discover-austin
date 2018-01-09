module.exports = {
  "extends": "airbnb-base",

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    }
  },

  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },

  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "no-console": "off",
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "minProperties": 4},
      "ObjectPattern": "never"
    }]
  },

  "plugins": [ "react" ]
};
