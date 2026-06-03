import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  // Disable browser's automatic scroll restoration on load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Auto-terminate loading screen after 2.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Sync hash path
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle scroll on load / refresh / path change once content is ready
  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) {
        try {
          const element = document.querySelector(hash);
          if (element) {
            // Slight delay to allow DOM render & animations to start
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            return;
          }
        } catch (e) {
          // ignore invalid query selector errors
        }
      }
      window.scrollTo(0, 0);
    }
  }, [isLoading, currentPath]);

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
              {(() => {
                switch (currentPath) {
                  case '#/all-projects':
                    return <Projects isFeaturedPreview={false} />;
                  // To add more standalone pages in the future, just add cases here:
                  // case '#/services':
                  //   return <ServicesStandalone />;
                  default:
                    return (
                      <>
                        {/* Home / Hero */}
                        <Hero />

                        {/* Bio / About */}
                        <About />

                        {/* Freelance Services */}
                        <Services />

                        {/* Featured Projects / Case Studies preview */}
                        <Projects isFeaturedPreview={true} />

                        {/* Skill Matrix */}
                        <TechStack />

                        {/* Client Project Process */}
                        <Process />

                        {/* Career Timeline */}
                        <Experience />

                        {/* Client Testimonials */}
                        <Testimonials />

                        {/* Mail Form */}
                        <Contact />
                      </>
                    );
                }
              })()}
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