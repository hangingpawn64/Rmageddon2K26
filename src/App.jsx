import './App.css'
import Footer from './components/Footer'
import CrosshairCursor from "./components/Crosshair";
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Events from './pages/Events';
import Accommodation from './pages/Accommodation';
import ContactUs from './pages/ContactUs';

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
