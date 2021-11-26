import { AppRoutes } from "./routes";
import { AuthProvider } from "./contexts/Auth";
import { CartProvider } from './contexts/Cart';
import { ProductsProvider } from "./contexts/ProductsContext";
import { ChakraProvider, } from "@chakra-ui/react";
import { theme } from './styles/theme'
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <ProductsProvider>
              <CartProvider>
                <AppRoutes />
              </CartProvider>
            </ProductsProvider>
          </AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

