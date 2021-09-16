import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      green: {
        500: 'hsl(155.5, 100%, 43.1%)',
        300: 'hsl(180, 81%, 58.6%)',
        100: 'hsl(154.9, 76.4%, 71.8%)',
        700: 'hsl(155.6, 100%, 36.7%)',
        900: 'hsl(155.5, 100%, 30.2%)'
      },
      yellow: {
        500: 'hsl(50.9, 100%, 67.6%)',
        300: 'hsl(50.8, 100%, 75.7%)',
        100: 'hsl(50.6, 100%, 83.7%)',
        700: 'hsl(50.6, 64.8%, 57.6%)',
        900: 'hsl(50.7, 47.9%, 47.5%)'
      },
      orange: {
        500: 'hsl(155.3, 76%, 57.5%)',
        300: 'hsl(34.1, 92%, 61%)',
        100: 'hsl(34.2, 91%, 73.9%)',
        700: 'hsl(34.2, 100%, 40.6%)',
        900: 'hsl(34, 100%, 33.5%)',
      },
      red: {
        500: 'hsl(9.7, 100%, 63.7%)',
        300: 'hsl(9.9, 100%, 72.7%)',
        100: 'hsl(9.1, 100%, 82%)',
        700: 'hsl(9.6, 67.4%, 54.3%)',
        900: 'hsl(9.7, 57%, 44.7%)',
      },
      teal: {
        500: 'hsl(180, 100%, 44.9%)',
        300: 'hsl(180, 81%, 58.6%)',
        100: 'hsl(180, 81.4%, 72.5%)',
        700: 'hsl(180, 100%, 38.2%)',
        900: 'hsl(180, 100%, 31.4%)',
      }
    },
    extend: {
      fontFamily: {
        sans: '"DM Sans", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
      theme: {
        colors: {
          sky: {
            800: 'hsl(192.7, 96.3%, 10.6%)'
          }
        }
      }
    },
  },
}))
