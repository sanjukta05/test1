
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import BlogPage from "./pages/BlogPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import PressMediaPage from "./pages/PressMediaPage";
import ContactPage from "./pages/ContactPage";
import LocationsPage from "./pages/LocationsPage";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";

// Paint Product Pages
import MarmolinoPage from "./pages/paints/MarmolinoPage";
import LimewashPage from "./pages/paints/LimewashPage";
import ConcreteTexturePage from "./pages/paints/ConcreteTexturePage";
import PearlFinishPage from "./pages/paints/PearlFinishPage";
import GoldSilverLeafPage from "./pages/paints/GoldSilverLeafPage";
import BrickFinishPage from "./pages/paints/BrickFinishPage";
import StencilPaintingPage from "./pages/paints/StencilPaintingPage";

// Flooring Product Pages
import MicroCementPage from "./pages/flooring/MicroCementPage";
import TerrazzoFlooringPage from "./pages/flooring/TerrazzoFlooringPage";
import ResinBoundSurfacePage from "./pages/flooring/ResinBoundSurfacePage";
import DecorativeEpoxyPage from "./pages/flooring/DecorativeEpoxyPage";
import MetallicEpoxyPage from "./pages/flooring/MetallicEpoxyPage";
import StampedConcretePage from "./pages/flooring/StampedConcretePage";

const App = () => {
  // Create QueryClient inside the component body
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/press-media" element={<PressMediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/product/:type/:id" element={<ProductPage />} />
            
            {/* Paint Product Pages */}
            <Route path="/paints/marmorino" element={<MarmolinoPage />} />
            <Route path="/paints/limewash" element={<LimewashPage />} />
            <Route path="/paints/concrete-texture" element={<ConcreteTexturePage />} />
            <Route path="/paints/pearl-finish" element={<PearlFinishPage />} />
            <Route path="/paints/gold-silver-leaf" element={<GoldSilverLeafPage />} />
            <Route path="/paints/brick-finish" element={<BrickFinishPage />} />
            <Route path="/paints/stencil-painting" element={<StencilPaintingPage />} />
            
            {/* Flooring Product Pages */}
            <Route path="/flooring/micro-cement" element={<MicroCementPage />} />
            <Route path="/flooring/terrazzo-flooring" element={<TerrazzoFlooringPage />} />
            <Route path="/flooring/resin-bound-surface" element={<ResinBoundSurfacePage />} />
            <Route path="/flooring/decorative-epoxy" element={<DecorativeEpoxyPage />} />
            <Route path="/flooring/metallic-epoxy" element={<MetallicEpoxyPage />} />
            <Route path="/flooring/stamped-concrete" element={<StampedConcretePage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
