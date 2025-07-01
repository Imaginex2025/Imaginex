import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Innovation from '../Components/Innovation'
import Innovators from '../Components/Inovators'
import Navbar from '../Components/Navbar'
import Properties from '../Components/Properties'
import Purpose from '../Components/Purpose'
import { TextRevealCardPreview } from '../Components/TextReveal'
import Venture from '../Components/Venture'
import Whatwedo from '../Components/Whatwedo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Innovation />
      <TextRevealCardPreview />
      <Purpose />
      <Whatwedo />
      <Properties />
      <Innovators />
      <Venture/>


      <Footer />
    </div>
  )
}

export default Home