import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#ccff00',
          purple: '#d000ff',
          black: '#050505',
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          border: '#333333'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glitch: 'glitch 1s linear infinite',
        'glitch-slice-1': 'glitch-anim-1 2.5s infinite linear alternate-reverse',
        'glitch-slice-2': 'glitch-anim-2 3s infinite linear alternate-reverse'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' }
        },
        'glitch-anim-1': {
          '0%': { 'clip-path': 'inset(20% 0 80% 0)', transform: 'translate(-2px, 1px)' },
          '20%': { 'clip-path': 'inset(60% 0 10% 0)', transform: 'translate(2px, -1px)' },
          '40%': { 'clip-path': 'inset(40% 0 50% 0)', transform: 'translate(-2px, 2px)' },
          '60%': { 'clip-path': 'inset(80% 0 5% 0)', transform: 'translate(2px, -2px)' },
          '80%': { 'clip-path': 'inset(10% 0 70% 0)', transform: 'translate(-1px, 1px)' },
          '100%': { 'clip-path': 'inset(30% 0 50% 0)', transform: 'translate(1px, -1px)' }
        },
        'glitch-anim-2': {
          '0%': { 'clip-path': 'inset(10% 0 60% 0)', transform: 'translate(2px, -1px)' },
          '20%': { 'clip-path': 'inset(30% 0 20% 0)', transform: 'translate(-2px, 1px)' },
          '40%': { 'clip-path': 'inset(70% 0 10% 0)', transform: 'translate(2px, -2px)' },
          '60%': { 'clip-path': 'inset(50% 0 40% 0)', transform: 'translate(-2px, 2px)' },
          '80%': { 'clip-path': 'inset(80% 0 5% 0)', transform: 'translate(1px, -1px)' },
          '100%': { 'clip-path': 'inset(0% 0 80% 0)', transform: 'translate(-1px, 1px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
