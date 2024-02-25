import { Box, Paper, Typography } from '@mui/material';

const profileDetails = [
  {
    title: 'Name',
    desc: 'Rahul Das',
  },
  {
    title: 'DOB',
    desc: '30/03/1999',
  },
  {
    title: 'Nationality',
    desc: 'Indian',
  },
  {
    title: 'Residental Address',
    desc: 'Chhandasahi,Ambiligaon,Bhadrak',
  },
  {
    title: 'State',
    desc: 'Odisha',
  },
  {
    title: 'District',
    desc: 'Bhadrak',
  },

  {
    title: 'PinCode',
    desc: '756118',
  },
  {
    title: 'Phone Number',
    desc: '+91 7894787693',
  },
  {
    title: 'Email',
    desc: 'myself.rahul78@gmail.com',
  },
];

const Profile = () => {
  return (
    <Box id='profile'>
      <Typography variant='h3' textAlign={'center'}>
        Profile
      </Typography>
      <Paper elevation={4}>
        {profileDetails.map((profile, i) => (
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
            p={2}
            key={i}
          >
            <Typography variant='h6'>{profile.title} :</Typography>
            <Typography variant='h6'>{profile.desc}</Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
export default Profile;
