import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Exhibition from "./pages/Exhibition";
import HomePage from "./pages/HomePage";
import ArtistTeam from "./pages/ArtistTeam";
import Projects202526 from "./pages/Projects202526";
import Projects2025 from "./pages/Projects2025";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Exhibition />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/artists" element={<ArtistTeam />} />
          <Route path="/projects-2025-26" element={<Projects202526 />} />
          <Route path="/projects-2025" element={<Projects2025 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
