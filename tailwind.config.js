/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // the first one will be the default by redefining the sans font family
        sans: ['var(--font-exo2)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
