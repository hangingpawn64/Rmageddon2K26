import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Loader from "./components/PageLoader";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Hero/>
    {/* <Loader/> */}
    
   
      
    </>
  )
}

export default App
