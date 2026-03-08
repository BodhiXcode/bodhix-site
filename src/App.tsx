import NavBar from "./components/nav-bar";
import MainPage from "./pages/main-page/main-page";
import OverviewSection from "./pages/overview-section/overview-section";
import ProductsSection from "./pages/products-section/products-section";
import VisionSection from "./pages/vision-section/vision-section";
import PeopleSection from "./pages/people-section/people-section";
import WaitlistSection from "./pages/waitlist-section/waitlist-section";
import Footer from "./components/footer";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BodhiLeafPage from "./pages/bodhi-leaf/bodhi-leaf-page";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function HomeLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <MainPage />
        <OverviewSection />
        <ProductsSection />
        <VisionSection />
        <PeopleSection />
        <WaitlistSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default function App() {
  useEffect(() => {
    document.body.style.setProperty('--mouse-x', `${window.innerWidth / 2}px`);
    document.body.style.setProperty('--mouse-y', `${window.innerHeight / 2}px`);

    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/bodhi-leaf" element={<BodhiLeafPage />} />
      </Routes>
    </>
  );
}
