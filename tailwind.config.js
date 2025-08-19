/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sans-regular': 'HostGrotesk_400Regular',
        'sans-medium': 'HostGrotesk_500Medium',
        'sans-semibold': 'HostGrotesk_600SemiBold',
        'sans-bold': 'HostGrotesk_700Bold',
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          700: '#181818',
        },
        gray: {
          100: '#FAFAFA',
          200: '#F4F4F5',
          300: '#F3F4F6',
          400: '#E4E4E7',
          500: '#D9D9D9',
          600: '#A1A1A1',
          700: '#71717A',
        },
        lime: {
          400: '#E8F886',
          500: '#BEF264',
          600: '#A2E635',
          700: '#64A30D',
          800: '#1A2E05'
        },
      },
    },
  },
  plugins: [],
}
