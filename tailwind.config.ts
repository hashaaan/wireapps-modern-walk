import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mw: {
          green: "#2BD9AF",
          pink: "#FF5E84",
          blue: "#0E42FD",
          gray: {
            100: "#F5F5F5",
            200: "#D9D9D9",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
