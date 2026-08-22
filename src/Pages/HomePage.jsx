import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import Offers from '../components/Offers/Offers'
import AboutSection from '../components/About/AboutSection'
import Reviews from '../components/Reviews/Reviews'
export default function HomePage() {
  return (
    <>
      <Navbar/>    
    <main>
      <HeroSection/>
      <Offers/>
      <AboutSection/>
      <Reviews/>
    </main>
      
    </>
  )
}
