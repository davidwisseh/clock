import logo from "./logo.svg";
import "./App.css";
import Session from "./components/Session";
import Incrementor from "./components/Incrementor";

function App() {
  return (
    <div className="App ">
      <div className="main">
        <h1>25+5 Clock</h1>
        <div className="container inc-container">
          <div className="row">
            <div className="col">
              <Incrementor type="Break" />
            </div>
            <div className="col">
              <Incrementor type="Session" />
            </div>
          </div>
        </div>

        <Session />
        <footer>
          <p>
            by <a href="https://github.com/davidwisseh">David Wisseh</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
