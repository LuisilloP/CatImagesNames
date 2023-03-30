/** @type {import('tailwindcss').Config} */
export default {

  content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '99': 'repeat(auto-fit, minmax(25rem,1fr))',
      }
    },
  },
  plugins: [],
}

