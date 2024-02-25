import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'auto',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  // "::before":{
  //   position:'absolute',
  //   content:'""',
  //   left:0,
  //   right:0,
  //   bottom:0,
  //   height:'100%',
  //   backgroundImage:'url("./rahul.jpg")',
  //   opacity:'0.3',
  //   backgroundPosition:'center',
  //   backgroundSize:'cover',
  //   width:'100%'
  // }
}));
export const StyledGridBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
