import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-terminate loading screen after 2.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Background Noise Texture */}
      <div className="noise-bg" />

      {/* Main Grid Mesh Background */}
      <BackgroundGrid />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <div key="portfolio-content" className="relative min-h-screen">
            {/* Header / Navbar */}
            <Navbar />

            {/* Main Sections */}
            <main>
              {/* Home / Hero */}
              <Hero />

              {/* Bio / About */}
              <About />

              {/* Featured Projects */}
              <Projects />

              {/* Skill Matrix */}
              <TechStack />

              {/* Career Timeline */}
              <Experience />

              {/* Awards / SIH */}
              <Achievements />

              {/* Academic Papers */}
              <Research />

              {/* Mail Form */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;