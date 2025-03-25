import AppRoutes from "./routes";
import { AppThemeProvider } from "./shared/context/ThemeContext";

function App() {
  return (
  <AppThemeProvider>
    <AppRoutes/>
  </AppThemeProvider>
  );
}

export default App;