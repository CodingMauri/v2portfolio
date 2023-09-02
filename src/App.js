
import './App.css';
import Hero from "./Components/Hero"
import About from './Components/About';
import Projects from './Components/Projects';
function App() {
  return (
    <div className="w-full h-full m-0 p-0 bg-[#141414] overflow-hidden">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
