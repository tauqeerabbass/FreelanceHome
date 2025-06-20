import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PromotionSection from "./components/PromotionSection";
import ServicesSection from "./components/ServicesSection";
import ProductShowcase from "./components/ProductShowcase";
import TrainingSection from "./components/TrainingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection";
import ShopPage from "./components/ShopPage";
import Footer from "./components/Footer";
import ProductDescription from "./components/ProductDescription";
import Cart from "./components/Cart";
import Invoice from "./components/Invoice";
import DetailsPage from "./components/DetailsPage";
import ComputerRentalPage from "./components/ComputerRentalPage";
import TrainingPage from "./components/TrainingPage";

function HomePage() {
  return (
    <>
      <HeroSection />
      <PromotionSection />
      <ServicesSection />
      <ProductShowcase />
      <TrainingSection />
      <TestimonialsSection />
      <StatsSection />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/product-description" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/computer-rental" element={<ComputerRentalPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
