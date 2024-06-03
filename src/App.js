import React, { useState } from "react";


const validLetters = new Set(["R", "A", "N", "D", "T", "E"]);
const words = ["RAND", "TED", "RAN", "NED", "NET", "NERD"];

function App() {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();
    if (value === "" || validLetters.has(value[value.length - 1])) {
      setInput(value);
      setError("");
    } else {
      setError("Invalid character entered. Only R, A, N, D, T, E are allowed.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setScore(input.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Search</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>Score: {score}</p>
      </header>
    </div>
  );
}

export default App;
