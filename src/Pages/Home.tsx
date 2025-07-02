import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Innovation from '../Components/Innovation'
import Innovators from '../Components/Inovators'
import Navbar from '../Components/Navbar'
import PowerPatent from '../Components/PowerPatent'
import Properties from '../Components/Properties'
import Purpose from '../Components/Purpose'
import TechStacksScroller from '../Components/ui/Slider'
import IPScroller from '../Components/ui/Slider'
import Venture from '../Components/Venture'
import Whatwedo from '../Components/Whatwedo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Innovation />

<TechStacksScroller/>
      <Purpose />
      <PowerPatent/>
      <Whatwedo />
      <Properties />
      <Innovators />
      <Venture/>


      <Footer />
    </div>
  )
}

export default Home