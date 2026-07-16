import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { TypePlayer } from '../types';

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

const timeInSeconds = (timeString: string) => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
}

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }:TypePlayer) => {

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const durationInSeconds = timeInSeconds(duration);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const playPause = () => {
      isPlaying ? audioPlayer.current?.pause() : audioPlayer.current?.play();
      setIsPlaying(!isPlaying); 
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        const current = audioPlayer.current?.currentTime ?? 0;
        setCurrentTime(formatTime(current));

        progressBar.current?.style.setProperty("--_progress", (current / durationInSeconds) * 100 + "%");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return(
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className='player__icon player__icon--play' icon={isPlaying ? faCirclePause : faCirclePlay} onClick={playPause} />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
        </Link>        
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div className="player__bar-progress" ref={progressBar}></div>
        </div>

        <p>{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;