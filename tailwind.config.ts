import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5b2c6f',
          hover: '#7b3d8f',
        },
        secondary: {
          DEFAULT: '#e4a853',
          hover: '#f0bc6a',
        },
        background: '#0f0a14',
        muted: '#2d2438',
      },
    },
  },
  plugins: [],
};

export default config;
