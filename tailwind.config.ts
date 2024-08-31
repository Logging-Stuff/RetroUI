import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-head)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        "xs": "1px 1px 0 0 #000",
        "md": "3px 3px 0 0 #000",
        "3xl": "10px 10px 0 0 #000",
      },
      colors: {
        primary: {
          50: "#FFFEF0",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
      },
    },
  },
  plugins: [],
};
export default config;
