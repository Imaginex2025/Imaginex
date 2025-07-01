
import './App.css'
import Home from './Pages/Home'
import ScrollToTop from './Utils/ScrollToTop'
import { Routes,Route } from 'react-router-dom'
import { IPStrategyProcess } from './Pages/Service'
import { Service1 } from './Pages/Service1'
import { Service2 } from './Pages/Service2'
import { Service3 } from './Pages/Service3'

function App() {


  return (
<>
<ScrollToTop/>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path='/Ip' element={<IPStrategyProcess/>} />
      <Route path='/infringement' element={<Service1/>} />
      <Route path='/insights' element={<Service2/>} />
      <Route path='/monitization' element={<Service3/>} />
    </Routes>

    </>
  )
  
}

export default App
