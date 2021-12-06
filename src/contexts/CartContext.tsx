import { toast } from 'react-toastify';
import { createContext, ReactNode, useContext, useState } from 'react'
import { ProductsContext } from './ProductsContext';

interface Product {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
    quantidade: number;
}

interface Linha {
    produtoId: number,
    quantidade: number
}

interface UpdateProductAmount {
    id: number;
    quantidade: number;
}


interface CartProviderProps {
    children: ReactNode
}

interface CartContextData {
    cart: Product[];
    addProduct: (id: number) => void;
    removeProduct: (id: number) => void;
    updateProductQuantity: ({ id, quantidade }: UpdateProductAmount) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

    const products = useContext(ProductsContext)

    const [cart, setCart] = useState<Product[]>([]);


    function addProduct(id: number) {
        try {
            const productExists = products.find(products => products.id === id);

            if (!productExists) {
                return toast.error('Produto não disponivel')
            }

            const productAlreadyInCart = cart.find(products => products.id === productExists.id);

            if (productAlreadyInCart) {
                return toast.error(`O produto ${productAlreadyInCart.nome} já existe no carrinho`)
            }

            const product = {
                ...productExists,
                quantidade: 1
            }

            setCart([...cart, product]);
        } catch {
            return toast.error(`Erro, por favor tente mais tarde`)
        }
    };

    function removeProduct(id: number) {
        try {
            const updatedCart = cart.filter(produto => produto.id !== id)
            setCart(updatedCart)
            localStorage.setItem('@Cart', JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro ao remover produto')
        }
    };

    function updateProductQuantity ({
        id,
        quantidade,
    }: UpdateProductAmount) {
        try {
            if (quantidade <= 0) {
                return;
            }

            //const stock = await api.get(`/stock/${productId}`);

            // const stockAmount = stock.data.amount;

            // if (amount > stockAmount) {
            //     toast.error('Quantidade solicitada fora de estoque');
            //     return;
            // }

            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === id);

            if (productExists) {
                productExists.quantidade = quantidade;
                setCart(updatedCart);
            } else {
                toast.error('Erro na alteração de quantidade do produto');
            }
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };


    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
}
