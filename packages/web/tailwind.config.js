/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        river: {
          primary: '#ffffff', // Blanco
          secondary: '#ff0000', // Rojo
        },
        boca: {
          primary: '#0058a5', // Azul
          secondary: '#ffcc00', // Amarillo
        },
        racing: {
          primary: '#78c4d4', // Celeste
          secondary: '#ffffff', // Blanco
        },
        aldosivi: {
          primary: '#007a33', // Verde
          secondary: '#ffd700', // Amarillo
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(river|boca|racing|aldosivi)-(primary|secondary)/,
      variants: ['hover', 'focus'],
    },
  ],
};
