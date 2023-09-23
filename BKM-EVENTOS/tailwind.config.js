/** @type {import('tailwindcss').Config} */
export default {
  content: [   
  './index.html',
  './src/**/*.{ts,tsx}',
  '/components/**/*.{ts,tsx}'
  ],
  theme: {
    colors:{
      'black': '#020617',
      'white': '#ffffff',
      'purple':{
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#4f46e5',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#581c87',
        950: '#2e1065',
      }
    },
    extend: {},
  },
  plugins: [],
}

