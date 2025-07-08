import AutoChangingBackground from '../Components/Autochangingbg'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Innovation from '../Components/Innovation'
import Innovators from '../Components/Inovators'
import Navbar from '../Components/Navbar'
import Properties from '../Components/Properties'
import Purpose from '../Components/Purpose'
import TechStacksScroller from '../Components/ui/Slider'
import Venture from '../Components/Venture'
import Whatwedo from '../Components/Whatwedo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Innovation />
<TechStacksScroller/>
            <AutoChangingBackground/>
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