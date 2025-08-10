import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import LogoComponent from "../ui/components/Logo";
import FloatingMenu from "../FloatingMenu";
import { Section } from "../../../types/Section";
import { useSectionContext } from "../../context/SectionContext";
import { useScrollContext } from "../../context/ScrollContext";

const HeaderComponent = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery("(max-width:600px)");
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const largerScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const { sections, section, toggleSection } = useSectionContext();
    const { scrollToSection } = useScrollContext();

    const MenuItemComponent = (item: Section) => {
        return (
            <Box sx={{ cursor: 'pointer' }}>
                <Typography variant="menuItem" onClick={() => { toggleSection(item); scrollToSection(item.id) }} {...(mediumScreen ? { display: 'none' } : largerScreen ? { fontSize: theme.spacing(2) } : null)} color={section?.id == item.id ? theme.palette.primary.main : theme.palette.secondary.main}>{item.name}</Typography>
            </Box>
        )
    }

    return (
        <Box display={'flex'} gap={theme.spacing(mediumScreen ? 3 : 8)} width={mediumScreen ? '100%' : '90%'}>
            <LogoComponent />
            <Box display={'flex'} flexDirection={'row'} {...(mediumScreen ? { justifyContent: 'flex-end' } : { justifyContent: 'space-between' })} alignItems={'center'} width={'100%'}>
                {sections?.map((item, index) => (
                    <MenuItemComponent key={index} {...item} />
                ))}
                <Button sx={{ backgroundColor: theme.palette.secondary.main, color: 'white', paddingLeft: theme.spacing(3), paddingRight: theme.spacing(3), ...(smallScreen ? { fontSize: theme.spacing(1.5) } : mediumScreen || largerScreen ? { fontSize: theme.spacing(2) } : { fontSize: theme.spacing(2.5) }) }} onClick={() => scrollToSection('contactRef')}>Contato</Button>
            </Box>
            {mediumScreen ? <FloatingMenu /> : null}
        </Box>
    )
}

export default HeaderComponent;