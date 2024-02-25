import { Box, Typography } from '@mui/material';

const AppFooter = () => {
  return (
    <Box className='footer'>
      <Typography variant='h6' textAlign={'center'}>
        {new Date().getFullYear()} - Created And Designed By Rahul
      </Typography>
    </Box>
  );
};
export default AppFooter;
