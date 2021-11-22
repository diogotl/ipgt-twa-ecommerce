import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header";
import { Container, ProductList } from "./styles";
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/Cart";

export function Store() {

    // interface Product {
    //     id: number;
    //     categoria: string;
    //     imagemUrl: string;
    //     descricao: string;
    //     nome: string;
    //     preco: number;
    // }

    // const [products, setProducts] = useState<Product[]>([]);
    
    
    // useEffect(() => {
        //     async function getProducts() {
            
            //         const response = await api.get('/produto')
            //         setProducts(response.data)
            
            //     }
            //     getProducts();
            // }, [])
            
    const { addProduct, cart } = useContext(CartContext)
    
    const products = useContext(ProductsContext)

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
                                <div data-testid="cart-product-quantity">
                                    <MdAddShoppingCart size={16} color="#FFF" />
                                    {/* {cartItemsAmount[product.id] || 0} */}
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


