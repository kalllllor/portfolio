import styles from '../styles/components/Hero.module.scss';
import { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import Corner from './Corner';
import ThemeSwitcher from './ThemeSwitcher';
import { SocialButton } from './SocialButton';

const Hero = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const titleBarRef = useRef<HTMLDivElement>(null);
    const [titleBarWidth, setTitleBarWidth] = useState<number>(0);

    useEffect(() => {
        if (titleBarRef.current) {
            setTitleBarWidth(titleBarRef.current.offsetWidth);
        }
    }, []);

    const cornerStyles = {
        first: { '--top': window.innerWidth > 540 ? '1rem' : '3rem', '--left': '1rem', transform: 'rotate(90deg)' },
        second: { '--top': '0rem', '--left': '-1rem', transform: 'rotate(180deg)' },
        third:
            window.innerWidth > 540
                ? { '--top': '0rem', '--right': '-1rem', transform: 'rotate(90deg)' }
                : { '--top': '3rem', '--right': '0rem', transform: 'rotate(180deg)' },
    };

    return (
        <div className={styles.wrapper} id="home">
            <ThemeSwitcher titleBarWidth={titleBarWidth} />
            <div className={styles['left-bar']}>
                <div className={styles.socials}>
                    <SocialButton isBig link="https://www.instagram.com/karolgren" icon="instagram" />
                    <SocialButton isBig link="www.facebook.com" icon="messenger" />
                    <SocialButton isBig link="https://github.com/kalllllor" icon="github" />
                </div>
            </div>
            <div className={styles['top-bar']}> </div>
            <Corner customStyle={cornerStyles.first} />
            <div className={styles['bar-title']} ref={titleBarRef}>
                <h3>new media arts</h3>
                <Corner customStyle={cornerStyles.second} />
                <Corner customStyle={cornerStyles.third} />
            </div>

            <div className={styles.content} ref={wrapperRef}>
                <Menu />
                <div className={styles['scroll-down']}>
                    <img src="/assets/arrow-down.png" alt="scroll down" />
                    <span>scroll down</span>
                </div>
                <h2>Karol Gren</h2>
            </div>
        </div>
    );
};

export default Hero;
