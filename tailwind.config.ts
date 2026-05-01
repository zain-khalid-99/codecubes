import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "rgba(255,255,255,0.08)",
        input: "rgba(255,255,255,0.08)",
        ring: "#7B61FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "#7B61FF",
          hover: "#9B8CFF",
          active: "#5B4DFF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#9CA3AF",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#FFFFFF",
        },
      },
      spacing: {
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        80: "80px",
        96: "96px",
        120: "120px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "999px",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7B61FF, #5B4DFF)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(123, 97, 255, 0.4)",
        "strong-glow": "0 0 80px rgba(123, 97, 255, 0.6)",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "200ms",
        normal: "400ms",
        slow: "600ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
