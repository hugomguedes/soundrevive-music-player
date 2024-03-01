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
        <progress value={0.7}/>
      </div>

      <div className={styles.Buttons}>
        <button>
          <img src={shuffle}/>
        </button>

        <button>
          <img src={previous}/>
        </button>

        <button>
          <img src={pause_play}/>
        </button>

        <button>
          <img src={next}/>
        </button>

        <button>
          <img src={stop}/>
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
