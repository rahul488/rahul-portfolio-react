import { createContext, useCallback, useMemo } from 'react';
import { useSystemMode } from '../../store';
import { Box, IconButton, ThemeProvider, createTheme } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useScrollToTop } from '../../hooks';

export const ThemeContext = createContext({ mode: 'light' });

const AppThemeProvider = ({ children }) => {
  const { mode, darkMode } = useSystemMode();
  const { isVisible, scrollToTop } = useScrollToTop();
  const { toggleColorMode } = useMemo(
    () => ({
      toggleColorMode: () => {
        darkMode(mode === 'light' ? 'dark' : 'light');
      },
    }),
    [mode, darkMode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          secondary: {
            main: '#E0C2FF',
            contrastText: '#47008F',
          },
          warning: {
            main: '#fc6f03',
          },
          success: {
            main: '#32a852',
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeContext.Provider value={{ mode }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
            transition: '0.5s',
          }}
        >
          <Box className='mode-icon'>
            <IconButton onClick={() => toggleColorMode()}>
              {mode === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
          {isVisible ? (
            <Box className='up-arrow-icon'>
              <IconButton onClick={scrollToTop}>
                <ArrowCircleUpIcon fontSize='large' />
              </IconButton>
            </Box>
          ) : null}
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default AppThemeProvider;
