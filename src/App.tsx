

// src/App.tsx
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FeaturedWorks from './components/FeaturedWorks/FeaturedWorks';
import Photography from './components/Photography/Photography';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorks />
        <Photography />
        <Services />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
