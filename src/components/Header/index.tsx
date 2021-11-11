import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
//import { useCart } from '../../hooks/useCart';

export function Header() {

  //const { cart } = useCart();
  //const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <h1>whisla</h1>
        {/* <img src={logo} alt="Rocketshoes" /> */}
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {/* {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} */}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
