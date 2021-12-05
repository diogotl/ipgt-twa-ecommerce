import {
  Badge,
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'

interface CartProductProps {
  nome: string
  imagemURL: string
  categoria: string
}

export const CartProductMeta = ({ nome, imagemURL, categoria }: CartProductProps) => {
  //const { image, nome, description, categoria } = props
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
      //loading="lazy"
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