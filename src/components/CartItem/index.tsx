import { Flex, Select, SelectProps, useColorModeValue, Text, Button, Stack, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import {IoIosArrowUp} from 'react-icons/io'
import { CartContext } from '../../contexts/CartContext'
import { CartProductMeta } from '../CartMeta'


type CartItemProps = {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
    quantidade: number;
    onChangeQuantity?: (quantity: number) => void
    //onClickGiftWrapping?: () => void
    //onClickDelete?: () => void
}

const QuantitySelect = (props: SelectProps) => {
    return (
        <Select
            maxW="64px"
            aria-label="Select quantity"
            focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            {...props}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </Select>
    )
}


export function CartItem({ id, nome, categoria, descricao, imagemUrl, preco, quantidade, onChangeQuantity }: CartItemProps) {

    const { removeProduct } = useContext(CartContext)

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <CartProductMeta
                name={nome}
                description={descricao}
                image={imagemUrl}
                categoria={categoria}
            />

            <Flex width="full" justify="space-between" align="center">
                <Stack spacing={4} direction='row' align='center'>

                    <IconButton aria-label="aumentar" variant='ghost' color="cyan.300" icon={<FiPlusCircle />} />

                    <QuantitySelect
                        value={quantidade}
                        onChange={(e) => {
                            onChangeQuantity?.(+e.currentTarget.value)
                        }}
                    />

                    <IconButton aria-label="aumentar" variant='ghost' color="cyan.300" icon={<IoIosArrowUp />} />
                </Stack>
                <Text>{preco}</Text>
                <Button aria-label={`Delete ${nome} from cart`} onClick={() => removeProduct(id)} />
            </Flex>
        </Flex>
    )
}