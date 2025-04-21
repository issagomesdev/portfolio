import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useAppThemeContext } from "../context";

const ServicesComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen = useMediaQuery("(max-width:1200px)");
    const largerScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const { themeName } = useAppThemeContext();

    type Service = {
        id: number
        title: string
        description: string
        icon: string
    }

    const ServiceData: Service[] = [
        {
            id: 1,
            title: 'Desenvolvimento -Web',
            description: 'Criação de sites e aplicações web responsivas, otimizadas para todos os dispositivos e com foco em performance, acessibilidade e experiência do usuário. Do design à programação, entrego soluções completas e personalizadas para seu projeto.',
            icon: 'mdi:web'
        },
        {
            id: 2,
            title: 'Aplicativos -Mobile',
            description: 'Desenvolvimento de aplicativos para Android e iOS com interfaces intuitivas e desempenho eficiente. Ideal para quem quer colocar uma ideia no bolso dos usuários com praticidade e tecnologia de ponta.',
            icon: 'gridicons:phone'
        },
        {
            id: 3,
            title: 'Aplicativos -Desktop',
            description: 'Aplicações para desktop feitas sob medida, com foco em estabilidade e produtividade. Perfeito para sistemas internos, ferramentas de gestão ou softwares que precisam rodar offline.',
            icon: 'famicons:desktop-outline'
        },
        {
            id: 4,
            title: 'Desenvolvimento -de Jogos',
            description: 'Criação de jogos digitais com design envolvente e mecânicas bem estruturadas, seja para entretenimento, educação ou projetos interativos. Transformo ideias em experiências jogáveis únicas.',
            icon: 'mingcute:game-1-fill'
        },
    ]

    const ServiceComponent = (service: Service) => {
        const [title1, ...title2] = service.title.split("-");
        return (
            <Box display={'flex'} flexDirection={'column'} padding={theme.spacing(3)} gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'} boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'} width={'45%'}>
                <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'} {...(mediumScreen ? { flexDirection: 'column' } : { flexDirection: 'row' })}>
                    <Box padding={theme.spacing(2)} bgcolor={theme.palette.secondary.main} color={theme.palette.background.paper} borderRadius={'100%'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Icon icon={service.icon} width={smallScreen? theme.spacing(5) : theme.spacing(8)} />
                    </Box>
                    <Box>
                        <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={smallScreen? theme.spacing(4) : theme.spacing(6)} lineHeight={smallScreen? theme.spacing(4) : theme.spacing(6)} textAlign={mediumScreen? 'center' : 'start'} sx={{ wordBreak: 'break-word' }}>{title1}</Typography>
                        <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={smallScreen? theme.spacing(4) : theme.spacing(6)} lineHeight={smallScreen? theme.spacing(4) : theme.spacing(6)} textAlign={mediumScreen? 'center' : 'start'} sx={{ wordBreak: 'break-word' }}>{title2}</Typography>
                    </Box>
                </Box>
                <Typography textAlign={'justify'} color={theme.palette.secondary.main}>{service.description}</Typography>
            </Box>
        )
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(8)}>
            <Typography variant="sectionTitle"> Serviços </Typography>
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'} width={'95%'} rowGap={theme.spacing(5)}>
                {ServiceData.map((service) => (
                    <ServiceComponent key={service.id} {...service} />
                ))}
            </Box>
        </Box>
    )
}

export default ServicesComponent;