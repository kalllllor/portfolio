import React, { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Projects';
import styles from './styles/components/App.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import CanvasBackground from './components/CanvasBackground';

const App: React.FC = () => {
    useEffect(() => {
        const handleResize = () => {
            window.location.reload();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NoMatch />} />
                <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
};

const Home: React.FC = () => (
    <div className={styles.wrapper}>
        <CanvasBackground />
        <Hero />
        <Info />
        <Projects />
        <About />
        <Contact />
    </div>
);

const NoMatch: React.FC = () => (
    <div className={styles.wrapper}>
        <h1>404 - Not Found</h1>
        <Link to="/">Go Home</Link>
    </div>
);

export default App;
