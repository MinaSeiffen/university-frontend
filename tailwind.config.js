// Import the Tailwind CSS plugin
const plugin = require('tailwindcss/plugin');

// Export the Tailwind CSS configuration object
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px', 
        '4xl': '1920px',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
