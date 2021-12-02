import { CloseButton, Flex, Select, SelectProps, Link, useColorModeValue, Text } from '@chakra-ui/react'
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
    onClickDelete?: () => void
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

export function CartItem({ id, nome, categoria, descricao, imagemUrl, preco, quantidade, onChangeQuantity, onClickDelete }: CartItemProps) {

    return (
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <CartProductMeta
                name={nome}
                description={descricao}
                image={imagemUrl}
            //isGiftWrapping={isGiftWrapping}
            />

            {/* Desktop */}
            <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
                <QuantitySelect
                    value={quantidade}
                    onChange={(e) => {
                        onChangeQuantity?.(+e.currentTarget.value)
                    }}
                />
                <Text>{preco}</Text>
                <CloseButton aria-label={`Delete ${nome} from cart`} onClick={onClickDelete} />
            </Flex>

            {/* Mobile */}
            <Flex
                mt="4"
                align="center"
                width="full"
                justify="space-between"
                display={{ base: 'flex', md: 'none' }}
            >
                <Link fontSize="sm" textDecor="underline">
                    Delete
                </Link>
                <QuantitySelect
                    value={quantidade}
                    onChange={(e) => {
                        onChangeQuantity?.(+e.currentTarget.value)
                    }}
                />
                <Text>{preco}</Text>
            </Flex>
        </Flex>
    )
}