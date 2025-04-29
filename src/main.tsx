import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/styles.css";
import { AppThemeProvider } from "./shared/context/ThemeContext";
import { SectionProvider } from './shared/context/SectionContext.tsx';
import { ScrollProvider } from './shared/context/ScrollContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <ScrollProvider>
        <SectionProvider>
          <App />
        </SectionProvider>
      </ScrollProvider>
    </AppThemeProvider>
  </StrictMode>,
)
