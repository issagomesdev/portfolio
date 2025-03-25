import { Box, Typography } from "@mui/material"

const Logo = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'end'} width={'fit-content'}>
            <Typography variant="mainLogo"> Byissa </Typography>
            <Typography variant="secondLogo"> gomes </Typography>
        </Box>
    )
}

export default Logo