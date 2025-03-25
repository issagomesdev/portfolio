import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#BFA386',
            dark:  '#BFA386',
            light: '#BFA386',
            contrastText: '#E0E0E0'
        },
        secondary: {
            main: '#7E7F6C',
            dark:  '#7E7F6C',
            light: '#7E7F6C',
            contrastText: '#E0E0E0' 
        },
        background: {
            paper: '#0A0A0A',
            default: '#1A1A1A'
        }
    },
    typography: {
        fontFamily: `'Secular One', sans-serif`,
        mainLogo: {
            fontFamily: `'Staatliches', sans-serif`,
            fontSize: '60px',
            color: '#BFA386',
            lineHeight: '50px'
        },
        secondLogo: {
            fontFamily: `'Caveat', cursive`,
            fontSize: '24px',
            color: '#7E7F6C',
            lineHeight: '10px'
        },
        menuItem: {
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            color: '#7E7F6C',
            textTransform: 'uppercase'
        },
        menuItemActive: {
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            color: '#7E7F6C',
            textTransform: 'uppercase'
        },
        devTitle: {
            color: '#E0E0E0',
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '10px'
        },
    }
});