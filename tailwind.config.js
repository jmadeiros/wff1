module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "underline",
              fontWeight: "500",
            },
            strong: {
              fontWeight: "700",
            },
            h1: {
              fontWeight: "700",
            },
            h2: {
              fontWeight: "600",
            },
            h3: {
              fontWeight: "600",
            },
            code: {
              color: "inherit",
            },
            pre: {
              color: "inherit",
              backgroundColor: "rgb(0 0 0 / 0.3)",
            },
          },
        },
      },
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
      animation: {
        "flow-1": "flow1 20s ease-in-out infinite",
        "flow-2": "flow2 22s ease-in-out infinite",
        "flow-3": "flow3 24s ease-in-out infinite",
        "flow-4": "flow4 26s ease-in-out infinite",
        "flow-5": "flow5 28s ease-in-out infinite",
        "flow-6": "flow6 30s ease-in-out infinite",
        "float-1": "float1 20s ease-in-out infinite",
        "float-2": "float2 22s ease-in-out infinite",
        "float-3": "float3 24s ease-in-out infinite",
        "float-4": "float4 26s ease-in-out infinite",
        "float-5": "float5 28s ease-in-out infinite",
        "float-6": "float6 30s ease-in-out infinite",
      },
      keyframes: {
        flow1: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            zIndex: "10",
          },
          "33%": {
            transform: "translate3d(5%, 2%, 0) scale(1.1)",
            zIndex: "20",
          },
          "66%": {
            transform: "translate3d(-5%, -2%, 0) scale(0.9)",
            zIndex: "10",
          },
        },
        flow2: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            zIndex: "10",
          },
          "33%": {
            transform: "translate3d(-5%, -2%, 0) scale(0.9)",
            zIndex: "10",
          },
          "66%": {
            transform: "translate3d(5%, 2%, 0) scale(1.1)",
            zIndex: "20",
          },
        },
        flow3: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            zIndex: "10",
          },
          "33%": {
            transform: "translate3d(5%, -2%, 0) scale(1.1)",
            zIndex: "20",
          },
          "66%": {
            transform: "translate3d(-5%, 2%, 0) scale(0.9)",
            zIndex: "10",
          },
        },
        flow4: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            zIndex: "10",
          },
          "33%": {
            transform: "translate3d(-5%, 2%, 0) scale(0.9)",
            zIndex: "10",
          },
          "66%": {
            transform: "translate3d(5%, -2%, 0) scale(1.1)",
            zIndex: "20",
          },
        },
        flow5: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            zIndex: "10",
          },
          "33%": {
            transform: "translate3d(3%, -3%, 0) scale(1.05)",
            zIndex: "20",
          },
          "66%": {
            transform: "translate3d(-3%, 3%, 0) scale(0.95)",
            zIndex: "10",
          },
        },
        flow6: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) scale(1)",
            zIndex: "10",
          },
          "33%": {
            transform: "translate3d(-4%, 1%, 0) scale(0.98)",
            zIndex: "10",
          },
          "66%": {
            transform: "translate3d(4%, -1%, 0) scale(1.02)",
            zIndex: "20",
          },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(25px, -25px)", opacity: 0.8 },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(-20px, 20px)", opacity: 0.9 },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(30px, 30px)", opacity: 0.85 },
        },
        float4: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(-25px, -15px)", opacity: 0.9 },
        },
        float5: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(20px, -20px)", opacity: 0.85 },
        },
        float6: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: 1 },
          "50%": { transform: "translate(-30px, 25px)", opacity: 0.8 },
        },
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

