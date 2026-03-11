import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ProfilePhoto } from "./ui/styles/ProfilePhoto";
import { useScrollContext } from "../context/ScrollContext";
import ImageWithSkeleton from "./Skeleton/ImageWithSkeleton";
import { motion } from "framer-motion";

const textStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const textItem = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const AboutMeComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:380px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const { scrollToSection } = useScrollContext();

    const isCentered = mediumScreen || mediumScreen2;

    return (
        <Box width={'80%'} display={'flex'} flexDirection={'column'} gap={theme.spacing(2)} marginX={'auto'}>

            {/* Título — desliza da esquerda */}
            <motion.div
                style={{
                   textAlign: isCentered ? 'center' : 'start'
                }}
                initial={{ opacity: 0, x: -48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
            >
                <Typography variant="sectionTitle">
                    Sobre Mim
                </Typography>
            </motion.div>

            <Box
                display={'flex'}
                justifyContent={'center'}
                gap={theme.spacing(isCentered ? 10 : 6)}
                {...(isCentered ? { flexDirection: 'column-reverse', alignItems: 'center' } : null)}
            >
                {/* Coluna de texto — parágrafos em stagger */}
                <motion.div
                    variants={textStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isCentered ? 'center' : 'flex-start',
                        gap: theme.spacing(isCentered ? 5 : 3),
                    }}
                >
                    <motion.div variants={textItem}>
                        <Typography variant="bodyText" {...(smallScreen ? { fontSize: theme.spacing(1.9) } : {})}>Olá, meu nome é Issa Gomes, tenho 22 anos e moro em Paulista - Pernambuco. Atuo como desenvolvedora fullstack, com foco em front-end. </Typography>
                    </motion.div>
                    <motion.div variants={textItem}>
                        <Typography variant="bodyText" {...(smallScreen ? { fontSize: theme.spacing(1.9) } : {})}>Iniciei minha trajetória em 2019, ainda no colégio, com desenvolvimento web. Sempre fui apaixonada por tecnologia e, desde nova, tive muita facilidade com a área. Após dois anos de muito estudo e prática, me senti pronta para aplicar o que aprendi em projetos reais como freelancer.</Typography>
                    </motion.div>
                    <motion.div variants={textItem}>
                        <Typography variant="bodyText" {...(smallScreen ? { fontSize: theme.spacing(1.9) } : {})}> Esses anos atuando como freelancer me proporcionaram uma experiência ampla em desenvolvimento, já que estive envolvida em soluções para diferentes áreas, mesmo sem contato prévio com algumas delas. Isso me permitiu evoluir tanto nos conhecimentos técnicos, como lógica, performance, boas práticas, testes, manutenção, detecção e solução de bugs, versionamento de código e deploy, quanto na parte operacional: escutar e entender as necessidades dos clientes, identificar problemas, definir soluções, analisar e especificar requisitos, pesquisar ferramentas adequadas, além de lidar com prazos e cronogramas.</Typography>
                    </motion.div>
                    <motion.div variants={textItem}>
                        <Typography variant="bodyText" {...(smallScreen ? { fontSize: theme.spacing(1.9) } : {})}>Em 2025, concluí minha formação técnica em Análise e Desenvolvimento de Sistemas. Mesmo já tendo certo conhecimento ao entrar, o curso me permitiu desenvolver novas habilidades, especialmente ao trabalhar em equipe. Nessas experiências, aprimorei minha capacidade em dividir tarefas, me comunicar, colaborar e assumir responsabilidades compartilhadas.</Typography>
                    </motion.div>
                    <motion.div variants={textItem}>
                        <Typography variant="bodyText" {...(smallScreen ? { fontSize: theme.spacing(1.9) } : {})}>
                            Estou sempre em busca de novos desafios, aprendizado constante e oportunidades onde eu possa contribuir com soluções criativas e eficientes.
                        </Typography>
                    </motion.div>
                    <motion.div variants={textItem}>
                        <Button
                            sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', fontSize: theme.spacing(2.5), paddingX: theme.spacing(3) }}
                            onClick={() => scrollToSection('contactRef')}
                        >
                            Entre em contato
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Foto — zoom out suave */}
                <Box>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <Box
                            sx={(theme) => ProfilePhoto(theme)}
                            width={theme.spacing(smallScreen2 ? 28 : mediumScreen ? 35 : mediumScreen2 ? 50 : 60)}
                        >
                            <ImageWithSkeleton
                                src={`/images/profilePhoto.png`}
                                alt="perfil photo"
                                ratio={'9/11'}
                                rounded={false}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </motion.div>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutMeComponent;
