import { FormEvent, useContext, useState } from 'react';

import { Flex, Box, Heading, VStack, SimpleGrid, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input'
import { ProductsContext } from '../../contexts/ProductsContext';
import { SideNavGestao } from '../../components/SideNav/SideNavGestao';

export function ProductsForm() {

    const [id, setId] = useState('')
    const [preco, setPreco] = useState('')
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')
    const [descricao, setDescricao] = useState('')

    const { createProduct } = useContext(ProductsContext)

    async function handleCreateProduct(event: FormEvent) {

        event.preventDefault()

        const isIdANumber = Number(id)
        const isPrecoNumber = Number(preco)

        if (!isIdANumber || !Number(preco)) {
            toast.error('Os campos ID e Preço têm de ser do tipo número')
            return
        }

        if (nome.length <= 0 || categoria.length <= 0 || imagemUrl.length <= 0 || descricao.length <= 0) {
            toast.error('Todos os campos são de preenchimento obrigatorio')
            return
        }

        const data = {
            id: isIdANumber,
            preco: isPrecoNumber,
            nome,
            categoria,
            imagemUrl,
            descricao
        }

        await createProduct(data)

        toast.success('Produto adicionado com sucesso,irá ser rederecionado')

        return (
            <Link to="/products" />
        )
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="10" maxW="1480px" mx="auto" px="10" >
                <SideNavGestao />
                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="2rem" onSubmit={handleCreateProduct}>
                    <Heading size="lg" fontWeight="normal" mb='1rem'>
                        Lista de produtos
                    </Heading>
                    <VStack spacing="1.2rem">
                        <SimpleGrid minChildWidth="300px" spacing="2rem" w="100%" dir="horizontal">
                            <Input label="ID do produto" name="id" value={id} onChange={e => setId(e.target.value)} />
                            <Input label="Preço" name="preco" value={preco} onChange={e => setPreco(e.target.value)} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="300px" spacing="2rem" w="100%" dir="horizontal">
                            <Input label="Nome" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
                            <Input label="Categoria" name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} />
                        </SimpleGrid>
                        <Input label="Link da imagem" name="imagemURL" type="url" value={imagemUrl} onChange={e => setImagemUrl(e.target.value)} />
                        <Input label="Descrição" name="descricao" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </VStack>
                    <Flex mt="1.4rem" justify="flex-end">
                        <Button size="lg" type="submit" mt="2rem" colorScheme="whiteAlpha">
                            <Link to='/dashboard'>Cancelar</Link>
                        </Button>
                        <Button ml="2rem" size="lg" type="submit" mt="2rem" color="gray.900" bgColor="teal.400">Criar</Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}