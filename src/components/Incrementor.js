import { useSelector } from "react-redux";
import Actions from "../actions/actions";

const Incrementor = ({ type }) => {
  const state = useSelector((state) => state.state);
  const { breakLength, sessionLength, isPlaying } = state;
  const { incrementBreak, decrementBreak, incrementSession, decrementSession } =
    Actions();

  return (
    <div className="container">
      <div
        className="incrementor "
        style={{ pointerEvents: isPlaying ? "none" : "all" }}
      >
        <h2 id={type.toLowerCase() + "-label"}>{type} Length</h2>
        <div className="incrementor-controls">
          <button
            id={type.toLowerCase() + "-decrement"}
            className="btn bi bi-arrow-down"
            onClick={
              type === "Break"
                ? breakLength >= 2
                  ? decrementBreak
                  : null
                : type === "Session"
                ? sessionLength >= 2
                  ? decrementSession
                  : null
                : null
            }
          ></button>
          <span id={type.toLowerCase() + "-length"}>
            {type === "Break" ? breakLength : sessionLength}
          </span>
          <button
            id={type.toLowerCase() + "-increment"}
            className="btn bi bi-arrow-up"
            onClick={
              type === "Break"
                ? breakLength < 60
                  ? incrementBreak
                  : null
                : type === "Session"
                ? sessionLength < 60
                  ? incrementSession
                  : null
                : null
            }
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Incrementor;
