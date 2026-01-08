import { useEffect, useState } from "react";
import "./App.css";

import CrosshairCursor from "./components/Crosshair";
import PageLoader from "./components/PageLoader";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import Events from "./pages/Events/Events";
import Accommodation from "./pages/Accommodation/Accommodation";
import ContactUs from "./pages/Contact/ContactUs";

/* ===============================
   LAYOUT (SAFE, NO LOADER)
================================ */
const Layout = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";

    // document
    //   .querySelectorAll(
    //     ".overlay, .loader-root, .loader-overlay, .counter"
    //   )
    //   .forEach((el) => el.remove());
  });

  return (
    <>
      <CrosshairCursor />
      <Outlet />
    </>
  );
};

/* ===============================
   HOME WRAPPER (LOADER ONLY HERE)
================================ */
// Track if loader has run this session (resets on refresh)
let hasAppLoaded = false;

const HomeWithLoader = () => {
  const [loading, setLoading] = useState(!hasAppLoaded);

  const handleLoaderComplete = () => {
    setLoading(false);
    hasAppLoaded = true;
  };

  return (
    <>
      {loading && <PageLoader onComplete={handleLoaderComplete} />}
      {!loading && <HomePage />}
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomeWithLoader /> },
        { path: "/events", element: <Events /> },
        { path: "/accommodation", element: <Accommodation /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
