import styles from '../styles/components/Projects.module.scss';
import data from '../assets/project-data.json';
import SingleProject from './SingleProject';

const Projects = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Projects</h2>
            </div>
            <div className={styles.content}>
                {data.projects.map((item, index) => (
                    <SingleProject key={index} title={item.name} isFirst={index === 0} isLast={index === data.projects.length - 1} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
