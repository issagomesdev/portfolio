import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ProjectItem } from "./ui/styles/ProjectItem";
import { Project } from '../../types/Project';
import { Category } from '../../types/Category';
import { Tech } from '../../types/Tech';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { allProjects } from '../../controllers/project.controller';
import { getCategories } from "../../controllers/category.controller";
import { getTechs } from "../../controllers/tech.controller";
import { PaginationComponent } from './PaginationComponent';
import { Icon } from "@iconify/react";
import ImageWithSkeleton from "./Skeleton/ImageWithSkeleton";
import React from "react";
import { motion } from "framer-motion";

type Props = {
    openProject: (name: string) => void;
};

const ProjectCard = forwardRef<HTMLDivElement, {
    project: Project;
    index: number;
    openProject: (name: string) => void;
    ProjectItem: (theme: any, offset: string) => any;
    allTechs: Tech[];
}>(({ project, openProject, ProjectItem, allTechs }, ref) => {
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    // On mobile use y-slide to avoid horizontal overflow; desktop uses alternating x-slide
    const xOffset = mediumScreen ? 0 : (project.id % 2 === 0 ? 70 : -70);
    const yOffset = mediumScreen ? 32 : 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: xOffset, y: yOffset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ width: mediumScreen ? '80%' : '60%' }}
        >
            <Box
                ref={ref}
                display="flex"
                width={'100%'}
                gap={(mediumScreen || mediumScreen2) ? theme.spacing(7) : theme.spacing(8)}
                {...(mediumScreen || mediumScreen2
                    ? { flexDirection: 'column-reverse', alignItems: project.id % 2 === 0 ? 'flex-end' : 'flex-start' }
                    : { flexDirection: project.id % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'flex-start' })}
                {...(mediumScreen ? { right: '5%' } : {})}
            >
                <Box width={mediumScreen ? '100%' : '80%'} display="flex" flexDirection="column" gap={theme.spacing(1)}>
                    <Box display="flex" flexDirection="column" alignItems={(mediumScreen || mediumScreen2) && project.id % 2 === 0 ? 'flex-end' : 'flex-start'}>
                        <Typography variant="projectNumber" color={theme.palette.primary.main} {...(mediumScreen ? { fontSize: theme.spacing(4.5), lineHeight: theme.spacing(4.5) } : {})}>
                            Projeto {project.id}
                        </Typography>
                        <Typography variant="projectName" textAlign={(mediumScreen || mediumScreen2) && project.id % 2 === 0 ? 'end' : 'start'} {...(mediumScreen ? { fontSize: theme.spacing(3.5), lineHeight: theme.spacing(3.5) } : {})}>
                            {project.name}
                        </Typography>
                    </Box>

                    <Typography textAlign="justify">{project.description}</Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 0.5 }}>
                        {project.techs.map((techId) => {
                            const tech = allTechs.find(t => t.id === techId);
                            if (!tech) return null;
                            return (
                                <Box
                                    key={tech.id}
                                    sx={{
                                        px: 1,
                                        py: 0.3,
                                        borderRadius: '4px',
                                        backgroundColor: tech.color ?? '#555',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', textTransform: 'lowercase', lineHeight: 1.4 }}>
                                        {tech.name}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>

                    <Box sx={{ display: 'flex', gap: .8, alignItems: 'center' }}>
                        {project.repositoryLink && (
                            <a href={project.repositoryLink} style={{ color: theme.palette.primary.contrastText, display: 'flex', WebkitTapHighlightColor: 'transparent' }}>
                                <Icon icon="mdi:github" width={theme.spacing(4)} />
                            </a>
                        )}
                        {project.demoLink && (
                            <a href={`https://${project.demoLink}`} style={{ color: theme.palette.primary.contrastText, display: 'flex', WebkitTapHighlightColor: 'transparent' }}>
                                <Icon icon="line-md:link" width={theme.spacing(3.5)} />
                            </a>
                        )}
                    </Box>

                    {/* "ler mais" desliza ao hover */}
                    <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
                        <Typography
                            fontFamily="Staatliches"
                            color={theme.palette.primary.main}
                            sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                            onClick={() => {
                                openProject(project.name);
                                window.history.replaceState(null, '', '' + `/project/${encodeURIComponent(project.name)}`);
                            }}
                        >
                            ➞ ler mais
                        </Typography>
                    </motion.div>
                </Box>

                <Box sx={(t) => ProjectItem(t, mediumScreen ? '0%' : mediumScreen2 ? '-4%' : '30px')} {...(mediumScreen || mediumScreen2 ? { width: mediumScreen ? '80%' : '70%' } : { width: theme.spacing(120) })}>
                    <ImageWithSkeleton
                        src={project.imageUrl}
                        alt={project.name}
                        ratio="4/3"
                        rounded={false}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>
        </motion.div>
    );
});

const PortfolioComponent = ({ openProject }: Props) => {
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between("md", "lg"));

    const [projects, setProjects] = useState<Project[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [allTechs, setAllTechs] = useState<Tech[]>([]);
    const [categorySelected, setCategorySelected] = useState<number | null>(null);
    const [techsSelected, setTechsSelected] = useState<number[]>([]);
    const [techDropdownOpen, setTechDropdownOpen] = useState(false);
    const techDropdownRef = useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageChanged, setpageChanged] = useState(false);
    const scrollUp = useRef<HTMLDivElement | null>(null);

    const scrollToFirst = () => {
        if (!scrollUp.current) return;
        const top = scrollUp.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top - (mediumScreen ? 40 : 120), behavior: "smooth" });
    };

    const toggleTech = (id: number) => {
        setPage(1);
        setTechsSelected(prev =>
            prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
        );
    };

    // Fecha dropdown ao clicar fora
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (techDropdownRef.current && !techDropdownRef.current.contains(e.target as Node)) {
                setTechDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Carrega categorias e techs uma única vez
    useEffect(() => {
        Promise.all([getCategories(), getTechs()]).then(([dataCategories, dataTechs]) => {
            setCategories(dataCategories.data);
            setAllTechs(dataTechs.data);
        });
    }, []);

    React.useEffect(() => {
        let active = true;
        async function load() {
            setLoading(true);
            try {
                console.log(techsSelected)
                const dataProjects = await allProjects({
                    page,
                    categories: categorySelected ?? undefined,
                    techs: techsSelected.length ? techsSelected.join(',') : undefined,
                });
                if (!active) return;
                setProjects(dataProjects.data);
                setTotalPages(Math.ceil(dataProjects.total / dataProjects.perPage));
            } finally {
                if (active) {
                    setLoading(false);
                    if (pageChanged) {
                        requestAnimationFrame(() => scrollToFirst());
                        setpageChanged(false);
                    }
                }
            }
        }
        load();
        return () => { active = false; };
    }, [page, categorySelected, techsSelected]);

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" gap={theme.spacing(mediumScreen ? 8 : 10)} width="100%">

            {/* Título + filtros — desce do topo */}
            <motion.div
                initial={{ opacity: 0, y: -28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Box display="flex" flexDirection="column" alignItems="center" gap={theme.spacing(2)}>
                    <Typography variant="sectionTitle">Portfolio</Typography>

                    {/* Filtro de categorias */}
                    <Box display="flex" width="fit-content" mx={theme.spacing(1.5)} {...(mediumScreen ? { justifyContent: 'center', flexWrap: 'wrap' } : { justifyContent: 'space-between' })} columnGap={theme.spacing(4)}>
                        <Typography
                            sx={{ cursor: 'pointer' }}
                            variant="projectType"
                            {...(categorySelected === null ? { color: theme.palette.primary.main } : null)}
                            onClick={() => { setPage(1); setCategorySelected(null); }}
                        >
                            Todos
                        </Typography>
                        {categories.map((category) => (
                            <Typography
                                key={category.id}
                                sx={{ cursor: 'pointer' }}
                                variant="projectType"
                                {...(category.id === categorySelected ? { color: theme.palette.primary.main } : null)}
                                onClick={() => { setPage(1); setCategorySelected(category.id); }}
                            >
                                {category.name}
                            </Typography>
                        ))}
                    </Box>

                    {/* Filtro de techs — dropdown multi-select */}
                    <Box ref={techDropdownRef} sx={{ position: 'relative', width: mediumScreen ? '80vw' : 480 }}>
                        {/* Trigger */}
                        <Box
                            onClick={() => setTechDropdownOpen(prev => !prev)}
                            sx={{
                                display: 'flex', alignItems: 'center',
                                px: 2.5, py: 1.2, cursor: 'pointer',
                               boxShadow: theme.palette.mode === 'dark' ? 'none' : 'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                                borderRadius: '8px',
                                width: '100%',
                                justifyContent: 'space-between',
                                bgcolor: theme.palette.background.paper,
                                WebkitTapHighlightColor: 'transparent',
                            }}
                        >
                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, color: theme.palette.primary.contrastText }}>
                                {techsSelected.length === 0 ? 'Tecnologias' : `${techsSelected.length} selecionada${techsSelected.length > 1 ? 's' : ''}`}
                            </Typography>
                            <Icon icon={techDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'} width={20} color={theme.palette.primary.contrastText} />
                        </Box>

                        {/* Painel */}
                        {techDropdownOpen && (
                            <Box sx={{
                                position: 'absolute',
                                top: 'calc(100% + 6px)',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 10,
                                bgcolor: theme.palette.background.paper,
                                
                                borderRadius: '8px',
                                p: 1.5,
                                width: '100%',
                                boxShadow: theme.palette.mode === 'dark' ? 'none' : 'rgba(0, 0, 0, 0) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                            }}>
                                {/* Opção "Todos" */}
                                <Box
                                    onClick={() => { setPage(1); setTechsSelected([]); }}
                                    sx={{
                                        display: 'flex', alignItems: 'center', gap: 1.2,
                                        px: 1, py: 0.8, borderRadius: '4px', cursor: 'pointer',
                                        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#3a3a3a' : '#b0b0b0'}`,
                                        mb: 1,
                                        WebkitTapHighlightColor: 'transparent',
                                        '&:hover': { bgcolor: theme.palette.mode === 'dark' ? '#2f2f2f' : '#bdbdbd' },
                                    }}
                                >
                                    <Icon
                                        icon={techsSelected.length === 0 ? 'mdi:checkbox-marked' : 'mdi:checkbox-blank-outline'}
                                        width={18}
                                        color={techsSelected.length === 0 ? theme.palette.primary.main : theme.palette.text.secondary}
                                    />
                                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'lowercase', color: theme.palette.text.primary }}>
                                        Todas
                                    </Typography>
                                </Box>

                                {/* Techs */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                                    {allTechs.map((tech) => {
                                        const selected = techsSelected.includes(tech.id);
                                        return (
                                            <Box
                                                key={tech.id}
                                                onClick={() => toggleTech(tech.id)}
                                                sx={{
                                                    display: 'flex', alignItems: 'center', gap: 0.5,
                                                    px: 1.2, py: 0.4, borderRadius: '4px', cursor: 'pointer',
                                                    border: `1px solid ${tech.color ?? '#555'}`,
                                                    backgroundColor: selected ? (tech.color ?? '#555') : 'transparent',
                                                    transition: 'background-color 0.2s, opacity 0.2s',
                                                    opacity: techsSelected.length === 0 || selected ? 1 : 0.45,
                                                    WebkitTapHighlightColor: 'transparent',
                                                }}
                                            >
                                                {selected && <Icon icon="mdi:check" width={12} color="#fff" />}
                                                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: selected ? '#fff' : (tech.color ?? '#555'), whiteSpace: 'nowrap', textTransform: 'lowercase', lineHeight: 1.4 }}>
                                                    {tech.name}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </motion.div>

            <Box display="flex" gap={(mediumScreen || mediumScreen2) ? theme.spacing(9) : theme.spacing(15)} flexDirection="column" alignItems="center">
                {loading
                    ? <Typography>carregando...</Typography>
                    : projects.length < 1
                        ? <Typography width="80%" align="center" p={theme.spacing(3)} bgcolor={theme.palette.background.paper}>
                            Projetos em desenvolvimento. Dê uma passada aqui mais tarde ou entre em contato para saber mais.
                        </Typography>
                        : projects.map((project, index) => (
                            <ProjectCard
                                key={`${project.id}-${categorySelected}-${techsSelected.join(',')}`}
                                ref={index === 0 ? scrollUp : null}
                                project={project}
                                index={index}
                                openProject={openProject}
                                ProjectItem={ProjectItem}
                                allTechs={allTechs}
                            />
                        ))
                }
                {projects.length > 0 &&
                    <PaginationComponent
                        totalPages={totalPages}
                        currentPage={page}
                        onPageChange={(p) => { setPage(p); setpageChanged(true); }}
                    />
                }
            </Box>
        </Box>
    );
};

export default PortfolioComponent;
