import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"

type LogoProps = {
    color?: string;
};

const LogoComponent = ({ color }: LogoProps) => {

    const theme = useTheme();
    const miniScreen = useMediaQuery("(max-width:500px)");

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'end'} width={'fit-content'}>
            <Typography variant="mainLogo" color={color ?? theme.palette.primary.main} {...(miniScreen? {fontSize: theme.spacing(6), lineHeight: theme.spacing(5.5)} : null)}> Byissa </Typography>
            <Typography variant="secondLogo" color={color ?? theme.palette.secondary.main} {...(miniScreen? {fontSize: theme.spacing(2.5), lineHeight: theme.spacing(0.5)} : null)}> gomes </Typography>
        </Box>
    )
}

export default LogoComponent;