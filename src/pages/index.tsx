import { Box, useTheme, useMediaQuery } from '@mui/system';
import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import HeaderComponent from '../shared/components/home/Header';
import CoverComponent from '../shared/components/home/Cover';
import AboutMeComponent from '../shared/components/AboutMe';
import { useParams } from 'react-router-dom';
import PortfolioComponent from '../shared/components/Portfolio';
import ServicesComponent from '../shared/components/Services';
import ExperiencieComponent from '../shared/components/Experiencie';
import ContactComponent from '../shared/components/Contact';
import ProjectComponent from '../shared/components/Project';
import { useScrollContext } from '../shared/context/ScrollContext';
import { projectByName } from '../controllers/project.controller';
import { useSectionContext } from "../shared/context/SectionContext";
import { Project } from '../types/Project';

function App() {
  const { name } = useParams<{ name: string }>();
  const [project, setProject] = useState<Project>();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const { refs, scrollToSection } = useScrollContext();
  const { sections, toggleSection } = useSectionContext();

  async function openProject(name: string) {
    try {
      const data = await projectByName(name);
      setProject(data);
      scrollToSection('portfolioRef')
      const section = sections.find(item => item.id === 'portfolioRef');
      if (section) {
        setOpen(true)
        toggleSection(section);
      }
    } catch (error) {
      console.error('Erro ao carregar projeto:', error);
    }
  }

  useEffect(() => {
    if (!name) return;
    openProject(name);
  }, [name]);

  return (
    <Box display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)} alignItems={'center'} paddingTop={theme.spacing(3)}>
      <Box ref={refs.homeRef} id="homeRef" width={'90%'} display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen || mediumScreen ? 10 : 15)} alignItems={'center'}>
        <Box sx={mediumScreen ? {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          bgcolor: theme.palette.background.default,
          paddingY: theme.spacing(2.5),
          display: 'flex',
          justifyContent: 'center'
        } : { width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <HeaderComponent />
        </Box>
        <Box marginTop={smallScreen ? '' : theme.spacing(15)} width={'100%'} display={'flex'} justifyContent={'center'}>
          <CoverComponent />
        </Box>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-titulo"
          aria-describedby="modal-descricao"
        >
          <ProjectComponent project={project} closeProject={() => setOpen(false)} />
        </Modal>

      </Box>
      <Box ref={refs.aboutRef} id="aboutRef">
        <AboutMeComponent />
      </Box>
      <Box ref={refs.portfolioRef} id="portfolioRef">
        <PortfolioComponent openProject={openProject} />
      </Box>
      <Box ref={refs.servicesRef} id="servicesRef">
        <ServicesComponent />
      </Box>
      <Box ref={refs.experienceRef} id="experienceRef">
        <ExperiencieComponent />
      </Box>
      <Box ref={refs.contactRef} id="contactRef">
        <ContactComponent />
      </Box>
    </Box>
  )
}

export default App
