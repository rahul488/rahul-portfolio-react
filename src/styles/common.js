import styled from '@emotion/styled';
import { Box, TableContainer } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '.table': {
      width: '600px !important',
    },
  },
}));
