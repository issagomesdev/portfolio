import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
const ExperiencieComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const smallScreen2 = useMediaQuery("(max-width:425px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    type ExpItem = {
        id: number
        name: string
        icon: string
    }

    const expData: ExpItem[] = [
        {
            id: 1,
            name: 'aws',
            icon: 'logos:aws'
        },
        {
            id: 2,
            name: 'php',
            icon: 'devicon:php'
        },
        {
            id: 3,
            name: 'laravel',
            icon: 'logos:laravel'
        },
        {
            id: 4,
            name: 'codeigniter',
            icon: 'logos:codeigniter-icon'
        },
        {
            id: 5,
            name: 'wordpress',
            icon: 'skill-icons:wordpress'
        },
        {
            id: 6,
            name: 'javascript',
            icon: 'vscode-icons:file-type-js-official'
        },
        {
            id: 7,
            name: 'typescript',
            icon: 'skill-icons:typescript'
        },
        {
            id: 8,
            name: 'node',
            icon: 'fa-brands:node'
        },
        {
            id: 9,
            name: 'react',
            icon: 'devicon:react'
        },
        {
            id: 10,
            name: 'react native',
            icon: 'devicon:reactnative-wordmark'
        },
        {
            id: 11,
            name: 'angular',
            icon: 'vscode-icons:file-type-angular'
        },
        {
            id: 12,
            name: 'vue',
            icon: 'logos:vue'
        },
        {
            id: 13,
            name: 'electron',
            icon: 'devicon:electron'
        },
        {
            id: 14,
            name: 'python',
            icon: 'devicon:python-wordmark'
        },
        {
            id: 15,
            name: 'C++',
            icon: 'skill-icons:cpp'
        },
        {
            id: 16,
            name: 'C#',
            icon: 'skill-icons:cs'
        },
        {
            id: 17,
            name: 'unity',
            icon: 'devicon:unity'
        },
        {
            id: 18,
            name: 'sql',
            icon: 'ph:file-sql-fill'
        },
        {
            id: 19,
            name: 'mysql',
            icon: 'logos:mysql'
        },
        {
            id: 20,
            name: 'postgresql',
            icon: 'devicon:postgresql'
        },
        {
            id: 21,
            name: 'figma',
            icon: 'devicon:figma'
        }
    ]

    const ExpComponent = ({ name, icon }: ExpItem) => {
        return (
            <Box width={mediumScreen? '33.3%' : '20%'} display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} alignItems={'center'} gap={theme.spacing(3)}>
                <Icon icon={icon} width={smallScreen? theme.spacing(5) : mediumScreen? theme.spacing(10) : theme.spacing(13)} />
                <Typography textAlign={'center'} sx={{wordBreak: 'break-all'}} {...(smallScreen2? {fontSize: theme.spacing(1.5)} : {})}>{name}</Typography>
            </Box>
        )
    }

    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <Box width={'80%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(4)}>
                <Typography variant="sectionTitle"> Experiência </Typography>
                <Typography textAlign={'justify'}>Tenho experiência sólida com uma ampla variedade de tecnologias modernas, atuando tanto no desenvolvimento frontend quanto backend, além de projetos mobile, jogos e design de interface. Essa diversidade de tecnologias me permite trabalhar em diferentes tipos de projetos, com foco na criação de soluções eficientes, escaláveis e com boa experiência de usuário. Abaixo estão as ferramentas e linguagens com as quais já trabalhei de forma prática:</Typography>
                <Box display={'flex'} flexWrap={'wrap'} rowGap={theme.spacing(10)} justifyContent={mediumScreen ? 'space-between' : 'center'}>
                    {expData.map((item) => (
                        <ExpComponent
                            id={item.id}
                            name={item.name}
                            icon={item.icon}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ExperiencieComponent;