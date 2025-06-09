import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ProjectItem } from "./ui/styles/ProjectItem";
import { Project } from '../../types/Project';
import { Category } from '../../types/Category';
import { useEffect, useState } from 'react';
import { allProjects } from '../../controllers/project.controller';
import { getCategories } from "../../controllers/category.controller";
import { PaginationComponent } from './PaginationComponent';
import { useNavigate } from 'react-router-dom';

const PortfolioComponent = () => {

    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const navigate = useNavigate();

    const [projects, setProjects] = useState<Project[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [categorySelected, setCategorySelected] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function load() {
            try {
                const dataProjects = await allProjects({ page: page, categories: categorySelected })
                setProjects(dataProjects.data)
                setTotalPages(Math.ceil(dataProjects.total / dataProjects.perPage))
                const dataCategories = await getCategories();
                setCategories(dataCategories.data);
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [page, categorySelected])

    const ProjectComponent = (project: Project) => {
        return (
            <Box display={'flex'} width={mediumScreen ? '80%' : '60%'} gap={mediumScreen || mediumScreen2 ? theme.spacing(7) : theme.spacing(8)} {...(mediumScreen || mediumScreen2 ? { flexDirection: 'column-reverse', alignItems: project.id % 2 === 0 ? 'flex-end' : 'flex-start' } : { flexDirection: project.id % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'flex-start' })}{...(mediumScreen ? { right: '5%' } : {})}>
                <Box width={mediumScreen ? '100%' : '80%'} display={'flex'} flexDirection={'column'} gap={theme.spacing(1)}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={(mediumScreen || mediumScreen2) && project.id % 2 === 0 ? 'flex-end' : 'flex-start'}>
                        <Typography variant="projectNumber" color={theme.palette.primary.main} {...(mediumScreen ? { fontSize: theme.spacing(4.5), lineHeight: theme.spacing(4.5) } : {})}>Projeto {project.id}</Typography>
                        <Typography variant="projectName" textAlign={(mediumScreen || mediumScreen2) && project.id % 2 === 0 ? 'end' : 'start'} {...(mediumScreen ? { fontSize: theme.spacing(3.5), lineHeight: theme.spacing(3.5) } : {})}>{project.name}</Typography>
                    </Box>
                    <Typography textAlign={'justify'}>{project.description}</Typography>
                    <Typography fontFamily={'Staatliches'} color={theme.palette.primary.main} sx={{ cursor: 'pointer' }} onClick={() => navigate(`/project/${project.name}`)}> ➞ ler mais </Typography>
                </Box>
                <Box sx={(theme) => ProjectItem(theme, mediumScreen || mediumScreen2 ? '-8%' : '30px')} {...(mediumScreen || mediumScreen2 ? { width: mediumScreen ? '80%' : '70%' } : { width: theme.spacing(120) })}>
                    <img src={project.imageUrl} style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Box>
        )
    }

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={theme.spacing(mediumScreen ? 8 : mediumScreen2 ? 10 : 15)} width={'100%'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(2)}>
                <Typography variant="sectionTitle"> Portfolio </Typography>
                <Box display={'flex'} width={'fit-content'} marginX={theme.spacing(1.5)} {...(mediumScreen ? { justifyContent: 'center', flexWrap: 'wrap' } : { justifyContent: 'space-between' })} columnGap={theme.spacing(4)}>
                    <Typography sx={{ cursor: 'pointer' }} variant="projectType" {...(categorySelected === null ? { color: theme.palette.primary.main } : null)} onClick={() => setCategorySelected(null)}> Todos </Typography>
                    {!loading ? categories.map((category) => (
                        <Typography sx={{ cursor: 'pointer' }} key={category.id} variant="projectType" {...(category.id == categorySelected ? { color: theme.palette.primary.main } : null)} onClick={() => setCategorySelected(category.id)}> {category.name} </Typography>
                    )) : null}
                </Box>
            </Box>
            <Box display={'flex'} gap={mediumScreen || mediumScreen2 ? theme.spacing(9) : theme.spacing(15)} flexDirection={'column'} alignItems={'center'}>
                {loading ? <Typography> carregando... </Typography> : projects.length < 1 ? <Typography width={'80%'} align={'center'} padding={theme.spacing(3)} bgcolor={theme.palette.background.paper}> Projetos incríveis estão sendo desenvolvidos! Dê uma passada aqui mais tarde ou entre em contato para saber mais. </Typography> : projects.map((project) => (<ProjectComponent key={project.id} {...project} />))}
                <PaginationComponent totalPages={totalPages} currentPage={page} onPageChange={setPage} />
            </Box>
        </Box>
    )
}

export default PortfolioComponent;