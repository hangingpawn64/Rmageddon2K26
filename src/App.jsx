import './App.css'
import Footer from './components/Footer'
import CrosshairCursor from "./components/Crosshair";
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import Events from './components/Events';
import Accommodation from './components/Accommodation';
import ContactUs from './components/ContactUs';

const Layout = () => {
  return (
    <>
      <CrosshairCursor />
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/accommodation",
          element: <Accommodation />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
