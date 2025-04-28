import { Box, useTheme, useMediaQuery } from '@mui/system';
import HeaderComponent from '../shared/components/home/Header';
import CoverComponent from '../shared/components/home/Cover';
import AboutMeComponent from '../shared/components/AboutMe';
import PortfolioComponent from '../shared/components/Portfolio';
import ServicesComponent from '../shared/components/Services';
import ExperiencieComponent from '../shared/components/Experiencie';
import ContactComponent from '../shared/components/Contact';
import { ScrollContext } from "../shared/context/ScrollContext";
import { useRef } from 'react';

function App() {
  const theme = useTheme();
  const miniScreen = useMediaQuery("(max-width:500px)");
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ homeRef, aboutRef, portfolioRef, servicesRef, experienceRef, contactRef }}>
    <Box ref={homeRef} display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)} alignItems={'center'} paddingTop={theme.spacing(3)}>
      <Box width={miniScreen ? '100%' : '90%'} display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen || mediumScreen ? 10 : 15)} alignItems={'center'}>
        <HeaderComponent />
        <CoverComponent />
      </Box>
      <Box ref={aboutRef}>
        <AboutMeComponent />
      </Box>
      <Box ref={portfolioRef}>
        <PortfolioComponent />
      </Box>
      <Box ref={servicesRef}>
        <ServicesComponent />
      </Box>
      <Box ref={experienceRef}>
        <ExperiencieComponent />
      </Box>
      <Box ref={contactRef}>
        <ContactComponent />
      </Box>
    </Box>
    </ScrollContext.Provider>
  )
}

export default App
