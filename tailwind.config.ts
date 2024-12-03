import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      gridTemplateColumns: {
        layout: '16rem 1fr',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        text: {
          DEFAULT: '#f1f1f1',
          pale: '#d4d4d8',
          primary: '#176C8D',
          secondary: '#9ca3af',
        },
        sidebar: {
          DEFAULT: '#FFFFFF',
          primary: '#1B223C',
          icon: '#3BAEAA',
          item: '#9ca3af',
          hover: '#FFFFFF',
        },
        header: {
          DEFAULT: '#243554',
        },
        button: {
          primary: '#3BAEAA',
        },
      },
      borderRadius: {
        lg: '30px',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      flex: {
        menuItems: 'flex items-center gap-2',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
