import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import EducationSkills from "./components/EducationSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";

function App() {
  return (
    <>
      <main className="h-dvh overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <LandingSection />
        <AboutMe />
        <Experience />
        <EducationSkills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
