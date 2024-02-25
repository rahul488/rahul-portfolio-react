import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { menus } from '../../constant';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';
import { StyledSidebar } from '../../styles/appSidebar';
import { useClickOutSide } from '../../hooks';
import { Link } from 'react-scroll';

const AppSidebar = ({ open, close, onOpen, onClose }) => {
  const swipeableRef = React.useRef(null);

  useClickOutSide(swipeableRef, close);
  return (
    <StyledSidebar>
      <SwipeableDrawer
        anchor='right'
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        variant='persistent'
        ref={swipeableRef}
      >
        <Box sx={{ width: 250 }} role='presentation'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem 0',
            }}
          >
            <img
              src='./rahul.jpg'
              height={'100px'}
              width={'100px'}
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Divider />
          <List sx={{ cursor: 'pointer', padding: '0.5rem 0.5rem' }}>
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
                <ListItem
                  onClick={close}
                  sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}
                >
                  <ListItemText>{menu.name}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </StyledSidebar>
  );
};
export default AppSidebar;
