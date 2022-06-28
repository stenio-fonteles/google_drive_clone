/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'header': '#7FFFD4',
      'success':'#00FF7F',
      'leftScreen': '#F0F8FF',
      'rightScreen':'#B0E0E6',
      'border':'#A9A9A9'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
  
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}