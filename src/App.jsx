import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  )
}
