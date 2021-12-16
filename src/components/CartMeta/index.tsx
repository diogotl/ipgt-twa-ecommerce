import {
  Badge,
  Box,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

interface CartProductProps {
  nome: string
  imagemURL: string
  categoria: string
}

export const CartProductMeta = ({ nome, imagemURL, categoria }: CartProductProps) => {

  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={imagemURL}
        alt={nome}
        draggable="false"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{nome}</Text>
        </Stack>
        <Badge variant='subtle' colorScheme='cyan'>
          {categoria}
        </Badge>
      </Box>
    </Stack>
  )
}