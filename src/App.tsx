import { AppRoutes } from "./routes";

import { GlobalStyle } from './styles/global';

import { AuthProvider } from "./contexts/Auth";
import { CartProvider } from './contexts/Cart';
import { ProductsProvider } from "./contexts/ProductsContext";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </>
  );
}

