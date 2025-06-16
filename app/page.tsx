import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import ProductShowcase from "../components/product-showcase";
import PromotionSection from "../components/promotion-section";
import ServicesSection from "../components/services-section";
import StatsSection from "../components/stats-section";
import TestimonialsSection from "../components/testimonials-section";
import TrainingSection from "../components/training-section";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <PromotionSection />
      <ServicesSection />
      <ProductShowcase />
      <TrainingSection />
      <TestimonialsSection />
      <StatsSection />
      <Footer />
    </div>
  )
}
