import { Flex, Box, Heading, Link, Stack } from "@chakra-ui/layout"
import { Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/Header"
import { SideNav } from "../../components/SideNav"
import { ProductsContext } from "../../contexts/ProductsContext"
import { VscEdit } from "react-icons/vsc";

export function Products() {

    const products = useContext(ProductsContext)

    return (
        <>
            <Header />
            <Flex>
                <Flex w="100%" my="10" maxW="1480px" mx="auto" px="10" >
                    <SideNav />
                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Lista de produtos
                            </Heading>

                            <Link href="/users/create" passHref>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="cyan"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                >
                                    Criar novo
                                </Button>
                            </Link>
                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["2", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="pink" />
                                    </Th>
                                    <Th>Usuário</Th>

                                    <Th width="6"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products.map(product => {
                                    return (
                                        <Tr key={product.id}>
                                            <Td px={["4", "4", "6"]}>
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">{product.nome}</Text>
                                                    <Text fontWeight="sm" color="gray.300">{product.categoria}</Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Stack direction="row">

                                                    <Button as="a" size="sm" fontSize="sm" colorScheme="yellow" leftIcon={<Icon as={VscEdit} fontSize="16" />}>Editar</Button>
                                                    <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>Apagar</Button>
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