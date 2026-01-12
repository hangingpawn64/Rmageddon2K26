import { useEffect, useState } from "react";
import "./App.css";

import CrosshairCursor from "./components/Crosshair";
import PageLoader from "./components/PageLoader";
import { PageTransition } from "./components/PageTransition";

import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import Robowar from "./pages/Events/Robowar";
import Accommodation from "./pages/Accommodation/Accommodation";
import ContactUs from "./pages/Contact/ContactUs";

/* ===============================
   LAYOUT (SAFE, NO LOADER)
================================ */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ===============================
   LAYOUT (SAFE, NO LOADER)
================================ */
const Layout = () => {
  const currentOutlet = useOutlet();

  useEffect(() => {
    // Enable manual body styling if needed
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <>
      <CrosshairCursor />
      <PageTransition>
        {currentOutlet}
      </PageTransition>
    </>
  );
};

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
        { path: "/events", element: <Robowar /> },
        { path: "/accommodation", element: <Accommodation /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
