import { Flex, Box, Heading, Divider, VStack, SimpleGrid } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { SideNav } from '../../components/SideNav';
import { Input } from '../../components/Form/Input'

export function ProductsForm() {

    return (
        <Box>
            <Header />
            <Flex w="100%" my="10" maxW="1480px" mx="auto" px="10" >
                <SideNav />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">
                        Lista de produtos
                    </Heading>
                    <Divider marginBottom="1rem"/>
                    <VStack spacing="1rem">
                        <SimpleGrid minChildWidth="300px" spacing="2rem" w="100%" dir="horizontal"> 
                            <Input label="ID do produto" name="id"/>
                            <Input label="Preço" name="preco"/>
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    )
}