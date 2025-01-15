import { GithubButton, MessengerButton, InstagramButton } from '../assets/SVGs/SocialsIcons';
import { SocialButtonProps } from '../utils/types';
import styles from '../styles/components/SocialButton.module.scss';

interface ExtendedSocialButtonProps extends SocialButtonProps {
    isBig?: boolean;
}

export const SocialButton = ({ icon, link, isBig = false }: ExtendedSocialButtonProps) => {
    const size = isBig ? '2.5rem' : '1.5rem';

    return (
        <button className={styles.wrapper} style={{ '--size': size } as React.CSSProperties}>
            <a href={link} target="_blank" rel="noreferrer">
                {icon === 'github' && <GithubButton />}
                {icon === 'messenger' && <MessengerButton />}
                {icon === 'instagram' && <InstagramButton />}
            </a>
        </button>
    );
};
