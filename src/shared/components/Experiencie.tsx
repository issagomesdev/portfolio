import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Tech } from "../../types/Tech";
import { getTechs } from "../../controllers/tech.controller";
import { useEffect, useState } from 'react';

const ExperiencieComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:425px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [loading, setLoading] = useState(true)
    const [Techs, setTechs] = useState<Tech[]>([])

    useEffect(() => {
        async function load() {
            try {
                const data = await getTechs()
                console.log(data)
                setTechs(data.data)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    const ExpComponent = (tech: Tech) => {
        return (
            <Box width={mediumScreen ? '33.3%' : '20%'} display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} alignItems={'center'} gap={theme.spacing(3)}>
                <Icon icon={tech.icon} width={smallScreen ? theme.spacing(5) : mediumScreen ? theme.spacing(10) : theme.spacing(13)} />
                <Typography textAlign={'center'} sx={{ wordBreak: 'break-all' }} {...(smallScreen2 ? { fontSize: theme.spacing(1.5) } : {})}>{tech.name}</Typography>
            </Box>
        )
    }

    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <Box width={'80%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(4)}>
                <Typography variant="sectionTitle"> Experiência </Typography>
                <Typography textAlign={'justify'}>Tenho experiência sólida com uma ampla variedade de tecnologias modernas, atuando tanto no desenvolvimento frontend quanto backend, além de projetos mobile, jogos e design de interface. Essa diversidade de tecnologias me permite trabalhar em diferentes tipos de projetos, com foco na criação de soluções eficientes, escaláveis e com boa experiência de usuário. Abaixo estão as ferramentas e linguagens com as quais já trabalhei de forma prática:</Typography>
                <Box display={'flex'} flexWrap={'wrap'} rowGap={theme.spacing(10)} justifyContent={mediumScreen ? 'space-between' : 'center'}>
                    {loading ? <Typography> carregando... </Typography> : Techs.map((tech) => (
                        <ExpComponent key={tech.id} {...tech} />
                    ))}

                </Box>
            </Box>
        </Box>
    )
}

export default ExperiencieComponent;