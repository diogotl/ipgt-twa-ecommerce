import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart, } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';
//RiAdminFill

import { Container, Content, Cart, HUE } from './styles';
//import { useCart } from '../../hooks/useCart';

export function Header() {

  //const { cart } = useCart();
  //const cartSize = cart.length;

  return (
    <Container>
      <Content>
        <Link to="/">
          <h1>whisla</h1>
          {/* <img src={logo} alt="Rocketshoes" /> */}
        </Link>

        <Cart>

          <HUE to="/cart">
            <HiOutlineShoppingCart size={24} color="#FFF" />
            <div>
              <strong>Meu carrinho</strong>
              <span data-testid="cart-size">
                {/* {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} */}
              </span>
            </div>
            <HiOutlineShoppingCart size={24} color="#FFF" />
          </HUE>
        </Cart>
      </Content>
    </Container>
  );
};
