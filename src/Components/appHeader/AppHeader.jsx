import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenu, StyledMenus } from '../../styles/appHeader';
import { Link } from 'react-scroll';
import { menus } from '../../constant';

const AppHeader = ({ setMobileMenu, open }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' elevation={4} color='transparent'>
        <Toolbar>
          <Typography
            variant='h6'
            fontWeight={'400'}
            component='div'
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            Rahul
          </Typography>
          <StyledMenus>
            {menus.map((menu, i) => (
              <Link
                style={{ padding: ' 1rem 1rem', fontWeight: 'bold' }}
                to={menu.link}
                key={i}
                smooth={true}
                activeClass='active'
                spy
                duration={500}
              >
                {menu.name}
              </Link>
            ))}
          </StyledMenus>
          <MobileMenu>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={() => setMobileMenu(!open)}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppHeader;
