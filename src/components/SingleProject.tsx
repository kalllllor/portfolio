import { SingleProjectProps } from '../utils/types';
import styles from '../styles/components/SingleProject.module.scss';
import Corner from './Corner';

const SingleProject = ({ title, isFirst, isLast, onClick }: SingleProjectProps) => {
    const cornerStyles = {
        top: { '--top': '-1rem', '--left': '0rem', transform: 'rotate(0deg)' },
        bottom: { '--bottom': '-1rem', '--left': '0rem', transform: 'rotate(90deg)' },
    };

    const wrapperStyle = isLast ? { margin: '0px' } : {};

    return (
        <div className={styles.wrapper} style={wrapperStyle} onClick={onClick}>
            <div className={styles.content}>
                {!isFirst && <Corner customStyle={cornerStyles.top} />}
                <h3>{title}</h3>
                {!isLast && <Corner customStyle={cornerStyles.bottom} />}
            </div>
        </div>
    );
};

export default SingleProject;
