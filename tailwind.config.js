import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(180deg, #081D4E 0%, #1D439B 100%)",
        "yellow-gradient":
          "linear-gradient(113.24deg, #FFF78B 5.93%, #FCE500 28.2%)",
      },
      colors: {
        "custom-primary": "#FCE500",
        "custom-secondary": {
          50: "#1D439B",
          100: "#081D4E",
          200: "#1A3775",
          300: "#000B26",
          400: "#21386D",
        },
      },
      screens: {
        xxs: "320px",
        xs: "390px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          extend: "dark",
          layout: {
            radius: {
              large: "0.375rem",
            },
          },
          colors: {
            background: "#081D4E",
            foreground: "black",
            primary: {
              DEFAULT: "#FCE500",
              foreground: "#000",
            },
            secondary: {
              50: "#1A3775",
              100: "#1A3775",
              200: "#1A3775",
              300: "#1A3775",
              400: "#1A3775",
              500: "#1A3775",
              600: "#1A3775",
              700: "#1A3775",
              800: "#1A3775",
              900: "#1A3775",
              DEFAULT: "#FFFFFF",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
