import { useSelector } from "react-redux";
import Actions from "../actions/actions";
import { useEffect, useRef } from "react";
import $ from "jquery";
import { useCallback } from "react";
const beepSound = require("../beep.wav");
const Session = () => {
  const state = useSelector((state) => state.state);

  const { playPause, reset, tick, switchTimer } = Actions();

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  const audioRef = useRef();

  useEffect(() => {
    if (state.isPlaying) {
      const interval = setInterval(() => {
        if (state.timer > 0) {
          tick();
        } else {
          audioRef.current.play();
          switchTimer();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [state.isPlaying, state.timer, tick, switchTimer]);

  return (
    <div id="session" className="container">
      <div className="row timer-row">
        <div className="col-12">
          <h1 id="timer-label">{state.timerType}</h1>

          <audio
            id="beep"
            src={beepSound}
            preload="auto"
            ref={audioRef}
          ></audio>
        </div>

        <div className="row time-row">
          <div id="time-left" className="col col-12">
            {formatTime(state.timer)}
          </div>
        </div>
      </div>
      <div className="row timer-control-row">
        <div className="col col-6">
          <button
            id="start_stop"
            className={
              "btn bi bi-" + (state.isPlaying ? "pause-fill" : "play-fill")
            }
            onClick={playPause}
          ></button>
        </div>
        <div className="col col-6">
          <button
            id="reset"
            className="btn bi bi-arrow-repeat"
            onClick={reset}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Session;
