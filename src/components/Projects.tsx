import styles from '../styles/components/Projects.module.scss';
import data from '../assets/project-data.json';
import SingleProject from './SingleProject';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Projects</h2>
            </div>
            <div className={styles.content}>
                {data.projects.map((item, index) => (
                    <Link to={`/projects/${item.id}`} key={index}>
                        <SingleProject key={index} title={item.name} isFirst={index === 0} isLast={index === data.projects.length - 1} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
