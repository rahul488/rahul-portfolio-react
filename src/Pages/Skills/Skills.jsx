import {
  Box,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiSpringboot } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { DiJqueryUiLogo } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { FaMicrochip } from 'react-icons/fa6';
import { StyledTableContainer } from '../../styles';

const skills = [
  {
    name: 'Java',
    icon: <FaJava fontSize='30' />,
    rating: 4.5,
  },
  {
    name: 'Spring-Boot',
    icon: <SiSpringboot fontSize='30' />,
    rating: 4,
  },
  {
    name: 'MySql',
    icon: <SiMysql fontSize='30' />,
    rating: 4,
  },
  {
    name: 'Java - MicroServices',
    icon: <FaMicrochip fontSize='30' />,
    rating: 3,
    desc: 'Learning',
  },
  {
    name: 'React Js',
    icon: <RiReactjsLine fontSize='30' />,
    rating: 4.5,
  },
  {
    name: 'Next Js',
    icon: <SiNextdotjs fontSize='30' />,
    rating: 3,
  },
  {
    name: 'Vue Js',
    icon: <FaVuejs fontSize='30' />,
    rating: 3,
  },
  {
    name: 'Html5',
    icon: <FaHtml5 fontSize='30' />,
    rating: 4.5,
  },
  {
    name: 'Css3',
    icon: <FaCss3 fontSize='30' />,
    rating: 4,
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript fontSize='30' />,
    rating: 4.5,
  },
  {
    name: 'JQuery',
    icon: <DiJqueryUiLogo fontSize='30' />,
    rating: 4.5,
  },
];

const Skills = () => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "0.5rem",
    //     padding: "1rem 3rem",
    //   }}
    //   id="skills"
    // >
    //   <Typography variant="h3" textAlign="center">
    //     Skills
    //   </Typography>
    //   {skills.map((skill, i) => (
    //     <Box
    //       key={i}
    //       sx={{
    //         display: "flex",
    //         gap: "1.5rem",
    //         flexWrap: "wrap",
    //         alignItems: "center",
    //       }}
    //     >
    //      <Box display="flex" gap="0.5rem" alignItems={"center"}>
    //      <Box className="box-icon">
    //       {skill.icon}

    //         </Box>
    //         <Typography variant="h6" >{skill.name}</Typography>
    //       </Box>

    //       <Rating name="half-rating" defaultValue={skill.rating} precision={0.5} readOnly />
    //       {skill.desc ? `(${skill.desc})` : null}
    //     </Box>
    //   ))}
    // </Box>
    <Box id='skills'>
      <Typography variant='h3' textAlign='center'>
        Skills
      </Typography>
      <StyledTableContainer component={Paper} elevation={4}>
        <Table className='table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Logo</TableCell>
              <TableCell align='left'>Technology&nbsp;</TableCell>
              <TableCell align='center'>Rating&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map((skill, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Box className='box-icon'>{skill.icon}</Box>
                </TableCell>
                <TableCell align='left'>
                  <Typography variant='h6'>{skill.name}</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Rating
                    name='half-rating'
                    defaultValue={skill.rating}
                    precision={0.5}
                    readOnly
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Box>
  );
};
export default Skills;
