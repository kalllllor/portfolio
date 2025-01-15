import React, { useState, useEffect } from 'react';
import styles from '../styles/components/ThemeSwitcher.module.scss';
import { ThemeSwitcherProps } from '../utils/types';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ titleBarWidth = 0 }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    console.log(titleBarWidth);
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', isDarkMode ? '#212227' : '#F8F8F8');
        document.documentElement.style.setProperty('--secondary-color', isDarkMode ? '#F8F8F8' : '#212227');
        document.documentElement.style.setProperty(
            '--title-bar-offset',
            window.innerWidth > 768 ? `calc(50% - ${titleBarWidth / 2}px - 5rem)` : `calc(50% - ${titleBarWidth / 2}px - 2.5rem)`
        );
    }, [isDarkMode, titleBarWidth]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            className={isDarkMode ? `${styles.switchButton} ${styles['dark-mode']}` : `${styles.switchButton} ${styles['light-mode']}`}
            onClick={toggleTheme}
        >
            <img className={`${styles.icon} ${styles.sun}`} src="/assets/sun.png" alt="Sun" />
            <img className={`${styles.icon} ${styles.moon}`} src="/assets/moon.png" alt="Moon" />
        </button>
    );
};

export default ThemeSwitcher;
