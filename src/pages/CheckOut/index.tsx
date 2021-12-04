import {
    Box,
    Flex,
    Heading,
    HStack,
    Stack,
    Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartItem } from '../../components/CartItem'
import { CartOrder } from '../../components/CartOrder'
import { CartContext } from '../../contexts/CartContext'


export function CheckOut() {

    const { cart } = useContext(CartContext)

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
                        {cart.map((produto) => (
                            <CartItem key={produto.id} {...produto} />
                        ))}
                    </Stack>
                </Stack>

                <Flex direction="column" align="center" flex="1">
                    <CartOrder />
                    <HStack mt="6" fontWeight="semibold">
                        <p>ou</p>
                        <Link to="/store">
                            <Text color='cyan.300'>
                                Volte para a loja
                            </Text>
                        </Link>
                    </HStack>
                </Flex>
            </Stack>
        </Box>

    )
}