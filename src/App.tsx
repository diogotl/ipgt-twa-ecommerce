import { AuthProvider } from "./contexts/Auth";
import { AppRoutes } from "./routes";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'

function App() {
  return (
    <div className="App"> 
      <ChakraProvider theme={theme} resetCSS>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
