import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail';
import './server'


function Header() {
  return (
    <>
      <BrowserRouter>
       

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetail />}/>
        </Routes> 
      </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(

  <Header />

)
