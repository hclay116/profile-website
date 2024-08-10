import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A2D5F2',
        'light-blue': '#B0E0E6',
        'cyan': '#00FFFF',
        'gray-800': '#2D2D2D',
        'gray-700': '#3D3D3D',
        'gray-600': '#4D4D4D',
        'gray-500': '#7D7D7D',
        'light-gray': '#F7F7F7',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
