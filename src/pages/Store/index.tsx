import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header";
import { Container, ProductList } from "./styles";
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/Auth";
import { useNavigate } from "react-router";



export function Store() {

    const { isAuth } = useContext(AuthContext)
    const navigate = useNavigate();


    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])


    const { products } = useContext(ProductsContext)

    const { addProduct, updateProductQuantity } = useContext(CartContext)

    function handleAddProduct(id: number) {
        addProduct(id);
    }

    return (
        <>
            <Header />
            <Container>
                <ProductList>
                    {products.map(product => (
                        <li key={product.id}>
                            <img src={product.imagemUrl} alt={product.nome} />
                            <strong>{product.nome}</strong>
                            <h6>{product.descricao}</h6>
                            <span>{product.preco} €</span>
                            <button
                                type="button"
                                onClick={() => handleAddProduct(product.id)}
                            >
                                <div>
                                    <MdAddShoppingCart size={16} color="#FFF" />

                                </div>

                                <span>Adicionar ao carrinho</span>
                            </button>
                        </li>
                    ))}
                </ProductList>

            </Container>
        </>
    )
}


