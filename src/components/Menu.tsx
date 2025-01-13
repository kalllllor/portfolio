import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/components/Menu.module.scss';

const Menu: React.FC = () => {
    const [selected, setSelected] = useState<string>('HOME');
    const [hoverStyle, setHoverStyle] = useState<{ left: string; width: string }>({ left: '0px', width: '0px' });
    const containerRef = useRef<HTMLDivElement>(null);

    const menuItems = ['HOME', 'ABOUT', 'CONTACT', 'GALLERY'];

    const handleClick = (item: string, index: number) => {
        setSelected(item);
        if (containerRef.current) {
            const menuItem = containerRef.current.children[index] as HTMLElement;
            setHoverStyle({
                left: `${menuItem.offsetLeft}px`,
                width: `${menuItem.offsetWidth}px`,
            });
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            const initialIndex = menuItems.indexOf(selected);
            const initialItem = containerRef.current.children[initialIndex] as HTMLElement;
            setHoverStyle({
                left: `${initialItem.offsetLeft}px`,
                width: `${initialItem.offsetWidth}px`,
            });
        }
    }, [containerRef.current]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container} ref={containerRef}>
                {menuItems.map((item, index) => (
                    <div
                        key={item}
                        className={selected === item ? `${styles['menu-item']} ${styles.selected}` : styles['menu-item']}
                        onClick={() => handleClick(item, index)}
                    >
                        {item}
                    </div>
                ))}
                <span className={styles['hover-rectangle']} style={{ left: hoverStyle.left, width: hoverStyle.width }} />
            </div>
        </div>
    );
};

export default Menu;
