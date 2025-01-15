import { GoBackArrow } from '../assets/SVGs/GoBackArrow';
import styles from '../styles/components/GoBackButton.module.scss';
const GoBackButton = () => {
    return (
        <button className={styles.wrapper} onClick={() => window.history.back()}>
            <GoBackArrow />
            <span>Go Back</span>
        </button>
    );
};

export default GoBackButton;
