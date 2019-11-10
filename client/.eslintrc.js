module.exports = {
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "extends": [
/*    "airbnb-typescript",*/
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-console": "off",
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "no-only-tests/no-only-tests": "error"
   /* TODO: Enable this when the bug with react hooks is fixed
     "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"*/
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "no-unused-vars": 1,
        "@typescript-eslint/ban-ts-ignore": 0,
        "no-undef": ["off"],
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/class-name-casing": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-function-return-type": 0
      }
    }
  ],
  "plugins": [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "cypress",
    "chai-friendly",
    "react-hooks",
    "no-only-tests"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true,
    "cypress/globals": true
  }
 };

/*
ecmaVersion only affects the parser, so it allows ES6 syntax (such as let/const).
The environment es6: true, will set ecmaVersion for us,
 but will also enable all of the ES6 globals (such as Promise, Map, Set).
 If we want ES7 (or later) and ES6 globals, we would do env es6:true
 and ecmaVersion: (something greater than 6) like imn this case 2019*/
