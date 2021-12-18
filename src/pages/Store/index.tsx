import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header";
import { Container, ProductList } from "./styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router";
import { Filter } from "../../components/Products/Filter";
import { ProductItem } from "../../components/Products/ProductItem";

export function Store() {

    const { isAuth } = useContext(AuthContext)
    const navigate = useNavigate();

    interface Product {
        id: number;
        categoria: string;
        imagemUrl: string;
        descricao: string;
        nome: string;
        preco: number;
        quantidade?: number;
    }
    
    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [])
    
    const { products } = useContext(ProductsContext)
  
    return (
        <>
            <Header />
            <Filter />
            <Container>
                <ProductList>
                    {products.map(product => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </ProductList>
            </Container>
        </>
    )
}


