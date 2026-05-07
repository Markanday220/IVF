/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#FFC107',  // Gold/Yellow from oxxy logo
          green: '#8BC34A',   // Light green from oxxy logo
          blue: '#4FC3F7',    // Sky blue from oxxy logo
          red: '#FF5252',     // Red from checkmarks
          orange: '#FF9800',  // Orange accent
        },
      },
    },
  },
  plugins: [],
}
