module.exports = {
  extends: "airbnb",
  plugins: [
    "react",
    "react-hooks",
    "jsx-ally",
    "import"
  ],
  rules: {
    "max-len": ["error", 120, 4, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    "comma-dangle": 0,
    "no-underscore-dangle": 0,
    "import/prefer-default-export": 0,
    "indent": ["error", 4, {
      "SwitchCase": 1
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": 0,
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "jsx-ally/no-static-element-interactions": 0
  }
};
