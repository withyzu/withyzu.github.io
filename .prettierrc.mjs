/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: true,
  jsxBracketSameLine: true,        // 强制 JSX/TSX 的闭合 > 与最后一个属性同行（核心）
  singleAttributePerLine: false,   // 关闭「单行一个属性」（避免属性分行后自动让 > 换行）
  printWidth: 120,                 // 可选：调整换行阈值（避免因行宽不够自动换行 >）
  tabWidth: 2,                     // 保持与项目一致的缩进（根据需求调整）
  semi: true,                      // 可选：是否加分号（按项目规范）
  singleQuote: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};