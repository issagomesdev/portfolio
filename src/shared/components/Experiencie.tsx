import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Tech } from "../../types/Tech";
import { getTechs } from "../../controllers/tech.controller";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const iconPop = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 280,
            damping: 14,
            delay: Math.min(i * 0.03, 0.35),
        },
    }),
};

const ExpComponent = ({ tech, index }: { tech: Tech; index: number }) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:425px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <motion.div
            custom={index}
            variants={iconPop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            style={{
                width: mediumScreen ? '33.3%' : '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: theme.spacing(3),
            }}
        >
            <Icon icon={tech.icon} width={smallScreen ? theme.spacing(5) : mediumScreen ? theme.spacing(10) : theme.spacing(13)} />
            <Typography textAlign={'center'} sx={{ wordBreak: 'break-all' }} {...(smallScreen2 ? { fontSize: theme.spacing(1.5) } : {})}>{tech.name}</Typography>
        </motion.div>
    );
};

const ExperiencieComponent = () => {
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [loading, setLoading] = useState(true);
    const [Techs, setTechs] = useState<Tech[]>([]);

    useEffect(() => {
        async function load() {
            try {
                const data = await getTechs();
                setTechs(data.data);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box width={'80%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(4)}>

                <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Typography variant="sectionTitle"> Experiência </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                    style={{ width: '100%' }}
                >
                    <Typography textAlign={'justify'}>Tenho experiência sólida com uma ampla variedade de tecnologias modernas, atuando tanto no desenvolvimento frontend quanto backend, além de projetos mobile, jogos e design de interface. Essa diversidade de tecnologias me permite trabalhar em diferentes tipos de projetos, com foco na criação de soluções eficientes, escaláveis e com boa experiência de usuário. Abaixo estão as ferramentas e linguagens com as quais já trabalhei de forma prática:</Typography>
                </motion.div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        rowGap: theme.spacing(10),
                        justifyContent: mediumScreen ? 'space-between' : 'center',
                        width: '100%',
                    }}
                >
                    {loading
                        ? <Typography> carregando... </Typography>
                        : Techs.map((tech, index) => (
                            <ExpComponent key={tech.id} tech={tech} index={index} />
                        ))
                    }
                </div>
            </Box>
        </div>
    );
};

export default ExperiencieComponent;
