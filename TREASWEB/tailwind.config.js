module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('../TREASWEB/src/assets/FondoAppWeb.jpg')",
      },
      colors: {
        red_treas: '#F20505', // Replace with your color code
      },
    },
  },
  plugins: [],
}
