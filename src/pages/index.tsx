import { Box, useTheme, useMediaQuery } from '@mui/system';
import HeaderComponent from '../shared/components/home/Header';
import CoverComponent from '../shared/components/home/Cover';
import AboutMeComponent from '../shared/components/AboutMe';
import PortfolioComponent from '../shared/components/Portfolio';
import ServicesComponent from '../shared/components/Services';
import ExperiencieComponent from '../shared/components/Experiencie';
import ContactComponent from '../shared/components/Contact';
import { useScrollContext } from '../shared/context/ScrollContext';

function App() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const { refs } = useScrollContext();

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
      </Box>
      <Box ref={refs.aboutRef} id="aboutRef">
        <AboutMeComponent />
      </Box>
      <Box ref={refs.portfolioRef} id="portfolioRef">
        <PortfolioComponent />
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
