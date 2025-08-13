import { Box, useTheme, useMediaQuery } from '@mui/system';
import { Modal, Backdrop, CircularProgress } from '@mui/material';
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
import { Project } from '../types/Project';

function App() {
  const { name } = useParams<{ name: string }>();
  const [project, setProject] = useState<Project>();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [opening, setOpening] = useState(false);
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const { refs } = useScrollContext();

  async function openProject(name: string) {
    setOpening(true);
    try {
      const data = await projectByName(name);
      if (data) {
        setOpen(true)
        setProject(data);
      }
    } catch (error) {
      console.error('Erro ao carregar projeto:', error);
      window.history.replaceState(null, '', '/');
    } finally {
      setOpening(false);
    }
  }

  useEffect(() => {
    if (!name) return;
    openProject(name);
  }, [name]);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box ref={refs.homeRef} id="homeRef" width={'90%'} display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen || mediumScreen ? 10 : 15)} alignItems={'center'} paddingTop={theme.spacing(3)}>
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

        <Modal open={open} onClose={() => setOpen(false)}>
          <ProjectComponent project={project} closeProject={() => {
            setOpen(false);
            window.history.replaceState(null, '', `/`);
          }} />
        </Modal>

        <Backdrop open={opening} sx={{ color: '#fff', zIndex: (t) => t.zIndex.modal + 1 }}>
          <CircularProgress />
        </Backdrop>

      </Box>
      <Box ref={refs.aboutRef} id="aboutRef" paddingTop={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)}>
        <AboutMeComponent />
      </Box>
      <Box ref={refs.portfolioRef} id="portfolioRef" paddingTop={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)}>
        <PortfolioComponent openProject={openProject} />
      </Box>
      <Box ref={refs.servicesRef} id="servicesRef" paddingTop={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)}>
        <ServicesComponent />
      </Box>
      <Box ref={refs.experienceRef} id="experienceRef" paddingTop={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)}>
        <ExperiencieComponent />
      </Box>
      <Box ref={refs.contactRef} id="contactRef" paddingTop={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)}>
        <ContactComponent />
      </Box>
    </Box>
  )
}

export default App
