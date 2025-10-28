/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myesa-orange': '#FF3A00',
        'myesa-orange-light': '#FF9248',
        'myesa-blue': '#0022FF',
        'myesa-black': '#1A1A1A',
        'myesa-gray-1': '#403B3A',
        'myesa-gray-2': '#626061',
        'myesa-gray-3': '#838078',
        'myesa-gray-4': '#A29E96',
        'myesa-gray-5': '#D1D1D1',
        'myesa-white': '#E7E7E7',
        'myesa-white-2': '#F5F5F5',
        'myesa-bg': '#F1F1F1',
      },
      fontFamily: {
        'work': ['Work Sans', 'sans-serif'],
        'sharp': ['Sharp Grotesk', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
