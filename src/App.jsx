// =========================================
// App.jsx — Root component
//
// This is the main file that assembles
// your entire portfolio by importing and
// rendering all section components in order.
//
// Think of this as the "table of contents"
// of your website.
// =========================================

// Import each section component
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import global styles
import './index.css';

function App() {
  return (
    // The whole page lives inside this div
    <div>

      {/* Fixed navigation bar — always visible at top */}
      <Navbar />

      {/* Main content — sections stack vertically */}
      <main>
        <Hero />       {/* Landing section with your name + CTA */}
        <About />      {/* Bio, photo placeholder, education */}
        <Experience /> {/* Work history timeline */}
        <Projects />   {/* Your projects + publication */}
        <Contact />    {/* Contact form + links */}
      </main>

      {/* Footer at the very bottom */}
      <Footer />

    </div>
  );
}

export default App;
