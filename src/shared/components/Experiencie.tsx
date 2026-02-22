import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Tech } from "../../types/Tech";
import { getTechs } from "../../controllers/tech.controller";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimationControls } from "framer-motion";

const titleVar = {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const descVar = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", delay: 0.1 } },
};

const iconPop = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 280,
            damping: 14,
            delay: i * 0.045,
        },
    }),
};

// Defined OUTSIDE the parent so React doesn't remount it on every render
const ExpComponent = ({ tech, index, controls }: {
    tech: Tech;
    index: number;
    controls: AnimationControls;
}) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:425px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <motion.div
            custom={index}
            variants={iconPop}
            animate={controls}
            initial="hidden"
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

    const sectionRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const iconControls = useAnimation();
    const hasAnimated = useRef(false);
    const [isInView, setIsInView] = useState(false);

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

    // Track viewport visibility + animate title/description
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            const inView = entry.isIntersecting;
            setIsInView(inView);
            if (inView) {
                if (hasAnimated.current) controls.set('hidden');
                controls.start('visible');
            }
        }, { threshold: 0.1 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Icon animation: fires when BOTH data is loaded AND section is in view.
    // This handles the race condition where the observer fires before the API
    // returns (icons weren't mounted yet when controls.start was called).
    useEffect(() => {
        if (!loading && isInView) {
            if (hasAnimated.current) iconControls.set('hidden');
            iconControls.start('visible');
            hasAnimated.current = true;
        }
    }, [loading, isInView]);

    return (
        <div ref={sectionRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Box width={'80%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(4)}>

                <motion.div initial="hidden" animate={controls} variants={titleVar}>
                    <Typography variant="sectionTitle"> Experiência </Typography>
                </motion.div>

                <motion.div initial="hidden" animate={controls} variants={descVar} style={{ width: '100%' }}>
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
                            <ExpComponent key={tech.id} tech={tech} index={index} controls={iconControls} />
                        ))
                    }
                </div>
            </Box>
        </div>
    );
};

export default ExperiencieComponent;
