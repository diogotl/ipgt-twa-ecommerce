import { AuthProvider } from "./contexts/Auth";
import { AppRoutes } from "./routes";

import GlobalStyles from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>

    </div>
  );
}

export default App;
