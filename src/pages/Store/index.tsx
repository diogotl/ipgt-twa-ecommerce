import { useContext, useEffect, useState } from "react"
import { Flex, HStack, Input, Select, SimpleGrid } from '@chakra-ui/react'

import { ProductsContext } from "../../contexts/ProductsContext";

import { Header } from "../../components/Header";
import { ProductItem } from "../../components/Products/ProductItem";
import { AuthContext } from "../../contexts/Auth";


export function Store() {

    const { products, getProducts } = useContext(ProductsContext)

    // const [productList, setProductList] = useState(products)
    // const [searchByName, setSearchByName] = useState('')
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     if (!searchByName) {
    //         setProductList(productList)
    //     } else {
    //         const filteredProductList = products.filter((produto) => produto.nome.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase()))
    //         setProductList(filteredProductList)
    //     }
    // }, [searchByName])

    const { isAuth } = useContext(AuthContext)

    useEffect(() => {
        if (isAuth) {
            getProducts() 
        }

    }, [isAuth])

    return (
        <>
            <Header />
            <Flex w="100%" my="3rem" maxWidth={1200} mx="auto" bgColor="gray.800" padding="2rem" borderRadius="xl">
                <HStack spacing={8} flexDirection="row" alignItems="flex-end">
                    {/* <Input as="input" colorScheme="teal" placeholder='Procurar por nome' value={searchByName} onChange={e => setSearchByName(e.target.value)} /> */}
                    <Select as="select" colorScheme="teal" placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </HStack>
            </Flex>
            <Flex w="100%" my="10" maxW="1280px" mx="auto" px="10" >
                <SimpleGrid columns={3} spacing={8}>
                    {products.map(product => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}



