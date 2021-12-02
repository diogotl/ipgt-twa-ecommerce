import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartItem } from '../../components/CartItem'
import { CartOrder } from '../../components/CartOrder'
import { ProductsContext } from '../../contexts/ProductsContext'


export function CheckOut() {

    const products = useContext(ProductsContext)

    return (
        <Box
            maxW={{ base: '3xl', lg: '7xl' }}
            mx="auto"
            px={{ base: '8', md: '12' }}
            py={{ base: '8', md: '12' }}
        >
            <Stack
                direction={{ base: 'column', lg: 'row' }}
                align={{ lg: 'flex-start' }}
                spacing={{ base: '8', md: '16' }}
            >
                <Stack spacing={{ base: '8', md: '10' }} flex="2">
                    <Heading fontSize="2xl" fontWeight="extrabold">
                        Shopping Cart (3 items)
                    </Heading>

                    <Stack spacing="6">
                        {products.map((product) => (
                            <CartItem key={product.id} {...product} />
                        ))}
                    </Stack>
                </Stack>

                <Flex direction="column" align="center" flex="1">
                    <CartOrder />
                    <HStack mt="6" fontWeight="semibold">
                        <p>or</p>
                        <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
                    </HStack>
                </Flex>
            </Stack>
        </Box>

    )
}