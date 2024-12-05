/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007BFF', // Azul eléctrico
          DEFAULT: '#0056b3', // Azul oscuro
          dark: '#003f7f', // Azul más oscuro
        },
        secondary: {
          light: '#FFC107', // Amarillo dorado
          DEFAULT: '#FFA000', // Amarillo más oscuro
          dark: '#FF8F00', // Amarillo quemado
        },
        neutral: {
          light: '#F5F5F5', // Gris claro
          DEFAULT: '#333333', // Gris oscuro
          dark: '#1C1C1C', // Gris muy oscuro
        },
        success: '#28A745', // Verde suave
        error: '#FF6F61', // Rojo coral
        accent: {
          vintage: '#8E9E5D', // Verde oliva
          retro: '#D4AF37', // Dorado
          neon: '#00FFFF', // Azul neón
        },
      },
    },
  },
  plugins: [],
};
