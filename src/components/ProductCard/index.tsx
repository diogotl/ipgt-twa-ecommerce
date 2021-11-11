import { useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { api } from '../../services/api';

import { Container } from './styles';

interface ProductCardProps {
  product: IProduct
}

interface IProduct {
  id: number;
  categoria: string;
  imagemUrl: string;
  descricao: string;
  nome: string;
  preco: number;
}


export function ProductCard({ product }: ProductCardProps) {

  //const [isAvailable, setIsAvailable] = useState(true);

  // const toggleAvailable = async () => {
  //   await api.put(`/foods/${food.id}`, {
  //     ...food,
  //     available: !isAvailable,
  //   });
  //   setIsAvailable(!isAvailable);
  // }

  // const setEditingFood = () => {
  //   handleEditFood(food);
  // }

  function handleAddProduct(id: number) {
    console.log(id);
  }

  return (
    <Container>
      <header>
        <img src={product.imagemUrl} alt={product.nome} />
      </header>

      <section>
        <h2>{product.nome}</h2>
        <p>{product.descricao}</p>
        <p className="price">
          <b>{product.preco}</b>€
        </p>
      </section>

      <section>
        <div className="icon-container">
        <button
            type="button"
            data-testid="add-product-button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
                {/* {cartItemsAmount[product.id] || 0} */}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
          {/* <button
            type="button"
            className="icon"
            onClick={setEditingFood}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button> */}

          {/* <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button> */}
        </div>

      </section>
    </Container>
  );
}