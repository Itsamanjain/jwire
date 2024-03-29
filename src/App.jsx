import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Goal from './components/Goal'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Navbar/>
    <Home/>
    <Goal/>
    <Project/>
    <About/>
    <Contact/>
    
    </>
  )
}

export default App
