import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>MD Shakil | MERN Stack Developer</title>
        <meta name="description" content="MD Shakil is a passionate MERN Stack Developer from Bangladesh. Specializing in React, Node.js, Express and MongoDB." />
        <meta name="keywords" content="MERN Stack Developer, React Developer, Node.js, MongoDB, Full Stack Developer, Bangladesh" />
        <meta name="author" content="MD Shakil" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="MD Shakil | MERN Stack Developer" />
        <meta property="og:description" content="Passionate MERN Stack Developer from Bangladesh." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cosmic-parfait-763fa5.netlify.app" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MD Shakil | MERN Stack Developer" />
        <meta name="twitter:description" content="Passionate MERN Stack Developer from Bangladesh." />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;