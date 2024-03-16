/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'unb': "var(--font-unbounded)",
      'sans': "var(--font-inter)",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-loop": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "greeting": {
          from: {
             transform: 'translateY(133px) scale(.7)',
             filter: 'blur(10px)',
             opacity: '0%'
            },
            to: {
              transform: 'translateY(0px) scale(1)',
              filter: 'blur(0px)',
              opacity: '100%'
             },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-loop": "infinite-loop 10s linear infinite",
        "greeting": "greeting .8s cubic-bezier(.8,0,.2,1)"
      },
      backgroundImage: {
          'gradient-radiall': "radial-gradient(102.4% 100% at 75.5% -5.1%, #ab55bb 0.9009009009%, rgb(174 153 255) 34.082911036%, rgb(187 164 241) 54.8265061937%, rgb(255 255 255) 100%)",
          'gradient-radiald': "radial-gradient(102.4% 100% at 75.5% -5.1%, #ab55bb 0.9009009009%, rgb(174 153 255) 34.082911036%, rgb(187 164 241) 54.8265061937%, rgb(10 10 10) 100%)",
          "gradient-cricles": "radial-gradient(circle at center center, rgb(0, 0, 0), rgba(33, 222, 222, 0)), repeating-radial-gradient(circle at center center, rgb(0, 0, 0), rgb(0, 0, 0), 70px, transparent 140px, transparent 70px);",
          "gradient-criclesd": "radial-gradient(circle at center center, rgb(0 0 0), rgb(107 183 183 / 0%)), repeating-radial-gradient(circle at center center, rgb(87 87 87), rgb(69 69 69), 70px, transparent 91px, transparent 106px)"
      },
      dropShadow: {
        'logotype': ['-10px 15px 10px rgb(255 0 0 / 20%)', '-8px -7px 5px rgb(255 92 0 / 20%)', '10px -10px 10px rgb(112 0 255 / 20%)', '10px 10px 10px rgb(255 88 218 / 20%)'],
        'FIG3D': ['-10px 15px 10px rgb(159 0 255 / 20%)', '-8px -7px 5px rgb(0 159 255 / 20%)', '10px -10px 10px rgb(112 0 255 / 20%)', '10px 10px 10px rgb(255 0 127 / 20%)']
      },
      fontSize: {
        'designing_text': "clamp(2.25rem, 0.9682rem + 5.8599vw, 8rem)"
      }
    },
    screens: {
      'sm': {'max':'800px'},
      'lg': {'max':'1300px'}
  },
  },
  plugins: [require("tailwindcss-animate")],
}