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
        'paper-main': "url('/assets/images/bg-paper-main.png')",
        'paper-green': "url('/assets/images/bg-paper-green.png')",
        'paper-pre-desktop': "url('/assets/images/bg-paper-pre-desktop.png')",
        'speaker-card': "url('/assets/images/bg-speaker.png')",
        flower: "url('/assets/images/bg-art.png')",
        'flower-square': "url('/assets/images/bg-art-square.png')",
        'flower-small': "url('/assets/images/bg-art-small.png')",
        tedx: "url('/assets/images/bg-tedx.png')",
        'team-card': "url('/assets/images/bg-team-card.png')",
        merch: "url('/assets/images/bg-merch.png')",
        'paper-merch': "url('/assets/images/paper-merch.png')",
        'yellow-merch': "url('/assets/images/bg-yellow-merch.png')",
        ticket: "url('/assets/images/bg-ticket.png')",
        'main-event': "url('/assets/images/bg-main-event.jpg')",
        'main-event-venue': "url('/assets/images/bg-main-event-venue.png')",
        'green-main': "url('/assets/images/green-main.png')",
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
          primary: '#244C42',
        },
        grey: {
          light: '#1111111A',
        },
        red: {
          primary: '#A00101',
        },
      },
    },
    screens: {
      // min-width
      xs: '300px',
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
