/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',   // Small devices
      md: '1366px',  // Medium devices (1366px width)
      lg: '1920px',  // Large devices (1920px width)
      xl: '1280px',  // Extra large devices
      '2xl': '1536px', // 2 Extra large devices
    },
  },
  plugins: [],
}
