import About from "./about/About"
import Header from "./header/Header"
import "./Home.css"
import Project from "./project/Project"
import Contact from "./contact/Contact"

export default function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  )
}