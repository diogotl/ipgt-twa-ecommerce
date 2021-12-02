import { toast } from 'react-toastify';
import { createContext, ReactNode, useState } from 'react'

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

interface CartProviderProps {
    children: ReactNode
}

interface CartContextData {
    cart: Linha[];
    addProduct: (id: number) => void;
    removeProduct: (id: number) => void;
    //updateProductQuantity: ({ id, amount }: UpdateProductAmount) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {

    const [cart, setCart] = useState<Linha[]>([]);

    function addProduct(id: number) {
        try {

            const updatedCart = [...cart];
            const productExists = updatedCart.find(produto => produto.produtoId === id);

            if(productExists) {
                return toast.error('O produto já se encontra no carrinho')
            }

            const product = {
                produtoId: id,
                quantidade: 1
            }

            setCart([...cart, product]);

            console.log(cart)
        } catch {
            // TODO
        }
    };

    const removeProduct = (id: number) => {
        try {
            const updatedCart = cart.filter(produto => produto.produtoId === id)
            setCart(updatedCart)
            localStorage.setItem('@Cart', JSON.stringify(updatedCart))
        } catch {
            toast.error('sadsadsadasdsa')
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct }}
        >
            {children}
        </CartContext.Provider>
    );
}

