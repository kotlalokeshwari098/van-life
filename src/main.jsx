import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import Vans from '../src/pages/Vans'


function Header() {
  return (
    <>
      <BrowserRouter>
        <header>
            <Link className='site-logo' to='/'>#VANLIFE</Link>
          <nav>
            <Link to='/vans'>Vans</Link>

          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/vans' element={<Vans />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
createRoot(document.getElementById('root')).render(

  <Header />

)
