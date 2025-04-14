import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#BFA386',
            contrastText: '#3C3C3C'
        },
        secondary: {
            main: '#7E7F6C',
            contrastText: '#3C3C3C' 
        },
        background: {
            paper: '#DADADA',
            default: '#E0E0E0'
        },
        text: {
            primary: '#3C3C3C'
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
            fontSize: '17px',
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
            lineHeight: '50px',
            textTransform: 'uppercase'
        }
    }
});