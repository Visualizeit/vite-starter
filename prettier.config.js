/** @type {import("prettier").Config} */
const prettierConfig = {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  endOfLine: 'auto',
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  bracketSameLine: true,
  experimentalTernaries: true,
  htmlWhitespaceSensitivity: 'strict',
}

export default prettierConfig
