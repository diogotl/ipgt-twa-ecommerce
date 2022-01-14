import { useContext } from "react"

import { Button, Icon, Table, Thead, Tr, Th, Tbody, Td, Text, Badge, Flex, Box, Heading, Stack } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { VscEdit } from "react-icons/vsc";

import { Header } from "../../components/Header"
import { ProductsContext } from "../../contexts/ProductsContext"
import { SideNavGestao } from "../../components/SideNav/SideNavGestao"

import { Link as RouterLink } from 'react-router-dom'

export function Products() {

    const { products, deleteProduct } = useContext(ProductsContext)

    return (
        <>
            <Header />
            <Flex>
                <Flex w="100%" my="10" maxW="1480px" mx="auto" px="10" >
                    <SideNavGestao />
                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Lista de produtos
                            </Heading>
                            <RouterLink to="/dashboard/products/create">
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="cyan"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                >
                                    Criar novo
                                </Button>
                            </RouterLink>
                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th>Produto</Th>
                                    <Th width="6" />
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products.map(product => {
                                    return (
                                        <Tr key={product.id}>                                
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">{product.nome}</Text>
                                                    <Badge variant='subtle' colorScheme='cyan'>
                                                        {product.categoria}
                                                    </Badge>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Stack direction="row">
                                                    <Button as="a" size="sm" fontSize="sm" colorScheme="yellow" leftIcon={<Icon as={VscEdit} fontSize="16" />}>Editar</Button>
                                                    <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiPencilLine} fontSize="16" />} onClick={() => deleteProduct(product.id)}>Apagar</Button>
                                                </Stack>
                                            </Td>
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}