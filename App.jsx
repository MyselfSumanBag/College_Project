import { useState } from 'react'
// import HomePage from './Components/HomePage'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Notes from './Components/Notes'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <Notes/>
      <Footer/>
    </>
  )
}

export default App
