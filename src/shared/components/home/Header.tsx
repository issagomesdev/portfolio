import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import LogoComponent from "../ui/Logo";
import FloatingMenu from "../FloatingMenu";
import { Section } from "../../../types/section";
import { useSectionContext } from "../../context/SectionContext";
import { useScrollContext } from "../../context/ScrollContext";

const HeaderComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery("(max-width:500px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const largerScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const { sections, section, toggleSection } = useSectionContext();
        const { homeRef, aboutRef, portfolioRef, servicesRef, experienceRef, contactRef } = useScrollContext();


    const MenuItemComponent = (item: Section) => {

        const handleClick = () => {
            switch (item.name) {
                case 'Home':
                    homeRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Sobre Mim':
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Portfolio':
                    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Serviços':
                    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
                case 'Experiência':
                    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
                    break;
            }
        };

        return (
            <Box sx={{ cursor: 'pointer' }}>
                <Typography variant="menuItem" onClick={() => {toggleSection(item); handleClick()}} {...(mediumScreen ? { display: 'none' } : largerScreen ? { fontSize: theme.spacing(2) } : null)} color={section?.id == item.id ? theme.palette.primary.main : theme.palette.secondary.main}>{item.name}</Typography>
            </Box>
        )
    }

    return (
        <Box display={'flex'} gap={theme.spacing(mediumScreen ? 3 : 8)} width={smallScreen ? '90%' : '100%'}>
            <LogoComponent />
            <Box display={'flex'} flexDirection={'row'} {...(mediumScreen ? { justifyContent: 'flex-end' } : { justifyContent: 'space-between' })} alignItems={'center'} width={'100%'}>
                {sections?.map((item, index) => (
                    <MenuItemComponent key={index} {...item} />
                ))}
                <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3), ...(smallScreen ? { fontSize: theme.spacing(1.5) } : mediumScreen || largerScreen ? { fontSize: theme.spacing(2) } : { fontSize: theme.spacing(2.5) }) }} onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}>Contato</Button>
            </Box>
            {mediumScreen ? <FloatingMenu /> : null}
        </Box>
    )
}

export default HeaderComponent;