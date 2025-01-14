import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/components/ProjectPage.module.scss';
import { useParams } from 'react-router-dom';
import data from '../assets/project-data.json';

const ProjectPage: React.FC = () => {
    const { projectId } = useParams();
    const project = data.projects.find(({ id }) => id === Number(projectId));
    if (!project) {
        return <div>Project not found</div>;
    }
    const { name, description, photos, videoUrl } = project;
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            isPlaying ? videoRef.current.play() : videoRef.current.pause();
            videoRef.current.muted = isMuted;
            videoRef.current.volume = volume;

            const handleTimeUpdate = () => {
                setCurrentTime(videoRef.current?.currentTime || 0);
            };

            const handleLoadedMetadata = () => {
                setDuration(videoRef.current?.duration || 0);
            };

            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
            videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                videoRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
                videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, [isPlaying, isMuted, volume]);

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % (photos?.length || 1));
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + (photos?.length || 1)) % (photos?.length || 1));
    };

    const handlePlayPause = () => {
        setIsPlaying((isPlaying) => !isPlaying);
    };

    const handleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className={styles['media-container']}>
                    {videoUrl ? (
                        <div className={styles['video-player']}>
                            <video src={`/assets/${videoUrl}`} ref={videoRef} />
                            <div className={styles.controls}>
                                <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                                <button onClick={handleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
                                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                                <div className={styles.timer}>
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </div>
                            </div>
                        </div>
                    ) : (
                        photos.length && (
                            <div className={styles.carousel}>
                                <button onClick={handlePrevPhoto}>Previous</button>
                                <img src={photos[currentPhotoIndex]} alt={`Slide ${currentPhotoIndex + 1}`} />
                                <button onClick={handleNextPhoto}>Next</button>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
