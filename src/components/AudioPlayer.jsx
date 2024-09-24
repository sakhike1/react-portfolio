import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaUndo } from 'react-icons/fa';
import audioFile from '../assets/Pianolove.wav';


const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audio = new Audio(audioFile);

  useEffect(() => {
    const handleEnded = () => setPlaying(false);
    audio.addEventListener('ended', handleEnded);

    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
    };
  }, [playing, audio]);

  const handlePlayPause = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  const handleReset = () => {
    audio.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-r from-sky-400 to-lime-400 rounded-full shadow-lg">
        <button
          onClick={handlePlayPause}
          className="absolute w-full h-full flex justify-center items-center"
        >
          {playing ? (
            <FaPause className="text-white text-3xl" />
          ) : (
            <FaPlay className="text-white text-3xl" />
          )}
        </button>
        <button
          onClick={handleReset}
          className="absolute top-1 left-1 w-8 h-8 flex justify-center items-center bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaUndo className="text-blue-500" />
        </button>
      </div>


    </div>
  );
};

export default AudioPlayer;
