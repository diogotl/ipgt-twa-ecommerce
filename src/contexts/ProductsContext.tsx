import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface Product {
    id: number;
    categoria: string;
    imagemUrl: string;
    descricao: string;
    nome: string;
    preco: number;
    quantidade?: number;
}

interface ProductsProviderProps {
    children: ReactNode;
}

interface CartContextData {
    products: Product[];
    createProduct(data: Product): Promise<void>;
    deleteProduct(id: number): Promise<void>;
}

export const ProductsContext = createContext<CartContextData>({} as CartContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts() {

            const response = await api.get('/produto')
            setProducts(response.data)

        }
        getProducts();
    }, [products])

    async function createProduct({ id, preco, nome, categoria, imagemUrl, descricao }: Product) {

        try {
            await api.post('/produto', {
                id,
                preco,
                nome,
                categoria,
                imagemUrl,
                descricao
            })



        } catch (error) {
            toast.error(`${error}`)
        }
    }

    async function deleteProduct(id: number) {

        try {
            await api.delete(`/produto/${id}`)

        } catch (error) {
            toast.error(`${error}`)
        }
    }


    return (
        <ProductsContext.Provider value={{ products, createProduct, deleteProduct }} >
            {children}
        </ProductsContext.Provider>
    )
}