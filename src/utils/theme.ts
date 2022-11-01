import { createTheme } from '@nextui-org/react'


export const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      orange100: '#7A3609',
      orange200: '#934910',
      orange300: '#B76519',
      orange400: '#DB8425',
      orange500: '#FFA733',
      orange600: '#FFC366',
      orange700: '#FFD484',
      orange800: '#FFE6AD',
      orange900: '#FFF4D6',
      lightGreen100: '#386F0E',
      lightGreen200: '#4C8618',
      lightGreen300: '#68A726',
      lightGreen400: '#87C737',
      lightGreen500: '#A9E84C',
      lightGreen600: '#C5F177',
      lightGreen700: '#D7F894',
      lightGreen800: '#E9FCB8',
      lightGreen900: '#F5FDDB',
      linearGradient: 'linear-gradient(144deg, rgba(255,167,51,1) 0%, rgba(169,232,76,1) 100%)',

      primaryLight: '$orange800',
      primary: '$orange500',
      primaryDark: '$orange200',
      primaryShadow: '$orange800',
      secondaryLight: '$lightGreen800',
      secondary: '$lightGreen500',
      secondaryDark: '$lightGreen200',
      secondaryShadow: '$lightGreen900',
    },
    space: {},
    fonts: {}
  }
})
