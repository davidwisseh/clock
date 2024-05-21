import { combineReducers } from "redux";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timer: 1500,
  timerType: "Session",
  isPlaying: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return {
        ...state,
        breakLength: state.breakLength + 1,
      };
    case "DECREMENT_BREAK":
      return {
        ...state,
        breakLength: state.breakLength - 1,
      };
    case "INCREMENT_SESSION":
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        timer: (state.sessionLength + 1) * 60,
      };
    case "DECREMENT_SESSION":
      return {
        ...state,
        sessionLength:
          state.sessionLength > 1
            ? state.sessionLength - 1
            : state.sessionLength,
        timer:
          state.sessionLength > 1
            ? (state.sessionLength - 1) * 60
            : state.timer,
      };
    case "PLAY_PAUSE":
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case "RESET":
      return {
        ...initialState,
      };
    case "TICK":
      return {
        ...state,
        timer: state.timer - 1,
      };
    case "SWITCH_TIMER":
      return {
        ...state,
        timerType: state.timerType === "Session" ? "Break" : "Session",
        timer:
          state.timerType === "Session"
            ? state.breakLength * 60
            : state.sessionLength * 60,
      };
    default:
      return state;
  }
};

export default combineReducers({ state: rootReducer });
