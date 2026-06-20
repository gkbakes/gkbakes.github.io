/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bakery-cream':  '#FDFBF9',
        'bakery-brown':  '#23150D',
        'bakery-green':  '#375623',
        'bakery-ochre':  '#C17B3F',
        'bakery-linen':  '#F6EFE5',
        'bakery-amber':  '#D99B56',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
