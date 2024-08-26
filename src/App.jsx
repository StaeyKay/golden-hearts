import { Element } from 'react-scroll'
import Navbar from './components/navbar'
import Hero from './components/hero'
import './App.css'
import Services from './components/services'
import Choose from './components/choose'
import About from './components/about'
import Contact from './components/contact'

function App() {
  return (
    <>
      <Navbar/>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="why-choose-us">
        <Choose />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="join-us">
        <Contact />
      </Element>
    </>
  )
}

export default App
