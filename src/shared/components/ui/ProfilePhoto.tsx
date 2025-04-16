import { Theme } from '@mui/material/styles';

export const ProfilePhoto = (theme: Theme) => ({
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '40px',
      left: '40px',
      width: '100%',
      height: '97%',
      zIndex: '-9',
      border: '8px solid',
      borderColor: theme.palette.secondary.main,
      borderRadius: '4px',
    },
  });