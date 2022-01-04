import { toast } from 'react-toastify';
import { createContext, ReactNode, useContext, useState } from 'react'
import { ProductsContext } from './ProductsContext';
import { api } from '../services/api';

interface Product {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
    quantidade: number;
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
    handleEncomenda: () => Promise<void>;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

    const { products } = useContext(ProductsContext)

    const [cart, setCart] = useState<Product[]>(() => {
        const localStorageCart = localStorage.getItem('@Cart');

        if (localStorageCart) {
            return JSON.parse(localStorageCart);
        }

        return [];
    });

    function addProduct(id: number) {
        try {

            const productExists = products.find(product => product.id === id);

            if (!productExists) {
                return toast.error('Produto não disponivel')
            }

            const productAlreadyInCart = cart.find(product => product.id === productExists.id);

            if (productAlreadyInCart) {
                return toast.error(`O produto ${productAlreadyInCart.nome} já existe no carrinho`)
            }

            const product = {
                ...productExists,
                quantidade: 1
            }

            setCart([...cart, product])
            localStorage.setItem('@Cart', JSON.stringify(cart))

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

    function updateProductQuantity({
        id,
        quantidade,
    }: UpdateProductAmount) {
        try {

            if (quantidade <= 0) {
                return;
            }

            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === id);

            if (productExists) {
                productExists.quantidade = quantidade;
                setCart(updatedCart);
                localStorage.setItem('@Cart', JSON.stringify(updatedCart))
            } else {
                toast.error('Erro na alteração de quantidade do produto');
            }
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };

    async function handleEncomenda() {

        const localStorageCart = localStorage.getItem('@Cart');

        if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
        }

        if (cart.length <= 0) {
            
        }

        const linhas = cart.map(produto => {
            return {
                'produtoId': produto.id,
                'quantidade': produto.quantidade
            }
        })

        const data = {
            linhas
        }

        try {

            await api.post('/encomenda', data)

            toast.success('A sua encomenda ')

            setCart([])
            localStorage.removeItem("@Cart");

        } catch (error) {
            toast.error(`${error}`)
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductQuantity, handleEncomenda }}
        >
            {children}
        </CartContext.Provider>
    );
}

