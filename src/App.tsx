import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded routes
const Exhibition = lazy(() => import("./pages/Exhibition"));
const ArtistTeam = lazy(() => import("./pages/ArtistTeam"));
const ArtistDetail = lazy(() => import("./pages/ArtistDetail"));
const Projects202526 = lazy(() => import("./pages/Projects202526"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Projects2025 = lazy(() => import("./pages/Projects2025"));
const Contact = lazy(() => import("./pages/Contact"));
const ArtworkDetail = lazy(() => import("./pages/ArtworkDetail"));
const CityProjectDetail = lazy(() => import("./pages/CityProjectDetail"));
const Imprint = lazy(() => import("./pages/Imprint"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/exhibition/city/:slug" element={<CityProjectDetail />} />
          <Route path="/exhibition/:slug" element={<ArtworkDetail />} />
          <Route path="/artists" element={<ArtistTeam />} />
          <Route path="/artists/:slug" element={<ArtistDetail />} />
          <Route path="/projects" element={<Projects202526 />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/projects-2025-26" element={<Navigate to="/projects" replace />} />
          <Route path="/projects-2025" element={<Projects2025 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
