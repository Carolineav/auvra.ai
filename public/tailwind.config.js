/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'typo-round': ['Typo Round', 'sans-serif'],
      },
      colors: {
        // Cosmic AI color palette - NO GOLD/YELLOW
        'cosmic-purple': '#8b45ff',
        'cosmic-blue': '#00d4ff',
        'cosmic-pink': '#ff006e',
        'cosmic-dark': '#0a0a23',
        'cosmic-darker': '#000000',
        'neural-purple': '#6a4c93',
        'neural-blue': '#1e90ff',
        'neural-pink': '#ff69b4',
        'accent-purple': '#9d4edd',
        'accent-blue': '#4cc9f0',
        'accent-pink': '#f72585',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 4s',
        'spin-slow': 'spin 30s linear infinite',
        'brain-pulse': 'brainPulse 3s ease-in-out infinite',
        'neural-flow': 'neuralFlow 4s ease-in-out infinite',
        'cosmic-drift': 'cosmicDrift 15s ease-in-out infinite',
        'particle-float': 'particleFloat 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2d1b69 50%, #0f0f23 75%, #000000 100%)',
        'neural-gradient': 'linear-gradient(45deg, #8b45ff 0%, #00d4ff 50%, #ff006e 100%)',
      },
    },
  },
  plugins: [],
};