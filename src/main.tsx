import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/styles.css";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { SectionProvider } from './shared/context/SectionContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <SectionProvider>
        <App />
      </SectionProvider>
    </AppThemeProvider>
  </StrictMode>,
)
