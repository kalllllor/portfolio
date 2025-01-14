import React, { useState } from 'react';
import styles from '../styles/components/ProjectPage.module.scss';

interface ProjectPageProps {
    title: string;
    description: string;
    technicalInfo: string;
    videoUrl?: string;
    photos?: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, technicalInfo, videoUrl, photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (photos?.length || 1));
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + (photos?.length || 1)) % (photos?.length || 1));
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    };

    return (
        <div className={styles['project-page']}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{technicalInfo}</p>
            <div className={styles['media-container']}>
                {videoUrl ? (
                    <div className={styles['video-player']}>
                        <video src={videoUrl} controls={false} autoPlay={isPlaying} muted={isMuted} />
                        <div className={styles.controls}>
                            <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                            <button onClick={handleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
                            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                        </div>
                    </div>
                ) : (
                    photos && (
                        <div className={styles.carousel}>
                            <button onClick={handlePrevPhoto}>Previous</button>
                            <img src={photos[currentPhotoIndex]} alt={`Slide ${currentPhotoIndex + 1}`} />
                            <button onClick={handleNextPhoto}>Next</button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ProjectPage;
