import { Flex, Text, Stack, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { IoChevronDownSharp, IoChevronUpSharp, IoCloseSharp } from 'react-icons/io5'
import { CartContext } from '../../../contexts/CartContext'
import { CartProductMeta } from '../../CartMeta'


interface Product {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
    quantidade: number;
}

export function CartItem(product: Product) {

    const { removeProduct, updateProductQuantity } = useContext(CartContext)

    function handleProductIncrement(product: Product) {
        updateProductQuantity({ id: product.id, quantidade: product.quantidade + 1 });
    }

    function handleProductDecrement(product: Product) {
        updateProductQuantity({ id: product.id, quantidade: product.quantidade - 1 });
    }

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <CartProductMeta
                nome={product.nome}
                imagemURL={product.imagemUrl}
                categoria={product.categoria}
            />

            <Flex width="full" justify="space-between" align="center" ml="3rem">
                <Stack spacing={4} direction='row' align='center'>
                    <IconButton aria-label="aumentar" variant='ghost' color="cyan.300" disabled={product.quantidade <= 1} icon={<IoChevronDownSharp />} onClick={() => handleProductDecrement(product)} />
                    <Text>{product.quantidade}</Text>
                    <IconButton aria-label="aumentar" variant='ghost' color="cyan.300" icon={<IoChevronUpSharp />} onClick={() => handleProductIncrement(product)} />
                </Stack>
                <Text>{product.preco}</Text>
                <IconButton aria-label={`Delete ${product.nome} from cart`} variant='ghost' icon={<IoCloseSharp />} onClick={() => removeProduct(product.id)} />
            </Flex>
        </Flex>
    )
}