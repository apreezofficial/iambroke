/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sapa: {
          red: "#ff1744",
          yellow: "#ffea00",
          neon: "#00ff66",
          dark: "#0b0c10",
          card: "#171a21",
          border: "#2a2e3d",
        },
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px) rotate(-1deg)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px) rotate(1deg)' },
        },
        tremble: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
        },
        alarmPulse: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(255, 23, 68, 0.9))' },
          '50%': { opacity: '0.4', filter: 'drop-shadow(0 0 5px rgba(255, 23, 68, 0.2))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out infinite',
        tremble: 'tremble 0.2s ease-in-out infinite',
        alarm: 'alarmPulse 0.8s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
};
