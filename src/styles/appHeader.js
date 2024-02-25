import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledMenus = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  margin: 'auto',
}));
export const MobileMenu = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'inline-block',
  },
  marginLeft: 'auto',
}));
