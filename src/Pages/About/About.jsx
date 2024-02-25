import * as React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Paper, Tooltip, Typography, useTheme } from '@mui/material';
export const timelines = [
  {
    icon: (
      <Tooltip title='Work Experience'>
        <WorkHistoryIcon />
      </Tooltip>
    ),
    date: '2024-Present',
    title: 'Software Developer',
    location: 'Remote,Programmers.io',
    iconTitle: 'Work Experience',
    desc: 'Working as a full stack developer in Java and react.',
  },
  {
    icon: (
      <Tooltip title='Education'>
        <SchoolIcon />
      </Tooltip>
    ),
    date: '2017-2021',
    iconTitle: 'Education',
    title: 'B-Tech (Computer science engineering)',
    location: 'Nalanda institute of technolgy, bbsr',
    desc: '7.9 CGPA',
  },

  {
    icon: (
      <Tooltip title='Education'>
        <SchoolIcon />
      </Tooltip>
    ),
    date: '2015-2017',
    iconTitle: 'Education',
    title: 'Higher Secondary Certificate (Science)',
    location: 'dhamanagar govt college, dhamnagar',
    desc: '63.83%',
  },

  {
    icon: (
      <Tooltip title='Education'>
        <SchoolIcon />
      </Tooltip>
    ),
    date: '2015',
    iconTitle: 'Education',
    title: 'Secondary School Leaving Certificate (10th)',
    location: 'dhamanagar govt college, dhamnagar',
    desc: '79.16%',
  },
];

const About = () => {
  const theme = useTheme();
  const textColor =
    theme.palette.mode === 'light'
      ? theme.palette.common.black
      : theme.palette.common.white;
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.common.light
      : theme.palette.common.black;
  return (
    <Box id='about'>
      <Typography variant='h3' textAlign='center'>
        About
      </Typography>
      <Paper elevation={4}>
        <VerticalTimeline lineColor={textColor} id='about'>
          {timelines.map((timeline, i) => (
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: backgroundColor, color: textColor }}
              date={timeline.date}
              key={i}
              iconStyle={{ background: backgroundColor, color: textColor }}
              icon={timeline.icon}
            >
              <Typography
                variant='h6'
                className='vertical-timeline-element-title'
              >
                {timeline.title}
              </Typography>
              <Typography
                variant='h6'
                className='vertical-timeline-element-subtitle'
                textTransform={'capitalize'}
              >
                {timeline.location}
              </Typography>
              <Typography variant='body1' textTransform='capitalize'>
                {timeline.desc}
              </Typography>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Paper>
    </Box>
  );
};
export default About;
