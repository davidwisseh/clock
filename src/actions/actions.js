import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

const Actions = () => {
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const incrementBreak = () => {
    dispatch({ type: "INCREMENT_BREAK" });
  };
  const decrementBreak = () => {
    dispatch({ type: "DECREMENT_BREAK" });
  };
  const incrementSession = () => {
    dispatch({ type: "INCREMENT_SESSION" });
  };
  const decrementSession = () => {
    dispatch({ type: "DECREMENT_SESSION" });
  };
  const playPause = () => {
    dispatch({ type: "PLAY_PAUSE" });
  };
  const reset = () => {
    $("#beep")[0].pause();
    $("#beep")[0].currentTime = 0;
    dispatch({ type: "RESET" });
  };
  const tick = () => {
    dispatch({ type: "TICK" });
  };
  const switchTimer = () => {
    dispatch({ type: "SWITCH_TIMER" });
  };

  return {
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
    playPause,
    reset,
    tick,
    switchTimer,
  };
};

export default Actions;
