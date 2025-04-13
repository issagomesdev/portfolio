import { Theme } from '@mui/material/styles';

export const ProjectItem = (theme: Theme) => ({
  width: theme.spacing(120),
  position: 'relative',
  borderRadius: '4px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '40px',
    right: '40px',
    width: '99%',
    height: '95%',
    zIndex: '-9',
    border: '8px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: '4px',
  },
});