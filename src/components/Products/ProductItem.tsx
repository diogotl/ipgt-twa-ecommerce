import { AspectRatio, Button, Stack,Text,Image } from "@chakra-ui/react";
import { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../../contexts/CartContext";

interface Product {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
    quantidade?: number;
}

export function ProductItem({ id, nome, imagemUrl, categoria, descricao, preco }: Product) {

    const { addProduct } = useContext(CartContext)

    function handleAddProduct(id: number) {
        addProduct(id);
    }

    return (
        <Stack key={id} padding="1rem" borderRadius="xl" bgColor="gray.800" spacing={4}>
            <AspectRatio ratio={4 / 3}>
          <Image
            src={imagemUrl}
            alt={nome}
            draggable="false"
            borderRadius="xl"
          />
        </AspectRatio>
            <Stack spacing="2">
                <Text fontWeight="medium" color='gray.400'>
                    {nome}
                </Text>
                <Text fontSize="large" fontWeight="bold" color='gray.300'>{preco} €</Text>
            </Stack>
            <Text>{descricao}</Text>
            <Button  colorScheme="cyan" type="button" isFullWidth onClick={() => handleAddProduct(id)}>
                Adicionar ao carrinho
            </Button>
        </Stack>
    )
}