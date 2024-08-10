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
        'background': '#6C8DFF',
        'light-blue': '#6C8DFF',
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
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#4D4D4D', // Pastel blue for primary buttons
          'primary-focus': '#70C8FF', // Darker pastel blue for focus state
          'primary-content': '#F7F7F7', // White text on primary buttons

          'secondary': '#00FFFF', // Cyan for secondary buttons
          'secondary-focus': '#00E5E5', // Darker cyan for focus state
          'secondary-content': '#ffffff', // White text on secondary buttons

          'accent': '#F7F7F7', // Light gray for accent buttons
          'accent-focus': '#E5E5E5', // Darker light gray for focus state
          'accent-content': '#3D3D3D', // Dark gray text on accent buttons

          'neutral': '#3D3D3D', // Dark gray for neutral buttons
          'neutral-focus': '#2D2D2D', // Darker gray for focus state
          'neutral-content': '#ffffff', // White text on neutral buttons
        },
      },
    ],
  },

};
export default config;
