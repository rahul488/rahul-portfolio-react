import { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import AppSidebar from '../appSidebar/AppSidebar';

const AppDrawer = () => {
  const [openMobileView, setMobileView] = useState(false);

  return (
    <>
      <AppHeader open={openMobileView} setMobileMenu={setMobileView} />
      <AppSidebar
        open={openMobileView}
        close={() => setMobileView(false)}
        onOpen={() => setMobileView(true)}
        onClose={() => setMobileView(false)}
      />
    </>
  );
};

export default AppDrawer;
