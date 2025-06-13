/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'chat-bg': '#212121',
        'chat-secondary': '#2f2f2f',
        'chat-hover': '#3e3e3e',
        'chat-border': '#4d4d4f',
        'chat-text': '#ffffff',
        'chat-text-secondary': '#acacbe',
        'chat-green': '#10a37f',
      },
      animation: {
        'typing': 'typing 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        typing: {
          '0%, 60%, 100%': {
            transform: 'translateY(0px)',
          },
          '30%': {
            transform: 'translateY(-10px)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}