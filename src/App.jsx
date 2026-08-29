import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import FloatingIcons from "./components/FloatingIcons";

function App() {
  return (
    <div className="app">
      <FloatingIcons />
      <Header />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />

      <SpeedInsights />
    </div>
  );
}

export default App;