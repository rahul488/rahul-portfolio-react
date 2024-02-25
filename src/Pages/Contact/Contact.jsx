import { Box, IconButton, Paper, Typography } from '@mui/material';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  function copyPhoneNumber(number) {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        toast.success('Phone number copied to clipboard', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,

          theme: 'dark',
        });
      })
      .catch((err) => {
        toast.error('Unable to copied to phone nubmer', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,

          theme: 'dark',
          transition: Bounce,
        });
      });
  }

  return (
    <Box id='contact'>
      <Typography textAlign={'center'} variant='h3'>
        Contact Me
      </Typography>
      <Paper elevation={4} sx={{ padding: '1rem 1rem' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <IconButton href='mailto:myself.rahul78@gmail.com'>
            <MdOutlineEmail />
          </IconButton>
          <IconButton
            title='+91 7894787693'
            onClick={() => copyPhoneNumber('7894787693')}
          >
            <FaPhoneAlt />
          </IconButton>
          <IconButton
            onClick={() => window.open('https://github.com/rahul488')}
            title='Github'
          >
            <FaGithub />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open('https://linkedin.com/in/rahul-das-3775701b1')
            }
            title='LinkedIn'
          >
            <FaLinkedin />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};
export default Contact;
