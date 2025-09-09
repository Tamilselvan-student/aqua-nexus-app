import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ResearcherDashboard from "./pages/ResearcherDashboard";
import FishermanDashboard from "./pages/FishermanDashboard";
import Oceanographic from "./pages/Oceanographic";
import Fisheries from "./pages/Fisheries";
import Biodiversity from "./pages/Biodiversity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/researcher" element={<ResearcherDashboard />} />
          <Route path="/fisherman" element={<FishermanDashboard />} />
          <Route path="/oceanographic" element={<Oceanographic />} />
          <Route path="/fisheries" element={<Fisheries />} />
          <Route path="/biodiversity" element={<Biodiversity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
