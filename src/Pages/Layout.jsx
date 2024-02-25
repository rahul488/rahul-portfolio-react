import { Box } from '@mui/material';
import { AppDrawer, AppFooter } from '../Components';
import { Outlet } from 'react-router';
import {
  Skills,
  Home,
  About,
  Service,
  Profile,
  Project,
  Contact,
} from './index';

const Layout = () => {
  return (
    <Box>
      <AppDrawer />
      <Box className='content'>
        <Home />
        <Profile />
        <About />
        <Skills />
        <Service />
        <Project />
        <Contact />
      </Box>
      <AppFooter />
    </Box>
  );
};
export default Layout;
