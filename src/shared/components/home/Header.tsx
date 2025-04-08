import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import Logo from "../Logo";

const Header = () => {
    const theme = useTheme();
    return (
        <Box display={'flex'} gap={theme.spacing(8)} width={'100%'}>
            <Logo/>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                <Typography variant="menuItemActive">Home</Typography>
                <Typography variant="menuItem">About me</Typography>
                <Typography variant="menuItem">Portfolio</Typography>
                <Typography variant="menuItem">Services</Typography>
                <Typography variant="menuItem">Experience</Typography>
                <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', fontSize: theme.spacing(2.5), paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3) }}>Contact</Button>
            </Box>
        </Box>
    )
}

export default Header;