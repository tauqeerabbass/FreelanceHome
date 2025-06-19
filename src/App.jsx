import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PromotionSection from "./components/PromotionSection"
import ServicesSection from "./components/ServicesSection"
import ProductShowcase from "./components/ProductShowcase"
import TrainingSection from "./components/TrainingSection"
import TestimonialsSection from "./components/TestimonialsSection"
import StatsSection from "./components/StatsSection"
import ShopPage from "./components/ShopPage"
import Footer from "./components/Footer"
import ProductDescription from "./components/ProductDescription"
import Cart from "./components/Cart"
import Invoice from "./components/Invoice"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Invoice />
      {/* <HeroSection />
      <PromotionSection />
      <ServicesSection />
      <ProductShowcase />
      <TrainingSection />
      <TestimonialsSection />
      <StatsSection /> */}
      <Footer />
    </div>
  )
}

export default App
