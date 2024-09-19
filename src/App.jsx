import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav';
import Map from './pages/Map';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NotFound';

import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Map />}/>
          <Route path='About' element={<About />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
