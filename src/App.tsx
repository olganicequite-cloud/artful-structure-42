import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Exhibition from "./pages/Exhibition";
import HomePage from "./pages/HomePage";
import ArtistTeam from "./pages/ArtistTeam";
import ArtistDetail from "./pages/ArtistDetail";
import Projects202526 from "./pages/Projects202526";
import ProjectDetail from "./pages/ProjectDetail";
import Projects2025 from "./pages/Projects2025";
import Contact from "./pages/Contact";
import ArtworkDetail from "./pages/ArtworkDetail";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exhibition" element={<Exhibition />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
