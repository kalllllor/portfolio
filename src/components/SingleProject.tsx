import { SingleProjectProps } from '../utils/types';
import styles from '../styles/components/SingleProject.module.scss';

const SingleProject = ({ title, isFirst }: SingleProjectProps) => {
    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
        </div>
    );
};

export default SingleProject;
