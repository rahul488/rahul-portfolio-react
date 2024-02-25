import { Box } from '@mui/material';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AppDrawer } from './Components';
import { AppThemeProvider } from './Context';

function App() {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
