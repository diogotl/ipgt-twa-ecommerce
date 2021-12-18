import {
    Box,
    Flex,
    HStack,
    Stack,
    Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartItem } from '../../components/Cart/CartItem'
import { CartOrder } from '../../components/CartOrder'
import { CartContext } from '../../contexts/CartContext'
import { Header } from '../../components/Header'

export function CheckOut() {

    const { cart } = useContext(CartContext)

    return (
        <>
            <Header />
            <Box
                maxW="1280px"
                mx="auto"
                px={{ base: '8', md: '12' }}
                py={{ base: '8', md: '12' }}
            >
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing="4rem"
                >
                    <Stack spacing={{ base: '8', md: '10' }} flex="3">
                        <Text fontSize="2xl" fontWeight="extrabold">
                            Carrinho ({cart.length > 0 ? cart.length : <Text as="span" fontWeight="medium" textColor="cyan.300">  Sem </Text>} <Text as="span" textColor="cyan.300">itens no carrinho</Text> )
                        </Text>

                        <Stack spacing="6">
                            {cart.map((produto) => (
                                <CartItem key={produto.id} {...produto} />
                            ))}
                        </Stack>
                    </Stack>

                    <Flex direction="column" align="center" flex="1">
                        <CartOrder />
                        <HStack mt="6" fontWeight="semibold">
                            <Text>ou</Text>
                            <Link to="/store">
                                <Text color='cyan.300'>
                                    Volte para a loja
                                </Text>
                            </Link>
                        </HStack>
                    </Flex>
                </Stack>
            </Box>
        </>
    )
}