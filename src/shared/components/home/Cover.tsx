import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useAppThemeContext } from "../../context";

const CoverComponent = () => {
    const theme = useTheme();
    const miniScreen = useMediaQuery("(max-width:380px)");
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const mediumScreen = useMediaQuery("(max-width:1080px)");

    const { themeName, toggleTheme } = useAppThemeContext();

    return (
        <Box width={'90%'} display={'flex'} justifyContent={'center'} {...(mediumScreen ? { flexDirection: 'column-reverse', alignItems: 'center', gap: theme.spacing(8) } : null)}>
            <Box width={theme.spacing(miniScreen? 40 : smallScreen ? 50 : 65)} height={theme.spacing(miniScreen? 40 : smallScreen ? 50 : 65)} {...(mediumScreen ? { position: 'relative', right: smallScreen ? '0' : '3%' } : null)}>
                <img key={`${themeName}-Cover`} src={`/images/${themeName}Cover.png`} style={{
                    width: '100%',
                    height: 'auto',
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: 1,
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 90%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }} alt="issa gomes dev" />
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(2)} zIndex={9}>
                <Box display={'flex'} flexWrap={smallScreen ? 'wrap' : 'nowrap'} justifyContent={'center'} gap={theme.spacing(2)}>
                    <Typography lineHeight={theme.spacing(12)} fontSize={theme.spacing(16)} fontFamily={`'Staatliches', sans-serif`} color={theme.palette.primary.main}>Full</Typography>
                    <Typography lineHeight={theme.spacing(12)} fontSize={theme.spacing(16)} fontFamily={`'Staatliches', sans-serif`} color={theme.palette.secondary.main}>Stack</Typography>
                </Box>

                <Typography variant="devTitle">Developer</Typography>

                <Box position={'relative'} onClick={toggleTheme} sx={{
                    cursor: 'pointer',
                    outline: 'none',
                    '&:focus': { outline: 'none' },
                    WebkitTapHighlightColor: 'transparent'
                }}>
                    <Box width={theme.spacing(10)}>
                        <img key={`${themeName}-SwitchBody`} src={`/images/${themeName}SwitchBody.png`} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                    <Box width={theme.spacing(4)} position={'absolute'} top={2} {...(themeName === 'light' ? { right: 2 } : { left: 2 })}>
                        <img key={`${themeName}-Switch`} src={`/images/${themeName}Switch.png`} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CoverComponent;