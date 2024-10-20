import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./preview/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        muted: "var(--muted)",
      },
      fontFamily: {
        head: ["var(--font-head)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        xs: "1px 1px 0 0 #000",
        md: "3px 3px 0 0 #000",
        "3xl": "10px 10px 0 0 #000",
      },
      colors: {
        primary: {
          50: "#FFFEF0",
          100: "#FFFAC2",
          200: "#FFF299",
          300: "#FFE766",
          400: "#FFDB33",
          500: "#FFCC00",
          600: "#FFB700",
          700: "#FF9F00",
          800: "#E68A00",
          900: "#B36B00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
