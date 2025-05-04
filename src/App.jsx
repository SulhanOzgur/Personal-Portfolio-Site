/* personal-portfolio-site-jet.vercel.app */

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}
