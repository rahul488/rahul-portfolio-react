import { useEffect } from 'react';
import './App.css';
import { RouterProvider, useLocation } from 'react-router-dom';
import { router } from './routes';
import { AppThemeProvider } from './Context';


function App() {
  useEffect(() => {
    document.title = `Rahul | Portfolio`;
  }, []);
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
}

export default App;
