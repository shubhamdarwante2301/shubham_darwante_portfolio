import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/uiComponents/ScrollToTop";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
