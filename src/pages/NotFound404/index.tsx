import { Box, Button, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export function NotFound404() {
  return (
    <Box>
      <Box
        maxW="2xl"
        mx="auto"
        px={8}
        py={16}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          Pagina não encontrada
        </Heading>
        <RouterLink to="/store">
          <Button mt="4rem" as="a" size="lg" colorScheme="teal" fontWeight="bold">
            Pagina Inicial
          </Button>
        </RouterLink>
      </Box>
    </Box>
  )
}