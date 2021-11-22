import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export interface Product {
    id: number;
    title?: string;
    price?: number;
    image?: string;
    quantidade: number;
  }

export interface Stock {
    id: number;
    amount: number;
  }

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {

  const [cart, setCart] = useState<Product[]>(() => {

    const localCart = localStorage.getItem('@Cart');

    if (localCart) {
      return JSON.parse(localCart);
    }

    return [];
  });


  const addProduct = async (id: number) => {
    try {
      const updatedCart = [...cart];

      const productExists = updatedCart.find(product => product.id === id);

      const currentProductQty = productExists ? productExists.quantidade : 0;
      const quantidade = currentProductQty + 1;


      if (productExists) {
       // productExists.qu = amount;
      } else {
        const product = updatedCart.find(product => product.id === id);

        const newProduct = {
          ...product,
          quantidade,
        }
        //updatedCart.push(newProduct)
      }

      setCart(updatedCart);
    } catch {
      toast.error('Erro na adição do produto');
    }
  };


  return (
    <CartContext.Provider
      value={{ cart, addProduct}}
    >
      {children}
    </CartContext.Provider>
  );
}