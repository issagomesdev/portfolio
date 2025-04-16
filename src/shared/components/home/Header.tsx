import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import LogoComponent from "../ui/Logo";

const HeaderComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const largerScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box display={'flex'} gap={theme.spacing(8)} width={'100%'} paddingX={theme.spacing(4)}>
            <LogoComponent />
            <Box display={'flex'} flexDirection={'row'} {...(smallScreen? {justifyContent: 'flex-end'} : {justifyContent: 'space-between'})} alignItems={'center'} width={'100%'}>
                <Typography variant="menuItem" {...(smallScreen? {display: 'none'} : mediumScreen? {fontSize: theme.spacing(2)} : null)} color={theme.palette.primary.main}>Home</Typography>
                <Typography variant="menuItem" {...(smallScreen? {display: 'none'} : mediumScreen? {fontSize: theme.spacing(2)} : null)} color={theme.palette.secondary.main}>Sobre Mim</Typography>
                <Typography variant="menuItem" {...(smallScreen? {display: 'none'} : mediumScreen? {fontSize: theme.spacing(2)} : null)} color={theme.palette.secondary.main}>Portfolio</Typography>
                <Typography variant="menuItem" {...(smallScreen? {display: 'none'} : mediumScreen? {fontSize: theme.spacing(2)} : null)} color={theme.palette.secondary.main}>Serviços</Typography>
                <Typography variant="menuItem" {...(smallScreen? {display: 'none'} : mediumScreen? {fontSize: theme.spacing(2)} : null)} color={theme.palette.secondary.main}>Experiência</Typography>
                <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3), ...(smallScreen || mediumScreen? {fontSize: theme.spacing(2)} : {fontSize: theme.spacing(2.5)})  }}>Contato</Button>
            </Box>
        </Box>
    )
}

export default HeaderComponent;