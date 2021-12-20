import { Badge, Box, Image, Stack, Text, } from '@chakra-ui/react'

interface CartProductProps {
  nome: string
  imagemURL: string
  categoria: string
}

export const CartProductMeta = ({ nome, imagemURL, categoria }: CartProductProps) => {

  return (
    <Stack direction="row" spacing="8" width="full">
      <Image
        rounded="2xl"
        width="200px"
        height="100px"
        fit="fill"
        src={imagemURL}
        alt={nome}
        draggable="false"
      />
      <Box pt="4">
        <Stack spacing="1rem">
          <Text fontWeight="medium">{nome}</Text>
        </Stack>
        <Badge variant='subtle' colorScheme='cyan'>
          {categoria}
        </Badge>
      </Box>
    </Stack>
  )
}