import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F8F8F8",
          200: "#EAEAEA",
          500: "#4A90E2",
          700: "#1F2937",
        },
        neutral: {
          50: "#FAFAFA",
          200: "#E5E7EB",
          500: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
export default config;
