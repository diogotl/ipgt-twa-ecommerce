import { AppRoutes } from "./routes";

import { GlobalStyle } from './styles/global';

import { AuthProvider } from "./contexts/Auth";
import { CartProvider } from './contexts/Cart';
import { ProductsProvider } from "./contexts/ProductsContext";
import { ChakraProvider, } from "@chakra-ui/react";
import { theme } from './styles/theme'

export function App() {
  return (
    <>
      <GlobalStyle/>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <ProductsProvider>
              <CartProvider>
                <AppRoutes />
              </CartProvider>
            </ProductsProvider>
          </AuthProvider>
        </ChakraProvider>
    </>
  );
}

