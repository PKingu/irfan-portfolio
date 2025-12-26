import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00ff41", // The classic matrix/terminal green
        dark: "#0a0a0a", // A soft, deep black
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Makes the detailed project pages look good
  ],
};
export default config;