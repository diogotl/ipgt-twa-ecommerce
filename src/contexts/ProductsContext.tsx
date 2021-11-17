import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Product {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
}

interface ProductsProviderProps {
    children: ReactNode;
}

export const ProductsContext = createContext<Product[]>([])

export function ProductsProvider({ children }: ProductsProviderProps) {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts() {

            const response = await api.get('/produto')
            setProducts(response.data)

        }
        getProducts();
    }, [])


    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )

}