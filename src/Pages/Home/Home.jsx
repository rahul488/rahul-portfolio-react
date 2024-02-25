import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { StyledBox, StyledGridBox } from '../../styles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Home() {
  return (
    <Box id='home'>
      <Paper>
        <StyledGridBox>
          <Grid container>
            <Grid item sm={7} lg={7}>
              <Box marginLeft={'1rem'}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h4' textTransform='uppercase'>
                    Hi I am
                  </Typography>
                  <Typography
                    variant='h2'
                    ml={2}
                    color='orange'
                    className='name-typewriter'
                  >
                    RAHUL DAS
                  </Typography>
                </Box>
                <Typography
                  textTransform={'uppercase'}
                  variant='h4'
                  className='designation-typewriter'
                  color='green'
                >
                  full stack developer
                </Typography>
                <Typography
                  textTransform={'uppercase'}
                  variant='h4'
                  mt={2}
                  color='red'
                  className='designation-typewriter'
                >
                  (React+Java)
                </Typography>
                <Typography mt={2} sx={{ opacity: '0.6' }} pr={2} width='80%'>
                  Experienced software engineer with a strong background in Java
                  and React, adept at developing full-stack applications for
                  diverse industries. With 3 years of hands-on experience, I've
                  honed my skills in building scalable backend systems using
                  Java frameworks such as Spring and Hibernate, while also
                  excelling in frontend development with React, crafting
                  intuitive user interfaces and ensuring seamless user
                  experiences. Proficient in software design principles,
                  debugging, and testing methodologies, I bring a track record
                  of delivering high-quality, maintainable code that meets
                  project objectives. Collaborative and adaptable, I thrive in
                  dynamic environments and am passionate about leveraging
                  technology to solve complex problems.
                </Typography>

                <Button
                  variant='outlined'
                  href='./rahul-resume.pdf'
                  download={true}
                  color='warning'
                  sx={{ marginTop: '10px' }}
                  startIcon={<FileDownloadIcon />}
                >
                  Download Resume
                </Button>
              </Box>
            </Grid>
            <Grid item sm={5} lg={5}>
              <Box className='imageBox'></Box>
            </Grid>
          </Grid>
        </StyledGridBox>
        <StyledBox>
          <Box p={2} position={'relative'}>
            <Typography variant='h5' textTransform={'uppercase'}>
              Hi I am{' '}
            </Typography>
            <Typography
              textTransform={'uppercase'}
              variant='h3'
              className='designation-typewriter'
            >
              rahul das
            </Typography>
            <Typography
              textTransform={'uppercase'}
              variant='h5'
              className='designation-typewriter'
              color='green'
            >
              full stack developer
            </Typography>
            <Typography mt={2} sx={{ opacity: '0.9' }}>
              Experienced software engineer with a strong background in Java and
              React, adept at developing full-stack applications for diverse
              industries. With 3 years of hands-on experience, I've honed my
              skills in building scalable backend systems using Java frameworks
              such as Spring and Hibernate, while also excelling in frontend
              development with React, crafting intuitive user interfaces and
              ensuring seamless user experiences. Proficient in software design
              principles, debugging, and testing methodologies, I bring a track
              record of delivering high-quality, maintainable code that meets
              project objectives. Collaborative and adaptable, I thrive in
              dynamic environments and am passionate about leveraging technology
              to solve complex problems.
            </Typography>

            <Button
              variant='outlined'
              color='warning'
              href='./rahul-resume.pdf'
              download={true}
              sx={{
                marginTop: '10px',
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
              }}
              startIcon={<FileDownloadIcon />}
            >
              Download Resume
            </Button>
          </Box>
        </StyledBox>
      </Paper>
    </Box>
  );
}

export default Home;
