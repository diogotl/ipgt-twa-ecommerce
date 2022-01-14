import { useContext, useEffect } from 'react'
import { Box, Flex, Heading, Stack, Table, Tbody, Td, Th, Thead, Tr, Text, Badge } from '@chakra-ui/react'

import { CartContext } from '../../contexts/CartContext'

import { SideNavEncomenda } from '../../components/SideNav/SideNavEncomenda'
import { Header } from '../../components/Header'

export function Orders() {

    const { order, getOrders } = useContext(CartContext)

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <>
            <Header />
            <Box w="100%" my="10" maxW="1480px" mx="auto" px="10" >
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing="4rem"
                >

                    <SideNavEncomenda />

                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Lista de encomendas
                            </Heading>
                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th color="gray.300" >Data</Th>
                                    <Th color="gray.300" >Produtos</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {order.map(order => {
                                    return (
                                        <Tr key={order.dataCompra}>
                                            <Td>
                                                <Text fontWeight="bold">{order.dataCompra}</Text>
                                            </Td>

                                            {order.linhas.map(linha => {
                                                return (

                                                    <Tr>
                                                        <Td>
                                                            <Text color='teal.300' fontSize="md">{linha.quantidade}</Text>
                                                        </Td>
                                                        <Td>
                                                            <Text>{linha.produtoDTO.nome}</Text>
                                                        </Td>
                                                        <Td>
                                                            <Badge variant='subtle' colorScheme='cyan'>{linha.produtoDTO.categoria}</Badge>
                                                        </Td>
                                                    </Tr>

                                                )
                                            })}
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}