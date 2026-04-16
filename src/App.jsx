import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import "taos";

const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: we stop observing once it has animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // We select all elements that should animate on scroll
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen background-image overflow-x-hidden selection:bg-blue-500/30">
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
