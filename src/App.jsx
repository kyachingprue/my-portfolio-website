import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App() {

  return (
    <>
      <div className="bg-[#171d32] h-full w-full">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
