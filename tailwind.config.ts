import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1d1e23',
        'background-dark': '#191a1e',
        'card': '#303139',
        'primary': '#0031FF',
        'secondary': '#00B2FF',
        'button': '#485175',
      },
      fontSize: {
        '8xl': '64px'
      },
      backgroundImage: {
        'card-linear': 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
