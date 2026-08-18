import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import Offers from '../components/Offers/Offers'

export default function HomePage() {
  return (
    <>
    <header>
      <Navbar/>    
    </header>
    <main>
      <HeroSection/>
      <Offers/>
    </main>
      
    </>
  )
}
