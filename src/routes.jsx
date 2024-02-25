import { createBrowserRouter } from 'react-router-dom';
import { Home, Layout } from './Pages';
import NotFound from './404';
import { AppDrawer } from './Components';

const routes = [
  {
    index: true,
    element: <Layout />,
  },
  // {
  //   path: "menu",
  //   element: <MenuLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Menu />,
  //     },
  //     {
  //       path: ":type",
  //       element: <Product />,
  //     },
  //   ],
  // },
  // {
  //   path: "events",
  //   element: <Events />,
  // },
  // {
  //   path: "book-table",
  //   element: <Reservation />,
  // },
  // {
  //   path: "cart",
  //   element: <Cart />,
  // },
  // {
  //   path: "about",
  //   element: <About />,
  // },
];
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
    errorElement: <NotFound />,
  },
]);
