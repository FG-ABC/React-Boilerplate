import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div id="Main" className="flex h-screen w-full justify-center p-8">
      {/* Score bar */}
      <div className="flex h-max w-full justify-between rounded-xl border border-white bg-transparent px-3 py-2 md:w-7/12">
        <div className="ml-3 flex w-10 flex-col flex-wrap py-3">
          <h2 className="text-xs font-bold leading-none text-white md:text-xl md:leading-none">
            Rock Paper Scissors Lizard Spock
          </h2>
        </div>
        <div className="flex w-4/12 flex-col items-center justify-center rounded-xl bg-white md:w-2/12">
          <h2>SCORE</h2>
          <h1 className="text-3xl font-bold">{score}</h1>
        </div>
      </div>

      {/* Main Game */}
      <div></div>

      {/* Rules button */}
      <div></div>
    </div>
  );
}
export default App;
