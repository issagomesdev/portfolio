import { Theme } from '@mui/material/styles';

export const ProjectItem = (theme: Theme, right: string) => ({
  position: 'relative',
  borderRadius: '4px',
  height: 'fit-content',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '30px',
    right: right,
    width: '99%',
    height: '95%',
    zIndex: '-9',
    border: '8px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '4px',
  },
});