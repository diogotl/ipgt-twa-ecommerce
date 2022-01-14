import { Box, Button, Flex, Heading, Icon, Link, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { SideNavGestao } from "../../components/SideNav/SideNavGestao";
import { api } from "../../services/api";

interface User {
    nome: string;
    password: string;
    utilizador: string;
}

export function Users() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        async function getUsers() {

            const { data } = await api.get('/conta')
            setUsers(data)

        }
        getUsers();
    }, [])

    return (
        <>
            <Header />
            <Flex>
                <Flex w="100%" my="10" maxW="1480px" mx="auto" px="10" >
                    <SideNavGestao />
                    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Lista de utilizadores
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
                                    <Th>Utilizador</Th>
                                    <Th width="6"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users.map(user => {
                                    return (
                                        <Tr key={user.utilizador}>
                                          
                                            <Td>
                                                <Box>
                                                    <Text fontWeight="bold">{user.nome}</Text>
                                                    <Text fontWeight="sm" color="gray.300">{user.utilizador}</Text>
                                                </Box>
                                            </Td>
                                            <Td>
                                                <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>Apagar</Button>
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