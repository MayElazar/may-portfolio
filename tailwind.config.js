module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Pacifico: ["Pacifico", "cursive"],
      rubik: ["Rubik", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      pink: {
        pinkGlow: "#584ad6",
        brightPink: "#FFF3F0",
      },
      white: {
        whitey: "#FFFFFF",
        whiteGray: "#FAF9F7",
      },
      black: { blackk: "#000000" },
      gray: { gray: "#C9BCBD" },
      wheat: { wheat: "#d06df661" },
    },
    extend: {},
  },
  variants: {
    scrollBehavior: ["motion-safe", "motion-reduce", "responsive"],
  },
  plugins: [require("tailwind-scroll-behavior")()],
};
