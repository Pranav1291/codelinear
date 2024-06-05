import React from 'react'
import Navbar from '../src/components/Navbar.jsx';
import Hero2 from './components/Hero2.jsx'
import './index.css'
import Services from'../src/components/Service.jsx'
import Letstalk from '../src/components/LetsTalk.jsx'
import Footer from '../src/components/Footer.jsx';

const App = () => {
  
  return (
    <div>
      <Navbar />
      {/* <Hero1 /> */}
      <Hero2 />
      <Services />
      <Letstalk />
      <Footer />
      
    </div>
  )
}

export default App
