import {Icon, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useAppThemeContext } from '../shared/context';
import Header from '../shared/components/Header';
import CoverPage from '../shared/components/Cover';

function App() {
  const { toggleTheme } = useAppThemeContext();
  const theme = useTheme();

  return (
    <Box display={'flex'} flexDirection={'column'} gap={theme.spacing(10)} alignItems={'center'} paddingTop={theme.spacing(3)} paddingX={theme.spacing(4)}>
    <Header/>
    <CoverPage/>
  </Box>
  )
}

export default App
