/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIThinking from './components/AIThinking';
import Metrics from './components/Metrics';
import StrengthsWeaknesses from './components/StrengthsWeaknesses';
import Contact from './components/Contact';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Metrics />
          <Skills />
          <Experience />
          <Projects />
          <AIThinking />
          <StrengthsWeaknesses />
          <Contact />
        </main>
        <footer className="py-8 text-center text-secondary text-sm border-t border-border">
          <p>© {new Date().getFullYear()} Raj Pandya. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
