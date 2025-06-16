import Footer from "../components/footer"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
import ProductShowcase from "../components/product-showcase"
import StatsSection from "../components/stats-section"
import PromotionSection from "./Components/PromotionSection"
import ServicesSection from "./Components/ServicesSection"
import TestimonialsSection from "./Components/TestimonialsSection"
import TrainingSection from "./Components/TrainingSection"


function App() {
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

export default App
