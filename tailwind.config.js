/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003865',      // UoH Navy Blue
        'secondary': '#FFB81C',    // UoH Gold
        'accent': '#00A3E0',       // Light Blue
        'dark': '#1A1A1A',         // Dark text
      },
      fontFamily: {
        'sans': ['var(--font-open-sans)', 'Arial', 'sans-serif'],
        'display': ['var(--font-foco)', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
