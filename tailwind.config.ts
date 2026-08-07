import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111110',
        paper: '#faf9f6',
        line: '#e4e2dc',
        'line-dark': '#2a2a28',
        muted: {
          DEFAULT: '#6b6963',
          dark: '#a3a19a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        'mono-label': '0.14em',
      },
      maxWidth: {
        site: '80rem',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
