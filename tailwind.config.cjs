/** @type {import('tailwindcss').Config} */

const HdFontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24
}

const defaultFontSizes = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  '2xl': 32
}

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: HdFontSizes,
    screen: {      
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6'
      },
      cyan: {
        500: '#81d8f7',
        300: '#98e1f8'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      screens: {
        'md-h': { 'raw': '(max-height: 640px)' },
      }
    },
  },
  plugins: [],
}
