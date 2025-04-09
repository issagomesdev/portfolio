import { Box, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useAppThemeContext } from "../context";

const ServicesComponent = () => {
    const theme = useTheme();
    const { themeName } = useAppThemeContext();

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(8)}>
            <Typography variant="sectionTitle"> Services </Typography>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'} width={'95%'} rowGap={theme.spacing(5)}>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="mdi:web" width={'85%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>web</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>development</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Lorem ipsum odor amet, consectetuer adipiscing elit. Libero lacinia quis ante lobortis tellus torquent nascetur. Bibendum nec accumsan montes litora purus platea mauris bibendum. Eu adipiscing nisi facilisis ac pretium commodo vitae nullam. Orci taciti nascetur sodales efficitur integer eu tortor. </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="gridicons:phone" width={'85%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>mobile app</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>development</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Lorem ipsum odor amet, consectetuer adipiscing elit. Libero lacinia quis ante lobortis tellus torquent nascetur. Bibendum nec accumsan montes litora purus platea mauris bibendum. Eu adipiscing nisi facilisis ac pretium commodo vitae nullam. Orci taciti nascetur sodales efficitur integer eu tortor. </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="famicons:desktop-outline" width={'70%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>desktop app</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>development</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Lorem ipsum odor amet, consectetuer adipiscing elit. Libero lacinia quis ante lobortis tellus torquent nascetur. Bibendum nec accumsan montes litora purus platea mauris bibendum. Eu adipiscing nisi facilisis ac pretium commodo vitae nullam. Orci taciti nascetur sodales efficitur integer eu tortor. </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="mingcute:game-1-fill" width={'85%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>game</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)}>development</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Lorem ipsum odor amet, consectetuer adipiscing elit. Libero lacinia quis ante lobortis tellus torquent nascetur. Bibendum nec accumsan montes litora purus platea mauris bibendum. Eu adipiscing nisi facilisis ac pretium commodo vitae nullam. Orci taciti nascetur sodales efficitur integer eu tortor. </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesComponent;