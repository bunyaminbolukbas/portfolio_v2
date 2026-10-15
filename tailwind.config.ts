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
        ink: '#0a0a0a',
        paper: '#fafaf7',
        accent: '#e5620f',
        line: '#e3e3df',
        'line-dark': '#2a2a28',
        muted: {
          DEFAULT: '#5c5c5a',
          dark: '#a3a19a',
        },
      },
      fontFamily: {
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
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
