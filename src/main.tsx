import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/styles.css";
// Self-hosted fonts — bundled by Vite, no CDN dependency
import '@fontsource/secular-one';          // 400 (only weight available)
import '@fontsource/staatliches';          // 400 (only weight available)
import '@fontsource/caveat';               // 400
import '@fontsource/albert-sans';          // 400
import '@fontsource/akatab';              // 400
import '@fontsource/akatab/500.css';      // 500 (used in Contact headings)
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
