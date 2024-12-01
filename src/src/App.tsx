import AocLogo from "./assets/aoc-logo.png";
import "./App.css";
import Day1 from "./days/day1/Day1";

function App() {
  return (
    <>
      <div>
        <a href="https://adventofcode.com/2024" target="_blank">
          <img src={AocLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Advent of Code 2024</h1>
      <div className="card-grid">
        <div className="card">
          <Day1 />
        </div>
      </div>
    </>
  );
}

export default App;
