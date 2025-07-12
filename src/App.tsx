
import './App.css'
import Home from './Pages/Home.tsx'
import ScrollToTop from './Utils/ScrollToTop.ts'
import { Routes,Route } from 'react-router-dom'
import { IPStrategyProcess } from './Pages/Service.tsx'
import { Service1 } from './Pages/Service1.tsx'
import { Service2 } from './Pages/Service2.tsx'
import { Service3 } from './Pages/Service3.tsx'
import { Service4 } from './Pages/Service4.tsx'

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
      <Route path='/Itservices' element={<Service4/>} />
    </Routes>

    </>
  )
  
}

export default App
