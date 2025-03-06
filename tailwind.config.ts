import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./preview/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "1.15rem",
        lg: "1.20rem",
      },
      textColor: {
        muted: "var(--muted)",
      },
      fontFamily: {
        head: ["var(--font-head)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        xs: "1px 1px 0 0 #000",
        sm: "2px 2px 0 0 #000",
        md: "3px 3px 0 0 #000",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
