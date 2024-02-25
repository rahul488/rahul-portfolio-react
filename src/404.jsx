import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
      }}
    >
      <Typography variant='h3' textTransform={'capitalize'}>
        Page not found
      </Typography>
      <Button
        variant='contained'
        size='large'
        color='success'
        onClick={() => navigate('/')}
      >
        Back
      </Button>
    </Box>
  );
};
export default NotFound;
