module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "ui-sans-serif", "system-ui"],
      serif: ["Graphik", "ui-serif", "Georgia"],
      mono: ["Dank Mono", "ui-monospace", "SFMono-Regular"],
      graphik: "Graphik",
      "graphik-black": "GraphikBlack",
      "graphik-bold": "GraphikBold",
      "graphik-medium": "GraphikMedium",
      "graphik-semibold": "GraphikSemibold",
    },
    extend: {
      colors: {
        primary: "#E9F6FF",
        secondary: "#0052FF",
      },
      gridTemplateRows: {
        coinbase:
          "4.5rem minmax(650px, 1fr) repeat(2, minmax(450px, 1fr)) minmax(850px, 1fr) minmax(650px, 1fr) minmax(250px, 1fr) repeat(2, minmax(450px, 1fr)) minmax(50rem, 1fr)",
      },
      borderColor: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
