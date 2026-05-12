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
    <div>

      {/* Fixed navigation bar — always visible at top */}
      <Navbar />

      <main>
        <Hero />       
        <About />      
        <Experience /> 
        <Projects />   
        <Contact />    
      </main>

      <Footer />

    </div>
  );
}

export default App;
