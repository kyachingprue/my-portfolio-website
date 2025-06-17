import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <div className="bg-[#171d32] h-full w-full">
        <Navbar />
        <Home />
        <About />
        <Experience />
      </div>
    </>
  )
}

export default App
