import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import "taos";

const App = () => {
  return (
    <div className="bg-neutral-950 text-blue-100 min-h-screen background-image">
      <Navbar/>
      <Introduction/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
