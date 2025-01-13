import styles from '../styles/components/Hero.module.scss';
import { useRef } from 'react';

import Social from './Social';
import Menu from './Menu';
import Corner from './Corner';

const Hero = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cornerStyles = {
        first: { '--top': window.innerWidth > 540 ? '1rem' : '3rem', '--left': '1rem', transform: 'rotate(90deg)' },
        second: { '--top': '0rem', '--left': '-1rem', transform: 'rotate(180deg)' },
        third:
            window.innerWidth > 540
                ? { '--top': '0rem', '--right': '-1rem', transform: 'rotate(90deg)' }
                : { '--top': '3rem', '--right': '0rem', transform: 'rotate(180deg)' },
    };

    return (
        <div className={styles.wrapper}>
            <span className={styles['left-bar']} />
            <span className={styles['top-bar']} />
            <Corner customStyle={cornerStyles.first} />
            <div className={styles['bar-title']}>
                <h3>new media arts</h3>
                <Corner customStyle={cornerStyles.second} />
                <Corner customStyle={cornerStyles.third} />
            </div>
            <div className={styles.socials}>
                <div className={`${styles['inner-wrapper']} ${styles['small-wrapper']}`}>
                    <Social size="small" img="facebook-black" link="" />
                    <Social size="small" img="instagram-black" link="" />
                    <Social size="small" img="github-black" link="" />
                </div>
                <div className={`${styles['inner-wrapper']} ${styles['big-wrapper']}`}>
                    <Social size="big" img="qr" link="" inverted />
                </div>
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
