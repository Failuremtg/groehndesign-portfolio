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
          DEFAULT: '#b58a3f',
          hover: '#c69a4c',
        },
        background: '#fbf6ee',
        muted: '#f3eadb',
      },
    },
  },
  plugins: [],
};

export default config;
