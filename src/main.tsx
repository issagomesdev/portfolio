import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/styles.css";
import { AppThemeProvider } from "./shared/context/ThemeContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AppThemeProvider>
    <App/>
  </AppThemeProvider>
  </StrictMode>,
)
