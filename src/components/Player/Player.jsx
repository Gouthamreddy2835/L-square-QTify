import { useState } from "react";
import { Slider, IconButton } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import styles from "./Player.module.css";

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const song = currentSong || {
    title: "Song name",
    album: "Album name",
    image: "https://via.placeholder.com/60",
    durationInMs: 228000,
  };

  return (
    <div className={styles.playerWrapper}>
      <div className={styles.songInfo}>
        <img src={song.image} alt={song.title} className={styles.songImage} />
        <div>
          <h5 className={styles.songTitle}>{song.title}</h5>
          <p className={styles.albumTitle}>{song.album || "Album name"}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <IconButton onClick={togglePlay} className={styles.playBtn}>
          {isPlaying ? (
            <PauseCircleFilledIcon sx={{ fontSize: 40, color: "#ffffff" }} />
          ) : (
            <PlayCircleFilledIcon sx={{ fontSize: 40, color: "#ffffff" }} />
          )}
        </IconButton>
        <div className={styles.progressBarWrapper}>
          <span className={styles.time}>0:38</span>
          <Slider
            value={progress}
            onChange={(e, val) => setProgress(val)}
            className={styles.slider}
          />
          <span className={styles.time}>3:48</span>
        </div>
      </div>
    </div>
  );
};

export default Player;