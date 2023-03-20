module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
        "overrides": [
            {
              files: ['**/*.cjs'],
              env: {
                node: true,
              },
            }
    ],

    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    },
    "settings": {
        react: {
          version: "detect"
        },
      }
}
