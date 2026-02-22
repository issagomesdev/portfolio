import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { useAppThemeContext } from "../context";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const titleVar = {
    hidden: { opacity: 0, y: -28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 44, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, delay: i * 0.13, ease: "easeOut" },
    }),
};


const ServicesComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:450px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery("(max-width:1200px)");

    const { themeName } = useAppThemeContext();
    const sectionRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                if (hasAnimated.current) controls.set('hidden');
                controls.start('visible');
                hasAnimated.current = true;
            }
        }, { threshold: 0.15 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    type Service = {
        id: number
        title: string
        cotitle: string
        description: string
        icon: string
    }

    const ServiceData: Service[] = [
        {
            id: 1,
            title: 'Desenvolvimento',
            cotitle: 'Web',
            description: 'Criação de sites e aplicações web responsivas, otimizadas para todos os dispositivos e com foco em performance, acessibilidade e experiência do usuário. Do design à programação, entrego soluções completas e personalizadas para seu projeto.',
            icon: 'mdi:web'
        },
        {
            id: 2,
            title: 'Aplicativos',
            cotitle: 'Mobile',
            description: 'Desenvolvimento de aplicativos para Android e iOS com interfaces intuitivas e desempenho eficiente. Ideal para quem quer colocar uma ideia no bolso dos usuários com praticidade e tecnologia de ponta.',
            icon: 'gridicons:phone'
        },
        {
            id: 3,
            title: 'Aplicativos',
            cotitle: 'Desktop',
            description: 'Aplicações para desktop feitas sob medida, com foco em estabilidade e produtividade. Perfeito para sistemas internos, ferramentas de gestão ou softwares que precisam rodar offline.',
            icon: 'famicons:desktop-outline'
        },
        {
            id: 4,
            title: 'Desenvolvimento',
            cotitle: 'de Jogos',
            description: 'Criação de jogos digitais com design envolvente e mecânicas bem estruturadas, seja para entretenimento, educação ou projetos interativos. Transformo ideias em experiências jogáveis únicas.',
            icon: 'mingcute:game-1-fill'
        },
    ];

    const ServiceComponent = (service: Service) => {
        return (
            <Box
                display={'flex'} flexDirection={'column'} padding={theme.spacing(3)}
                gap={theme.spacing(3)} bgcolor={theme.palette.background.paper} borderRadius={'4px'}
                boxShadow={themeName === 'light' ? 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' : 'none'}
                width={'100%'}
            >
                <Box display={'flex'} gap={theme.spacing(2)} alignItems={'center'} {...(mediumScreen2 ? { flexDirection: 'column' } : { flexDirection: 'row' })}>

                    <Box
                        padding={theme.spacing(2)}
                        bgcolor={theme.palette.secondary.main}
                        color={theme.palette.background.paper}
                        borderRadius={'100%'}
                        position={'relative'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Icon icon={service.icon} width={mediumScreen ? theme.spacing(5) : theme.spacing(8)} />
                    </Box>

                    {mediumScreen
                        ? <Box>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={theme.spacing(smallScreen2 ? 3 : mediumScreen ? 4 : 6)} lineHeight={theme.spacing(smallScreen ? 3 : mediumScreen ? 4 : 6)} textAlign={mediumScreen2 ? 'center' : 'start'} sx={{ wordBreak: 'break-word' }} alignItems={'baseline'}>{`${service.title} ${service.cotitle}`}</Typography>
                        </Box>
                        : <Box>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={mediumScreen ? theme.spacing(4) : theme.spacing(6)} lineHeight={mediumScreen ? theme.spacing(4) : theme.spacing(6)} textAlign={mediumScreen2 ? 'center' : 'start'} sx={{ wordBreak: 'break-word' }}>{service.title}</Typography>
                            <Typography color={theme.palette.secondary.main} textTransform={'uppercase'} fontFamily={'Staatliches'} fontSize={mediumScreen ? theme.spacing(4) : theme.spacing(6)} lineHeight={mediumScreen ? theme.spacing(4) : theme.spacing(6)} textAlign={mediumScreen2 ? 'center' : 'start'} sx={{ wordBreak: 'break-word' }}>{service.cotitle}</Typography>
                        </Box>
                    }
                </Box>
                <Typography textAlign={'justify'} color={theme.palette.secondary.main} {...(mediumScreen ? { fontSize: theme.spacing(1.5) } : {})}>{service.description}</Typography>
            </Box>
        );
    };

    return (
        <Box ref={sectionRef} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(4)}>

            <motion.div initial="hidden" animate={controls} variants={titleVar}>
                <Typography variant="sectionTitle"> Serviços </Typography>
            </motion.div>

            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'} width={'95%'} rowGap={smallScreen ? theme.spacing(4) : theme.spacing(5)}>
                {ServiceData.map((service, index) => (
                    <motion.div
                        key={service.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate={controls}
                        style={{ width: smallScreen ? '90%' : '45%' }}
                    >
                        <ServiceComponent {...service} />
                    </motion.div>
                ))}
            </Box>
        </Box>
    );
};

export default ServicesComponent;
