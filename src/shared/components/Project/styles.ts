import { Box, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '1rem',
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  alignItems: 'flex-start'
}));

export const ProjectContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '93%',
  backgroundColor: `${theme.palette.background.default}`,
  borderRadius: 4,
  boxShadow: theme.shadows[5],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ProjectContent = styled(Box)(({ theme }) => ({
  padding: '30px',
  overflow: 'auto',
  width: '90%',
  height: '85%',
  backgroundColor: `${theme.palette.background.paper}`,
  boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;',
  borderRadius: 4,

  '&::-webkit-scrollbar': {
    height: '6px',
    width: '8px',
    backgroundColor: '#F5F5F5',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '3px',
  },
  '&:not(:hover)::-webkit-scrollbar, &:not(:hover)::-webkit-scrollbar-thumb': {
    display: 'none',
  },
}));

export const Close = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontSize: '18px',
  backgroundColor: '#e33528'
}));


