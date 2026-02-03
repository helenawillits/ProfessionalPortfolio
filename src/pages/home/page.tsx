import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import AIShowcase from './components/AIShowcase';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Impact from './components/Impact';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://static.readdy.ai/image/5b91dc56620e006440478c6bdc15e55f/5ea7ae4ce972f9f2bd06800f312defae" 
              alt="Logo" 
              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
            />
            <span className="text-sm md:text-xl font-bold text-white">
              Helena Willits
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">Projects</a>
            <a href="#experience" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">Experience</a>
            <a href="#resume" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">Resume</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">About</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap">Contact</a>
            <a 
              href="#resume" 
              className="px-4 md:px-6 py-2 md:py-2.5 bg-cyan-500 text-gray-950 text-xs md:text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-all whitespace-nowrap cursor-pointer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <AIShowcase />
      <Projects />
      <Experience />
      {/* <Technologies /> */}
      <Impact />
      <Resume />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}