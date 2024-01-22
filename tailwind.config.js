/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '370px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['outfit', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        bglight: '#f7f4f4',
        bgdark: '#12060a',
        fglight: '#2b2828',
        fgdark: '#e3d9d9',
        accentlight: '#b94062',
        accentdark: '#e662bf',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        fadein: 'fadein 2s ease-in-out',
        fadeout: 'fadeout 2s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        },
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 100 },
        },
        fadeout: {
          from: { opacity: 100 },
          to: { opacity: 0 }
        },
      }
    },
  },
  plugins: [],
}