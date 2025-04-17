import { Box, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useAppThemeContext } from "../context";

const ServicesComponent = () => {
    const theme = useTheme();
    const { themeName } = useAppThemeContext();

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(8)}>
            <Typography variant="sectionTitle"> Serviços </Typography>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'} width={'95%'} rowGap={theme.spacing(5)}>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="mdi:web" width={'85%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>Desenvolvimento</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>web</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}>Criação de sites e aplicações web responsivas, otimizadas para todos os dispositivos e com foco em performance, acessibilidade e experiência do usuário. Do design à programação, entrego soluções completas e personalizadas para seu projeto.</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="gridicons:phone" width={'85%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>Aplicativos</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>Mobile</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Desenvolvimento de aplicativos para Android e iOS com interfaces intuitivas e desempenho eficiente. Ideal para quem quer colocar uma ideia no bolso dos usuários com praticidade e tecnologia de ponta. </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="famicons:desktop-outline" width={'70%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>Aplicativos </Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>Desktop</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Aplicações para desktop feitas sob medida, com foco em estabilidade e produtividade. Perfeito para sistemas internos, ferramentas de gestão ou softwares que precisam rodar offline. </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                    <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'}>
                        <Box bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} width={theme.spacing(12)} height={theme.spacing(12)} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}> <Icon icon="mingcute:game-1-fill" width={'85%'} /> </Box>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>Desenvolvimento</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(6)} lineHeight={theme.spacing(6)} sx={{ wordBreak: 'break-word' }}>de Jogos</Typography>
                        </Box>
                    </Box>
                    <Typography textAlign={'justify'} color={theme.palette.secondary.main}> Criação de jogos digitais com design envolvente e mecânicas bem estruturadas, seja para entretenimento, educação ou projetos interativos. Transformo ideias em experiências jogáveis únicas. </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ServicesComponent;