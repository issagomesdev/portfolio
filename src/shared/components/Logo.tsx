import { Box, Typography, useTheme } from "@mui/material"

type LogoProps = {
    color?: string;
};

const LogoComponent = ({ color }: LogoProps) => {

    const theme = useTheme();

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'end'} width={'fit-content'}>
            <Typography variant="mainLogo" color={color ?? theme.palette.primary.main}> Byissa </Typography>
            <Typography variant="secondLogo" color={color ?? theme.palette.secondary.main}> gomes </Typography>
        </Box>
    )
}

export default LogoComponent;