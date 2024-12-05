/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        river: {
          primary: '#f8f8f8', // Blanco elegante
          secondary: '#d32f2f', // Rojo oscuro desaturado
        },
        boca: {
          primary: '#355c7d', // Azul desaturado
          secondary: '#ffcc67', // Amarillo pastel
        },
        racing: {
          primary: '#b2ebf2', // Celeste pastel
          secondary: '#e0f7fa', // Blanco con tinte celeste
        },
        aldosivi: {
          primary: '#82c596', // Verde pastel
          secondary: '#ffe082', // Amarillo cálido
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
