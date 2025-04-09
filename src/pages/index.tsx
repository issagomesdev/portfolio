import { Box, useTheme } from '@mui/system';
import HeaderComponent from '../shared/components/home/Header';
import CoverComponent from '../shared/components/home/Cover';
import AboutMeComponent from '../shared/components/AboutMe';
import PortfolioComponent from '../shared/components/Portfolio';
import ServicesComponent from '../shared/components/Services';
import ExperiencieComponent from '../shared/components/Experiencie';
import ContactComponent from '../shared/components/Contact';

function App() {
  const theme = useTheme();

  return (
    <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(10)} alignItems={'center'} paddingTop={theme.spacing(3)}>
      <HeaderComponent />
      <CoverComponent />
      <AboutMeComponent />
      <PortfolioComponent />
      <ServicesComponent />
      <ExperiencieComponent />
      <ContactComponent/>
    </Box>
  )
}

export default App
