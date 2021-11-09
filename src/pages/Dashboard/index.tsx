import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/Auth"
import { api } from "../../services/api"
import { ProductList } from "./styles";

export function Dashboard() {


    const { user,isAuth } = useContext(AuthContext)

    console.log(user,isAuth)

    const [products, setProducts] = useState<Product[]>([]);

    interface Product {
        id: number;
        categoria: string;
        imagemUrl: string;
        descricao: string;
        nome: string;
        preco: number;
    }

    const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });


    useEffect(() => {
        async function loadProducts() {
          const productsResponse = await api.get<Product[]>("/produto");
    
          const productsFormatted = productsResponse.data.map((product) => {
            return {
              ...product,
              priceFormatted: formatPrice(product.preco),
            };
          });
    
          setProducts(productsFormatted);
        }
    
        loadProducts();
      }, []);

    return (
        <ProductList>
            {products.map((product) => (
                <li key={product.id}>
                    <img src={product.imagemUrl} alt={product.nome} />
                    <strong>{product.nome}</strong>
                    <span>{product.preco}</span>
                    <button
                        type="button"
                        data-testid="add-product-button"
                    //onClick={() => handleAddProduct(product.id)}
                    >
                        <div data-testid="cart-product-quantity">
                            {/* <MdAddShoppingCart size={16} color="#FFF" /> */}

                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    )
}


