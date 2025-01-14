import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Projects';
import CanvasBackground from './components/CanvasBackground';
import styles from './styles/components/App.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Hero />
            <Info />
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default App;
