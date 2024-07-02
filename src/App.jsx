import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home';
import Diseases from './Pages/Diseases/Diseases';
import Treatment from './Pages/Treatment/Treatment';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/diseases'element={<Diseases/>}/>
      <Route path='/treatment'element={<Treatment/>}/>
      <Route path='/services'element={<Services/>}/>
      <Route path='/contact'element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
