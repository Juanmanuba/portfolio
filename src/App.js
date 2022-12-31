import styles from './App.css';
import AboutMe from './components/about-me/about-me.component';
import Hero from './components/hero/hero.component';
import NavBar from './components/nav-bar/nav-bar.component';
import MouseScroll from './components/mouse-scroll/mouse-scroll.component';

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <MouseScroll />
      <AboutMe />
    </div>
  );
}

export default App;
