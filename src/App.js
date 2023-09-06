
import './App.css';
import {useState,useEffect} from "react"
import Hero from "./Components/Hero"
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
function App() { 
  const scrollToSection = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({behavior:'smooth'});
  }

  const [mobileView, setMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateMobile = () => {
      setMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateMobile);

    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <div className="w-full h-full m-0 p-0 bg-[#141414] overflow-hidden">
      <Navbar mobileView = {mobileView} scrollToSection = {scrollToSection} />
      <Hero />
      <About />
      <Projects mobileView={mobileView}/>
      <Contact />
    </div>
  );
}

export default App;
