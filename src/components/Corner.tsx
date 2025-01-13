import React from 'react';
import styles from '../styles/components/Corner.module.scss';
import { CornerProps } from '../utils/types';

const Corner: React.FC<CornerProps> = ({ customStyle }) => {
    return <span className={styles.wrapper} style={customStyle}></span>;
};

export default Corner;
