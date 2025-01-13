import React, { useState, useEffect } from 'react';
import { InfoProps } from '../utils/types';
import styles from '../styles/components/Info.module.scss';
import Corner from './Corner';

const cornerStyles = {
    topRight: { '--top': '-1rem', '--right': '0rem', transform: 'rotate(270deg)' },
    bottomRight: { '--bottom': '-1rem', '--right': '0rem', transform: 'rotate(180deg)' },
};

const Info: React.FC<InfoProps> = ({ onButtonClick1, onButtonClick2, onButtonClick3 }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCoords({ x: event.clientX, y: event.clientY });
        };

        const handleClick = () => {
            setClickCount((prevCount) => prevCount + 1);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <p>
                    Coordinates: ({coords.x}, {coords.y})
                </p>
                <p>Click count: {clickCount}</p>
            </div>
            <div>
                <button onClick={onButtonClick1}>Button 1</button>
                <button onClick={onButtonClick2}>Button 2</button>
                <button onClick={onButtonClick3}>Button 3</button>
            </div>
            <Corner customStyle={cornerStyles.topRight} />
            <Corner customStyle={cornerStyles.bottomRight} />
        </div>
    );
};

export default Info;
