import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { ProjectItem } from "./ui/styles/ProjectItem";
import { Project } from '../../types/Project';
import { useEffect, useState } from 'react'
import { getProjects } from '../../controllers/project.controller';
import { PaginationComponent } from './PaginationComponent'

const PortfolioComponent = () => {

    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const mediumScreen2 = useMediaQuery(theme.breakpoints.between("md", "lg"));

    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        async function load() {
            try {
                const data = await getProjects({ page: page })
                console.log(data)
                setProjects(data.data)
                setTotalPages(Math.ceil(data.total / data.perPage))
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [page])

    const ProjectComponent = (project: Project) => {
        return (
            <Box display={'flex'} width={mediumScreen ? '80%' : '60%'} gap={mediumScreen || mediumScreen2 ? theme.spacing(7) : theme.spacing(8)} {...(mediumScreen || mediumScreen2 ? { flexDirection: 'column-reverse', alignItems: project.id % 2 === 0 ? 'flex-end' : 'flex-start' } : { flexDirection: project.id % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'flex-start' })}{...(mediumScreen ? { right: '5%' } : {})}>
                <Box width={mediumScreen ? '100%' : '80%'} display={'flex'} flexDirection={'column'} gap={theme.spacing(1)}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={(mediumScreen || mediumScreen2) && project.id % 2 === 0 ? 'flex-end' : 'flex-start'}>
                        <Typography variant="projectNumber" color={theme.palette.primary.main} {...(mediumScreen ? { fontSize: theme.spacing(4.5), lineHeight: theme.spacing(4.5) } : {})}>Projeto {project.id}</Typography>
                        <Typography variant="projectName" textAlign={(mediumScreen || mediumScreen2) && project.id % 2 === 0 ? 'end' : 'start'} {...(mediumScreen ? { fontSize: theme.spacing(3.5), lineHeight: theme.spacing(3.5) } : {})}>{project.name}</Typography>
                    </Box>
                    <Typography textAlign={'justify'}>{project.description}</Typography>
                    <Typography fontFamily={'Staatliches'} color={theme.palette.primary.main}> ➞ ler mais </Typography>
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
                    <Typography variant="projectType" color={theme.palette.primary.main}> Web </Typography>
                    <Typography variant="projectType"> Desktop </Typography>
                    <Typography variant="projectType"> Mobile </Typography>
                    <Typography variant="projectType"> Games </Typography>
                    <Typography variant="projectType"> Others </Typography>
                </Box>
            </Box>
            <Box display={'flex'} gap={mediumScreen || mediumScreen2 ? theme.spacing(9) : theme.spacing(15)} flexDirection={'column'} alignItems={'center'}>
                {loading? <Typography> carregando... </Typography> : projects.map((project) => (
                    <ProjectComponent key={project.id} {...project} />
                ))}

                <PaginationComponent totalPages={8} currentPage={page} onPageChange={setPage} />
            </Box>
        </Box>
    )
}

export default PortfolioComponent;