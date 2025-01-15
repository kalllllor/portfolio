import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/components/ProjectPage.module.scss';
import { useParams } from 'react-router-dom';
import data from '../assets/project-data.json';
import Corner from './Corner';
import GoBackButton from './GoBackButton';

const ProjectPage: React.FC = () => {
    document.documentElement.style.setProperty('--first-color', '#F8F8F8');
    document.documentElement.style.setProperty('--secondary-color', '#212227');
    const { projectId } = useParams();
    const project = data.projects.find(({ id }) => id === Number(projectId));
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            if (isPlaying) {
                videoElement.play();
            } else {
                videoElement.pause();
            }

            videoElement.volume = volume;

            const handleTimeUpdate = () => {
                setCurrentTime(videoElement?.currentTime || 0);
            };

            const handleLoadedMetadata = () => {
                setDuration(videoElement?.duration || 0);
            };

            const handleVideoEnded = () => {
                setIsPlaying(false);
            };

            videoElement.addEventListener('timeupdate', handleTimeUpdate);
            videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
            videoElement.addEventListener('ended', handleVideoEnded);

            return () => {
                videoElement?.removeEventListener('timeupdate', handleTimeUpdate);
                videoElement?.removeEventListener('loadedmetadata', handleLoadedMetadata);
                videoElement?.removeEventListener('ended', handleVideoEnded);
            };
        }
    }, [isPlaying, volume]);

    if (!project) {
        return <div>Project not found</div>;
    }

    const { name, description, photos, videoUrl, tags, folder } = project;

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (photos?.length || 1));
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + (photos?.length || 1)) % (photos?.length || 1));
    };

    const handlePlayPause = () => {
        setIsPlaying((isPlaying) => !isPlaying);
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const cornerStyles = {
        first: { '--top': '0rem', '--left': '-1rem', transform: 'rotate(180deg)' },
        second: { '--top': '0rem', '--right': '-1rem', transform: 'rotate(90deg)' },
        third: { '--top': '0.5rem', '--left': '-1rem', transform: 'rotate(270deg)' },
        fourth: { '--top': '0.5rem', '--right': '-1rem', transform: 'rotate(0deg)' },
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles['go-back']}>
                    <GoBackButton />
                </div>
                <div className={styles.info}>
                    <h2>{name}</h2>
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className={styles['media-wrapper']}>
                    <div className={styles['media-container']}>
                        {videoUrl ? (
                            <div className={styles['video-player']}>
                                <div className={styles['video-container']}>
                                    <video src={`/projects/${folder}/${videoUrl}`} ref={videoRef} />
                                </div>
                                <div className={styles.controls}>
                                    <div className={styles.play}>
                                        <Corner customStyle={cornerStyles.first} isSmall isSecondary />
                                        <Corner customStyle={cornerStyles.second} isSmall isSecondary />
                                        <button onClick={handlePlayPause}>
                                            {isPlaying ? <img src="/assets/pause.png" /> : <img src="/assets/play.png" />}
                                        </button>
                                    </div>
                                    <div className={styles.volume}>
                                        <Corner customStyle={cornerStyles.first} isSmall isSecondary />
                                        <Corner customStyle={cornerStyles.second} isSmall isSecondary />
                                        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                                        <span className={styles.percentage}>{Math.round(volume * 100)}%</span>
                                    </div>
                                </div>
                                <div className={styles.timer}>
                                    <div className={styles['timer-container']}>
                                        <Corner customStyle={cornerStyles.third} isSmall isSecondary />
                                        <Corner customStyle={cornerStyles.fourth} isSmall isSecondary />
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </div>
                                </div>
                                <div className={styles.arrows}>
                                    <button className={styles.back}>
                                        <Corner customStyle={cornerStyles.first} isSmall isSecondary />
                                        <Corner customStyle={cornerStyles.second} isSmall isSecondary />
                                        <button onClick={handlePlayPause}>
                                            <img src="/assets/play.png" />
                                        </button>
                                    </button>
                                    <button className={styles.forward}>
                                        <Corner customStyle={cornerStyles.first} isSmall isSecondary />
                                        <Corner customStyle={cornerStyles.second} isSmall isSecondary />
                                        <button onClick={handlePlayPause}>
                                            <img src="/assets/play.png" />
                                        </button>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            photos.length && (
                                <div className={styles.carousel}>
                                    <button onClick={handlePrevPhoto}>Previous</button>
                                    <img src={`/projects/${folder}/${photos[currentPhotoIndex]}`} alt={`Slide ${currentPhotoIndex + 1}`} />
                                    <button onClick={handleNextPhoto}>Next</button>
                                </div>
                            )
                        )}
                    </div>
                    <div className={styles.tags}>
                        <h5>TAGS: </h5>
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
