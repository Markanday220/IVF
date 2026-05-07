/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
