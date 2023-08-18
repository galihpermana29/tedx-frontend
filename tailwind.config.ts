import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        paper: "url('/assets/images/bg-paper.png')",
        wall: "url('/assets/images/wall-pattern.png')",
        'wall-texture': "url('/assets/images/wall-texture.png')",
        memantik: "url('/assets/images/memantik-bg.png')",
        'memantik-2': "url('/assets/images/memantik-bg-2.png')",
        'paper-mobile': "url('/assets/images/bg-paper-mobile.png')"
      },
      colors: {
        orange: {
          primary: '#E83F1C',
        },
        blue: {
          primary: '#1E373E',
        },
        black: {
          primary: '#0B0B0B',
        },
      },
    },
    screens: {
      // min-width
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
