import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import { Section } from "../../types/section";
import { useSectionContext } from "../context/SectionContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollContext } from "../context/ScrollContext";


const FloatingMenu = () => {

    const theme = useTheme();
    const { sections, section, toggleSection } = useSectionContext();
    const { homeRef, aboutRef, portfolioRef, servicesRef, experienceRef } = useScrollContext();


    const [status, setStatus] = useState<boolean>(false);

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
            <Box onClick={() => { toggleSection(item); handleClick() }} display={'flex'} flexDirection={'column'} gap={1} padding={1} zIndex={100} bgcolor={section?.id == item.id ? theme.palette.primary.main : theme.palette.secondary.main} borderRadius={10} boxShadow={theme.shadows[3]} sx={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <Icon icon={item.icon} width={theme.spacing(4)} color={theme.palette.background.default} />
            </Box>
        )
    }

    return (
        <Box position={'fixed'} bottom={10} right={10} display={'flex'} flexDirection={'row-reverse'} alignItems={'center'} gap={2} padding={1} zIndex={100}>
            <Box onClick={() => setStatus(!status)} display={'flex'} flexDirection={'column'} gap={1} padding={1} zIndex={100} bgcolor={theme.palette.secondary.main} borderRadius={10} boxShadow={theme.shadows[3]} sx={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <Icon icon={status ? 'line-md:menu-to-close-alt-transition' : 'proicons:apps'} width={theme.spacing(4)} color={theme.palette.background.default} />
            </Box>
            <AnimatePresence>
                {status && (
                    <Box component={motion.div} display="flex" gap={1} zIndex={100}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {sections.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <MenuItemComponent {...item} />
                            </motion.div>
                        ))}
                    </Box>
                )}
            </AnimatePresence>
        </Box>
    )

}

export default FloatingMenu;