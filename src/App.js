import styles from './App.css';
import AboutMe from './components/about-me/about-me.component';
import Hero from './components/hero/hero.component';
import NavBar from './components/nav-bar/nav-bar.component';
import MouseScroll from './components/mouse-scroll/mouse-scroll.component';
import Skills from './components/skills/skills.component';
import Services from './components/services/services.component';
import Qualification from './components/qualification/qualification.component';
import Testimonials from './components/testimonials/testimonials.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <MouseScroll />
      <AboutMe />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
