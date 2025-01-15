export interface InfoProps {
    onButtonClick1?: () => void;
    onButtonClick2?: () => void;
    onButtonClick3?: () => void;
}

export interface SocialMediaIconProps {
    size: 'big' | 'small';
    img: string;
    link: string;
    inverted?: boolean;
}

export interface CornerProps {
    customStyle: React.CSSProperties;
    classVal?: string;
    isSmall?: boolean;
    isSecondary?: boolean;
}

export interface SingleProjectProps {
    title: string;
    isFirst: boolean;
    isLast: boolean;
    onClick?: () => void;
}

export interface ThemeSwitcherProps {
    titleBarWidth?: number;
}

export interface SocialButtonProps {
    icon: 'github' | 'messenger' | 'instagram';
}
