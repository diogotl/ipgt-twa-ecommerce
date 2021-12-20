import { Box, Button, Heading, Text } from '@chakra-ui/react'

export function NotFound404() {
  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          Pagina não encontrada
        </Heading>
        <Text mt="4" fontSize="lg">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
          sagittis vel nulla nec.
        </Text>
        <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
          Pagina Inicial
        </Button>
      </Box>
    </Box>
  )
}