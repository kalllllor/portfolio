import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Projects';
import styles from './styles/components/App.module.scss';

function App() {
    return (
        <div className={styles.wrapper}>
            <Hero />
            <Info />
            <Projects />
        </div>
    );
}

export default App;
