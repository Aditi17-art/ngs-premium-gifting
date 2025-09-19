import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PreBooking from "./pages/PreBooking";
import CorporateOrders from "./pages/CorporateOrders";
import Contact from "./pages/Contact";
import DryFruits from "./pages/products/DryFruits";
import RealJuices from "./pages/products/RealJuices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pre-booking" element={<PreBooking />} />
            <Route path="corporate-orders" element={<CorporateOrders />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products/dry-fruits" element={<DryFruits />} />
            <Route path="products/real-juices" element={<RealJuices />} />
            <Route path="products/snack-packs" element={<DryFruits />} />
            <Route path="products/cremica" element={<DryFruits />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
