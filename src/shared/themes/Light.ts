import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#BFA386',
            dark:  '#BFA386',
            light: '#BFA386',
            contrastText: '#3C3C3C'
        },
        secondary: {
            main: '#7E7F6C',
            dark:  '#7E7F6C',
            light: '#7E7F6C',
            contrastText: '#3C3C3C' 
        },
        background: {
            paper: '#DADADA',
            default: '#E0E0E0'
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
            color: '#3C3C3C',
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '10px'
        },
    }
});