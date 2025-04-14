import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import LogoComponent from "../ui/Logo";

const HeaderComponent = () => {
    const theme = useTheme();
    return (
        <Box display={'flex'} gap={theme.spacing(8)} width={'100%'} paddingX={theme.spacing(4)}>
            <LogoComponent />
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                <Typography variant="menuItem" color={theme.palette.primary.main}>Home</Typography>
                <Typography variant="menuItem" color={theme.palette.secondary.main}>Sobre Mim</Typography>
                <Typography variant="menuItem" color={theme.palette.secondary.main}>Portfolio</Typography>
                <Typography variant="menuItem" color={theme.palette.secondary.main}>Serviços</Typography>
                <Typography variant="menuItem" color={theme.palette.secondary.main}>Experiência</Typography>
                <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', fontSize: theme.spacing(2.5), paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3) }}>Contato</Button>
            </Box>
        </Box>
    )
}

export default HeaderComponent;