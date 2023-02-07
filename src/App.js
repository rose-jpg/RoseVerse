import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Explore from "./components/Explore"

import GetStarted from "./components/GetStarted"
import WNew from "./components/WNew"

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero/>
      <About/>
      <Explore/>
      <GetStarted/>
      <WNew/>
 
    
    </div>
  )
}

export default App
