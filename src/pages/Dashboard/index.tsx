import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Table, Tbody, Td, Th, Thead, Tr,Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";

export function Dashboard() {
    return (
        <>
            <Header />
            <Box>

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                   

                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Usuários
                            </Heading>

                            <Link href="/users/create" passHref>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="pink"
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
                                    <Th>Data de cadastro</Th>
                                    <Th width="6"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={["2", "4", "6"]}>
                                        <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Luan Lima</Text>
                                            <Text fontSize="sm" color="gray.300">
                                                luan@yata.dev
                                            </Text>
                                        </Box>
                                    </Td>
                                    <Td>19 de Abril, 2021</Td>
                                    <Td>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            leftIcon={<Icon as={RiPencilLine} />}
                                        >
                                            Editar
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}