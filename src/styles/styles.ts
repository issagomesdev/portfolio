import { styled } from '@mui/system';
import { Theme } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const profilePhoto = (theme: Theme) => ({
  width: theme.spacing(55),
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

export const projectItem = (theme: Theme) => ({
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

export const CustomTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%', 
  color: 'white', 
  background: 'transparent', 
  border: 'none', 
  outline: 'none', 
  textAlign: 'start', 
  resize: 'vertical',
  fontFamily: "'Secular One', sans-serif",
  fontSize: theme.spacing(2),
  '&::placeholder': {
    color: 'white', 
    opacity: .4, 
  },
}));