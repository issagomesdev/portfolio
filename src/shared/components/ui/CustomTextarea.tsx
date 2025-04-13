import { styled } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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