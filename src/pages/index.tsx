import { Box, useTheme, useMediaQuery } from '@mui/system';
import HeaderComponent from '../shared/components/home/Header';
import CoverComponent from '../shared/components/home/Cover';
import AboutMeComponent from '../shared/components/AboutMe';
import PortfolioComponent from '../shared/components/Portfolio';
import ServicesComponent from '../shared/components/Services';
import ExperiencieComponent from '../shared/components/Experiencie';
import ContactComponent from '../shared/components/Contact';

function App() {
  const theme = useTheme();
  const miniScreen = useMediaQuery("(max-width:500px)");
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Box display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen ? 8 : mediumScreen ? 10 : 15)} alignItems={'center'} paddingTop={theme.spacing(3)}>
      <Box width={miniScreen? '100%' : '90%'} display={'flex'} flexDirection={'column'} rowGap={theme.spacing(smallScreen || mediumScreen ? 10 : 15)} alignItems={'center'}>
        <HeaderComponent />
        <CoverComponent />
      </Box>
      <AboutMeComponent />
      <PortfolioComponent />
      <ServicesComponent />
      <ExperiencieComponent />
      <ContactComponent />
    </Box>
  )
}

export default App
