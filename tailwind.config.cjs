module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: "var(--color-blue)",
      white: "var(--color-white)",
      black: "var(--color-black)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
