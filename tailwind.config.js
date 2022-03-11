module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    extend: {
      colors: {
        'custom-dark': '#1a2b34',
      }
    },

  },
  plugins: [require('daisyui')],
}