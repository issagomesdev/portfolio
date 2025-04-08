import { Box, Button, Typography, useTheme } from "@mui/material";
import { projectItemBorder } from "../../styles/styles";

const Portfolio = () => {

    const theme = useTheme();

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={theme.spacing(15)} width={'100%'} marginBottom={'50px'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={theme.spacing(2)}>
                <Typography variant="sectionTitle"> Portfolio </Typography>
                <Box display={'flex'} width={'fit-content'} justifyContent={'space-between'} gap={theme.spacing(5)}>
                    <Typography variant="projectType"> Web </Typography>
                    <Typography variant="projectType"> Desktop </Typography>
                    <Typography variant="projectType"> Mobile </Typography>
                    <Typography variant="projectType"> Games </Typography>
                    <Typography variant="projectType"> Others </Typography>
                </Box>
            </Box>
            <Box display={'flex'} gap={theme.spacing(15)} flexDirection={'column'}>
                
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Box display={'flex'} width={'70%'}>
                        <Box width={'100%'} marginRight={theme.spacing(8)}>
                            <Box>
                                <Typography>Projeto 1</Typography>
                                <Typography>Storager - Your Store Manager</Typography>
                            </Box>
                            <Typography>Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula massa feugiat lacinia nullam dignissim vulputate. Risus bibendum aliquam donec ante dictum sagittis. Mauris senectus ridiculus nascetur parturient; per parturient fusce molestie? Orci condimentum nostra fames consequat nisl. Non lacinia nunc netus litora torquent hac nostra sapien. Dolor in netus et rhoncus neque dis nam.</Typography>
                            <Typography> ➞ ler mais </Typography>
                        </Box>
                        <Box sx={(theme) => projectItemBorder(theme)}>
                            <img src={`/images/projetcEx.png`} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                    </Box>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Box display={'flex'} width={'70%'} gap={theme.spacing(5)}>
                        <Box sx={(theme) => projectItemBorder(theme)}>
                            <img src={`/images/projetcEx.png`} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                        <Box width={'100%'} marginRight={theme.spacing(8)}>
                            <Box>
                                <Typography>Projeto 1</Typography>
                                <Typography>Storager - Your Store Manager</Typography>
                            </Box>
                            <Typography>Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula massa feugiat lacinia nullam dignissim vulputate. Risus bibendum aliquam donec ante dictum sagittis. Mauris senectus ridiculus nascetur parturient; per parturient fusce molestie? Orci condimentum nostra fames consequat nisl. Non lacinia nunc netus litora torquent hac nostra sapien. Dolor in netus et rhoncus neque dis nam.</Typography>
                            <Typography> ➞ ler mais </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Box display={'flex'} width={'70%'}>
                        <Box width={'100%'} marginRight={theme.spacing(8)}>
                            <Box>
                                <Typography>Projeto 1</Typography>
                                <Typography>Storager - Your Store Manager</Typography>
                            </Box>
                            <Typography>Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula massa feugiat lacinia nullam dignissim vulputate. Risus bibendum aliquam donec ante dictum sagittis. Mauris senectus ridiculus nascetur parturient; per parturient fusce molestie? Orci condimentum nostra fames consequat nisl. Non lacinia nunc netus litora torquent hac nostra sapien. Dolor in netus et rhoncus neque dis nam.</Typography>
                            <Typography> ➞ ler mais </Typography>
                        </Box>
                        <Box sx={(theme) => projectItemBorder(theme)}>
                            <img src={`/images/projetcEx.png`} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                    </Box>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                    <Box display={'flex'} width={'70%'} gap={theme.spacing(5)}>
                        <Box sx={(theme) => projectItemBorder(theme)}>
                            <img src={`/images/projetcEx.png`} style={{ width: '100%', height: 'auto' }} />
                        </Box>
                        <Box width={'100%'} marginRight={theme.spacing(8)}>
                            <Box>
                                <Typography>Projeto 1</Typography>
                                <Typography>Storager - Your Store Manager</Typography>
                            </Box>
                            <Typography>Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula massa feugiat lacinia nullam dignissim vulputate. Risus bibendum aliquam donec ante dictum sagittis. Mauris senectus ridiculus nascetur parturient; per parturient fusce molestie? Orci condimentum nostra fames consequat nisl. Non lacinia nunc netus litora torquent hac nostra sapien. Dolor in netus et rhoncus neque dis nam.</Typography>
                            <Typography> ➞ ler mais </Typography>
                        </Box>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Portfolio;