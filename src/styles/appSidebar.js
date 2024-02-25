import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledSidebar = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
