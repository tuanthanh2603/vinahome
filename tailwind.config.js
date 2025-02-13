import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "50px",
      },
      screens: {
        "2xl": "1440px",
      },
      colors: {
        foreground: {
          DEFAULT: "hsl(180,4%,5%)",
        },
        primary: {
          DEFAULT: "hsl(204,82%,55%)",
          600: "hsl(204,82%,40%)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: "68px",
          fontWeight: 700,
        },
        h2: {
          fontSize: "52px",
          fontWeight: 700,
        },
        h3: {
          fontSize: "44px",
          fontWeight: 700,
        },
        h4: {
          fontSize: "36px",
          fontWeight: 700,
        },
        h5: {
          fontSize: "24px",
          fontWeight: 700,
        },
        h6: {
          fontSize: "20px",
          fontWeight: 700,
        },
        label: {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),
          display: "block",
        },
      });
    }),
  ],
};
