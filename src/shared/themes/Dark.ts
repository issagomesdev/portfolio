import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#BFA386',
            contrastText: '#E0E0E0'
        },
        secondary: {
            main: '#7E7F6C',
            contrastText: '#E0E0E0' 
        },
        background: {
            paper: '#161616',
            default: '#1A1A1A'
        },
        text: {
            primary: '#E0E0E0'
        },
    },
    typography: {
        fontFamily: `'Secular One', sans-serif`,
        mainLogo: {
            fontFamily: `'Staatliches', sans-serif`,
            fontSize: '60px',
            lineHeight: '50px'
        },
        secondLogo: {
            fontFamily: `'Caveat', cursive`,
            fontSize: '24px',
            lineHeight: '10px'
        },
        menuItem: {
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            textTransform: 'uppercase'
        },
        devTitle: {
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '10px'
        },
        sectionTitle: {
            fontFamily: `'Staatliches', sans-serif`,
            fontSize: '40px',
            textTransform: 'uppercase'
        },
        bodyText: {
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '20px',
            textAlign: 'justify'
        },
        projectType: {
            fontFamily: `'Secular One', sans-serif`,
            fontSize: '25px',
            textTransform: 'uppercase'
        },
        projectNumber: {
            fontFamily: `'Albert Sans', sans-serif`,
            fontSize: '45px',
            lineHeight: '40px',
            textTransform: 'uppercase'
        },
        projectName: {
            fontFamily: `'Staatliches', sans-serif`,
            fontSize: '35px',
            lineHeight: '40px',
            textTransform: 'uppercase'
        }
    }
});