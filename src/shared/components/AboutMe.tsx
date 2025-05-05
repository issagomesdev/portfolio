import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ProfilePhoto } from "./ui/styles/ProfilePhoto";
import { useScrollContext } from "../context/ScrollContext";

const AboutMeComponent = () => {

    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:380px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const { scrollToSection } = useScrollContext();
    
    return (
        <Box width={'80%'} display={'flex'} flexDirection={'column'} gap={theme.spacing(2)} marginX={'auto'}>
            <Typography variant="sectionTitle" {...(mediumScreen || mediumScreen2 ? { textAlign: 'center' } : null)}> Sobre Mim </Typography>
            <Box display={'flex'} justifyContent={'center'} gap={theme.spacing(mediumScreen || mediumScreen2 ? 10 : 6)} {...(mediumScreen || mediumScreen2 ? { flexDirection: 'column-reverse', alignItems: 'center' } : null)}>
                <Box display={'flex'} flexDirection={'column'} alignItems={mediumScreen || mediumScreen2 ? 'center' : 'flex-start'} gap={theme.spacing(mediumScreen || mediumScreen2 ? 5 : 3)}>
                    <Typography variant="bodyText" {...(smallScreen? {fontSize: theme.spacing(1.9)} : {})}>Olá, meu nome é Issa Gomes, tenho 22 anos e moro em Paulista - Pernambuco. Atuo como desenvolvedora fullstack, com foco em front-end. </Typography>
                    <Typography variant="bodyText" {...(smallScreen? {fontSize: theme.spacing(1.9)} : {})}>Iniciei minha trajetória em 2019, ainda no colégio, com desenvolvimento web. Sempre fui apaixonada por tecnologia e, desde nova, tive muita facilidade com a área. Após um ano de muito estudo e prática, me senti pronta para aplicar o que aprendi em projetos reais como freelancer.</Typography>
                    <Typography variant="bodyText" {...(smallScreen? {fontSize: theme.spacing(1.9)} : {})}> Esses anos atuando como freelancer me proporcionaram uma experiência ampla em desenvolvimento, já que estive envolvida em soluções para diferentes áreas — mesmo sem contato prévio com algumas delas. Isso me permitiu evoluir tanto nos conhecimentos técnicos, como lógica, performance, boas práticas, testes, manutenção, detecção e solução de bugs, versionamento de código e deploy, quanto na parte operacional: escutar e entender as necessidades dos clientes, identificar problemas, definir soluções, analisar e especificar requisitos, pesquisar ferramentas adequadas, além de lidar com prazos e cronogramas.</Typography>
                    <Typography variant="bodyText" {...(smallScreen? {fontSize: theme.spacing(1.9)} : {})}>Em 2023, iniciei minha formação técnica em Análise e Desenvolvimento de Sistemas, atualmente em fase final de conclusão. Mesmo já tendo certo conhecimento ao entrar, o curso me permitiu desenvolver novas habilidades, especialmente ao trabalhar em equipe. Nessas experiências, aprimorei minha capacidade em dividir tarefas, me comunicar, colaborar e assumir responsabilidades compartilhadas.</Typography>
                    <Typography variant="bodyText" {...(smallScreen? {fontSize: theme.spacing(1.9)} : {})}>
                        Estou sempre em busca de novos desafios, aprendizado constante e oportunidades onde eu possa contribuir com soluções criativas e eficientes.</Typography>
                    <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', fontSize: theme.spacing(2.5), paddingX: theme.spacing(3) }} onClick={() => scrollToSection('contactRef')}>Entre em contato</Button>
                </Box>
                <Box>
                    <Box sx={(theme) => ProfilePhoto(theme)} width={theme.spacing(smallScreen2? 28 : mediumScreen ? 35 : mediumScreen2 ? 50 : 60)}>
                        <img src={`/images/profilePhoto.png`} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMeComponent;