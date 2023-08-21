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
        'paper-mobile': "url('/assets/images/bg-paper-mobile.png')",
        'paper-flat': "url('/assets/images/bg-paper-flat.png')",
        'paper-desktop': "url('/assets/images/bg-paper-desktop.png')",
        'paper-retak': "url('/assets/images/bg-paper-retak.png')",
      },
      colors: {
        orange: {
          primary: '#E83F1C',
          darker: '#AF2A0E',
        },
        blue: {
          primary: '#1E373E',
        },
        black: {
          primary: '#0B0B0B',
        },
        cream: '#F4D2A6',
        green: {
          fade: '#3F513B',
        },
        grey: {
          light: '#1111111A',
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
