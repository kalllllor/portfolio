import React from 'react';
import styles from '../styles/components/Corner.module.scss';
import { CornerProps } from '../utils/types';

const Corner: React.FC<CornerProps> = ({ customStyle, isSmall, isSecondary }) => {
    return <span className={`${styles.wrapper} ${isSmall ? styles.small : ''} ${isSecondary ? styles.secondary : ''}`} style={customStyle}></span>;
};

export default Corner;
