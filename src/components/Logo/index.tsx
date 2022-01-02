import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text
      fontSize='5xl'
      fontWeight='bold'
      letterSpacing='tight'
    >
      wish
      <Text as='span' color='cyan.300'>la</Text>
    </Text>
  )
}