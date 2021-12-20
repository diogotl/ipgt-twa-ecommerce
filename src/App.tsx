import { AppRoutes } from "./routes";
import { AuthProvider } from "./contexts/Auth";
import { CartProvider } from './contexts/CartContext';
import { ProductsProvider } from "./contexts/ProductsContext";
import { ChakraProvider, } from "@chakra-ui/react";
import { theme } from './styles/theme'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <CartProvider>
              <ProductsProvider>
                <CartProvider>
                  <AppRoutes />
                  <ToastContainer autoClose={5000} />
                </CartProvider>
              </ProductsProvider>
            </CartProvider>
          </AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}