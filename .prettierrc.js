module.exports = {
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "bracketSameLine": false,
  "bracketSpacing": false,
  "trailingComma": "all",
  "proseWrap": "never",
  "overrides": [{
    "files": ".prettierrc.js",
    "options": {
      "parser": "json"
    }
  }],
  "plugins": [require.resolve("prettier-plugin-organize-imports"), require.resolve("prettier-plugin-packagejson")]
}
