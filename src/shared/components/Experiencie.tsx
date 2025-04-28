import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
const ExperiencieComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

    type ExpItem = {
        id: number
        title: string
        icon: string
    }

    const expData: ExpItem[] = [
        {
            id: 1,
            title: 'aws',
            icon: 'logos:aws'
        },
        {
            id: 2,
            title: 'php',
            icon: 'devicon:php'
        },
        {
            id: 3,
            title: 'laravel',
            icon: 'logos:laravel'
        },
        {
            id: 4,
            title: 'codeigniter',
            icon: 'logos:codeigniter-icon'
        },
        {
            id: 5,
            title: 'wordpress',
            icon: 'skill-icons:wordpress'
        },
        {
            id: 6,
            title: 'javascript',
            icon: 'vscode-icons:file-type-js-official'
        },
        {
            id: 7,
            title: 'typescript',
            icon: 'skill-icons:typescript'
        },
        {
            id: 8,
            title: 'node',
            icon: 'fa-brands:node'
        },
        {
            id: 9,
            title: 'react',
            icon: 'devicon:react'
        },
        {
            id: 10,
            title: 'react native',
            icon: 'devicon:reactnative-wordmark'
        },
        {
            id: 11,
            title: 'angular',
            icon: 'vscode-icons:file-type-angular'
        },
        {
            id: 12,
            title: 'vue',
            icon: 'logos:vue'
        },
        {
            id: 13,
            title: 'electron',
            icon: 'devicon:electron'
        },
        {
            id: 14,
            title: 'python',
            icon: 'devicon:python-wordmark'
        },
        {
            id: 15,
            title: 'C++',
            icon: 'skill-icons:cpp'
        },
        {
            id: 16,
            title: 'C#',
            icon: 'skill-icons:cs'
        },
        {
            id: 17,
            title: 'unity',
            icon: 'devicon:unity'
        },
        {
            id: 18,
            title: 'sql',
            icon: 'ph:file-sql-fill'
        },
        {
            id: 19,
            title: 'mysql',
            icon: 'logos:mysql'
        },
        {
            id: 20,
            title: 'postgresql',
            icon: 'devicon:postgresql'
        },
        {
            id: 21,
            title: 'figma',
            icon: 'devicon:figma'
        }
    ]

    const ExpComponent = ({ title, icon }: ExpItem) => {
        return (
            <Box flex={smallScreen ? '1 1 33.3%' : '0 0 calc(20%)'} display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} alignItems={'center'} gap={theme.spacing(3)}>
                <Icon icon={icon} width={'50%'} />
                <Typography textAlign={'center'}>{title}</Typography>
            </Box>
        )
    }

    return (
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <Box width={'80%'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(4)}>
                <Typography variant="sectionTitle"> Experiência </Typography>
                <Typography textAlign={'justify'}>Tenho experiência sólida com uma ampla variedade de tecnologias modernas, atuando tanto no desenvolvimento frontend quanto backend, além de projetos mobile, jogos e design de interface. Essa diversidade de tecnologias me permite trabalhar em diferentes tipos de projetos, com foco na criação de soluções eficientes, escaláveis e com boa experiência de usuário. Abaixo estão as ferramentas e linguagens com as quais já trabalhei de forma prática:</Typography>
                <Box display={'flex'} flexWrap={'wrap'} rowGap={theme.spacing(10)} justifyContent={smallScreen ? 'space-between' : 'center'}>
                    {expData.map((item) => (
                        <ExpComponent
                            id={item.id}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ExperiencieComponent;