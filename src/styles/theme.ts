import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto, system-ui, sans-serif',
    body: 'Roboto, system-ui, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.50'
      }
    }
  }
})