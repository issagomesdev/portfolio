import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from './../themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () =>  useContext(ThemeContext);

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  
    const toggleTheme = useCallback(() => {
      setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => (themeName === 'light' ? LightTheme : DarkTheme), [themeName]);
  
    return (
      <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box>
          {children}
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  };