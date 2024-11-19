/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(to right bottom, #eec14c, #ecb745, #e9ae3f, #e6a439, #e39a34)",
      },
      fontFamily: {
        Sarabun: ['Sarabun', 'sans-serif'], // 'sans-serif' es la fuente de respaldo
        Epilogue: ['Epilogue', 'sans-serif'], // 'sans-serif' es la fuente de respaldo
      },
      colors: {
        customBlack: '#242424', // Color personalizado
      },
    },
  },
  plugins: [],
}

