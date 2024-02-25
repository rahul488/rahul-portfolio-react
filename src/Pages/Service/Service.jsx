import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { SiWebmoney } from 'react-icons/si';
import { SiAmazonapigateway } from 'react-icons/si';
import { AiFillDatabase } from 'react-icons/ai';
import { FaComputer } from 'react-icons/fa6';

const Services = [
  {
    type: 'UI Developer',
    icon: <SiWebmoney fontSize={40} />,
  },
  {
    type: 'API Creation',
    icon: <SiAmazonapigateway fontSize={40} />,
  },
  {
    type: 'DB Management',
    icon: <AiFillDatabase fontSize={40} />,
  },
  {
    type: 'Coding',
    icon: <FaComputer fontSize={40} />,
  },
];

const Service = () => {
  return (
    <Box id='services'>
      <Typography variant='h3' textAlign={'center'}>
        Services
      </Typography>
      <Paper sx={{ padding: '1rem 1rem' }} elevation={4}>
        <Grid
          container
          justifyContent={'center'}
          columnSpacing={2}
          rowSpacing={2}
        >
          {Services.map((service, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {service.icon}
                  </Box>
                  <Typography textAlign={'center'}>{service.type}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
export default Service;
