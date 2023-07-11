import React from "react";

function Winner({ winner, handleReset }) {
  return (
    <div className="winner">
      <div className="wintext">
        {" "}
        {winner === "X" || winner === "0" ? ` player ${winner} won ` : winner}
      </div>
      <button className="playbtn" onClick={handleReset}>
        Play Again
      </button>
    </div>
  );
}

export default Winner;
