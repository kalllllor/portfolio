import { GithubButton, MessengerButton, InstagramButton } from '../assets/SVGs/SocialsButton';
import { SocialButtonProps } from '../utils/types';

export const SocialButton = ({ icon }: SocialButtonProps) => {
    return (
        <button>
            {icon === 'github' && <GithubButton />}
            {icon === 'messenger' && <MessengerButton />}
            {icon === 'instagram' && <InstagramButton />}
        </button>
    );
};
