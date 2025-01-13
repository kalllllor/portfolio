import React from 'react';
import { SocialMediaIconProps } from '../utils/types';
import styles from '../styles/components/Social.module.scss';
const Social: React.FC<SocialMediaIconProps> = ({ size, img, link, inverted }) => {
    const wrapperSize = size === 'big' ? '82px' : '32px';
    const iconSize = size === 'big' ? '64px' : '32px';

    return (
        <a
            className={inverted ? `${styles.wrapper} ${styles.black}` : styles.wrapper}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: wrapperSize, height: wrapperSize }}
        >
            <img src={`/assets/${img}.png`} alt="social media icon" style={{ width: 'auto', height: iconSize }} />
        </a>
    );
};

export default Social;
