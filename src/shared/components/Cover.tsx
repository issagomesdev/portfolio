import { Box, Typography, useTheme } from "@mui/material";
import { useAppThemeContext } from "../context";

const CoverPage = () => {
const theme = useTheme();
const { themeName, toggleTheme } = useAppThemeContext();

    return (
        <Box width={'90%'} display={'flex'} justifyContent={'center'}>
            <Box width={theme.spacing(55)} left={'30%'}>
                <img src={`/images/${themeName}Cover.png`} style={{ width: '100%', height: 'auto' }} alt="issa gomes dev"/>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(2)} zIndex={9}>
                <Box display={'flex'}>
                    <Typography lineHeight={theme.spacing(12)} fontSize={theme.spacing(16)} fontFamily={`'Staatliches', sans-serif`} color={theme.palette.primary.main}>Full</Typography>
                    <Typography lineHeight={theme.spacing(12)} fontSize={theme.spacing(16)} fontFamily={`'Staatliches', sans-serif`} color={theme.palette.secondary.main}>Stack</Typography>
                </Box>
                <Typography variant="devTitle">Developer</Typography>
                <Box position={'relative'} onClick={toggleTheme} sx={{cursor: 'pointer'}}>
                    <Box width={theme.spacing(10)}>
                        <img src={`/images/${themeName}SwitchBody.png`} style={{ width: '100%', height: 'auto' }}/>
                    </Box>
                    <Box width={theme.spacing(4)} position={'absolute'} top={2}  {...(themeName === 'light' ? { right: 2 } : { left: 2 })}> 
                        <img src={`/images/${themeName}Switch.png`} style={{ width: '100%', height: 'auto' }}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CoverPage;