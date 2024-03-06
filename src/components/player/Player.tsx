import React from "react";
import styles from "./Player.module.css";
import pause_play from "../../../assets/pause-button.svg"
import shuffle from "../../../assets/shuffle-button.svg"
import previous from "../../../assets/previous-track.svg"
import next from "../../../assets/next-track-button.svg"
import stop from "../../../assets/pausa-tudo-button.svg"

export function Player() {
  return (
    <div className={styles.player}>

      <div className={styles.trackProgress}>
        <progress value={0.7} />
      </div>

      <div className={styles.buttons}>
        <button>
          <img className={styles.shuffle} src={shuffle} />
        </button>

        <button>
          <img className={styles.previous} src={previous} />
        </button>

        <button>
          <img className={styles.pause_play} src={pause_play} />
        </button>

        <button>
          <img className={styles.next} src={next} />
        </button>

        <button>
          <img className={styles.stop} src={stop} />
        </button>
      </div>

      <div className="volume">
        <input
          type="range"
          min={0}
          max={100}
        /*determine step*/
        />
      </div>

    </div>
  )

}
