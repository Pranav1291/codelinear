import React from 'react'
import Navbar from '../src/components/Navbar.jsx';
import Hero2 from './components/Hero2.jsx'
import './index.css'
import Services from'../src/components/Service.jsx'
import Letstalk from '../src/components/LetsTalk.jsx'
import Footer from '../src/components/Footer.jsx';
import '../src/components/Service.css';



const App = () => {
  
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      
      <Hero2 />
      <Services />
      <Letstalk />
      <Footer />
      
      
    </div>
  )
}

export default App
