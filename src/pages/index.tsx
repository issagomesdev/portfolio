import { Box, useTheme } from '@mui/system';
import Header from '../shared/components/home/Header';
import CoverPage from '../shared/components/home/Cover';
import AboutMe from '../shared/components/AboutMe';
import Portfolio from '../shared/components/Portfolio';

function App() {
  const theme = useTheme();

  return (
    <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(10)} alignItems={'center'} paddingTop={theme.spacing(3)} paddingX={theme.spacing(4)}>
    <Header/>
    <CoverPage/>
    <AboutMe/>
    <Portfolio/>
  </Box>
  )
}

export default App
