import styles from './App.css';
import Hero from './components/hero/hero.component';
import NavBar from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}

export default App;
