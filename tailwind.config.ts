
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand Colors
        "deco-plum": "hsl(var(--deco-plum))",
        "deco-beige": "hsl(var(--deco-beige))",
        "deco-lavender": "hsl(var(--deco-lavender))",
        "deco-denim": "hsl(var(--deco-denim))",
        "deco-misty": "hsl(var(--deco-misty))",
        "deco-gold": "hsl(var(--deco-gold))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Add custom fonts
        'parafina': ['Playfair Display', 'serif'],
        'grosa': ['Outfit', 'sans-serif'],
        'grosa-mono': ['Space Mono', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "subtle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "shimmer": {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "100%" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "subtle-bounce": "subtle-bounce 2s infinite ease-in-out",
        "shimmer": "shimmer 4s infinite ease-in-out",
        "float": "float 5s infinite ease-in-out"
      },
      backgroundImage: {
        'marble-texture': "url('/textures/marble-texture.jpg')",
        'concrete-texture': "url('/textures/concrete-texture.jpg')",
        'limewash-texture': "url('/textures/limewash-texture.jpg')",
        'terrazzo-texture': "url('/textures/terrazzo-texture.jpg')",
        'geometric-pattern': "url('/textures/geometric-pattern.svg')",
        'arch-gradient': "radial-gradient(circle at 50% 100%, rgba(50, 33, 59, 0.9), rgba(50, 33, 59, 0.7))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
