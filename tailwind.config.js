/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(10, end) 1s 1 normal both',
        blink: 'blink 1s steps(1, start) infinite',
      },
    },
  },
  plugins: [],
};
