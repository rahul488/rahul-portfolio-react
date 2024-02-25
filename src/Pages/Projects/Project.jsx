import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import { RiReactjsLine } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { LuFileJson } from 'react-icons/lu';
import { SiNextdotjs } from 'react-icons/si';
import { SiSpringboot } from 'react-icons/si';
import { BsFiletypeSql } from 'react-icons/bs';
import { SiSpringsecurity } from 'react-icons/si';
import { TfiNewWindow } from 'react-icons/tfi';
import React from 'react';

const projects = [
  {
    name: 'MingleMug',
    desc: 'This website provides you to order a table through online for organise a party or Event',
    technology: [
      <RiReactjsLine fontSize={40} title='React Js' />,
      <FaBootstrap fontSize={40} title='Boot strap' />,
      <LuFileJson fontSize={40} title='Fake Api' />,
    ],
    githubUrl1: 'https://github.com/rahul488/MingleMug',
    githubUrl2: null,
    liveUrl: 'https://stellar-vacherin-4504fc.netlify.app',
  },
  {
    name: 'The Pizza Parlor',
    desc: 'This Website offers you to order your favorite pizza, drinks , desserts and deals easily. It has admin dashboard for doing db operaions like insert, update and delete Orders and products',
    technology: [
      <SiNextdotjs fontSize={40} title='Next Js' />,
      <SiSpringboot fontSize={40} title='Spring boot' />,
      <BsFiletypeSql fontSize={40} title='MySql' />,
      <SiSpringsecurity fontSize={40} title='Spring security' />,
    ],
    githubUrl1: 'https://github.com/rahul488/pizza_parlour_spring_next_mui',
    githubUrl2: 'https://github.com/rahul488/pizza_parlour_spring_next',
  },
];
const Project = () => {
  return (
    <Box id='projects'>
      <Typography textAlign={'center'} variant='h3'>
        Projects
      </Typography>
      <Paper elevation={4} sx={{ padding: '1rem 1rem' }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {projects.map((project, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    textAlign={'center'}
                    textTransform={'capitalize'}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    textTransform={'capitalize'}
                  >
                    {project.desc}.
                  </Typography>
                  <Typography textAlign={'center'} mt={2} variant='subtitle2'>
                    Technology used
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '1rem',
                      marginTop: '1rem',
                      justifyContent: 'center',
                    }}
                  >
                    {project.technology.map((tech, i) => (
                      <React.Fragment key={i + 99}>{tech}</React.Fragment>
                    ))}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography textAlign={'center'} variant='subtitle2'>
                    Github Links
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1rem',
                      alignItems: 'center',
                    }}
                  >
                    {project.githubUrl1 ? (
                      <IconButton
                        onClick={() => window.open(project.githubUrl1)}
                        title={project.githubUrl1}
                      >
                        <TfiNewWindow />
                      </IconButton>
                    ) : null}
                    {project.githubUrl2 ? (
                      <IconButton
                        onClick={() => window.open(project.githubUrl2)}
                        title={project.githubUrl2}
                      >
                        <TfiNewWindow />
                      </IconButton>
                    ) : null}
                  </Box>
                </CardActions>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography textAlign={'center'} variant='subtitle2'>
                    Live URL
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1rem',
                      alignItems: 'center',
                    }}
                  >
                    {project.liveUrl ? (
                      <IconButton
                        onClick={() => window.open(project.liveUrl)}
                        title={project.liveUrl}
                      >
                        <TfiNewWindow />
                      </IconButton>
                    ) : (
                      <Typography textAlign={'center'}>N/A</Typography>
                    )}
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
export default Project;
