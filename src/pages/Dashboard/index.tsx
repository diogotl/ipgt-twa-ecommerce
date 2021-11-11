import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { AuthContext } from "../../contexts/Auth"
import { api } from "../../services/api"
import { ProductContainer } from "./styles";

export function Dashboard() {

    interface Product {
        id: number;
        categoria: string;
        imagemUrl: string;
        descricao: string;
        nome: string;
        preco: number;
    }

    const [products, setProducts] = useState<Product[]>([]);

    //const { user, isAuth } = useContext(AuthContext)
    //console.log(user, isAuth)

    useEffect(() => {
        async function getProducts() {

            const response = await api.get('/produto')
            setProducts(response.data)

        }
        getProducts();
    }, [])


    return (
        <>
            <Header />
            <ProductContainer>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </ProductContainer>
        </>
    )
}


