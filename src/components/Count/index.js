import React, { useState } from "react";
import "./style.css";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="count-c">
      <h2 className={count >= 0 ? "heading-black" : "heading-red"}>{count}</h2>
      <div className="buttons">
        <button type="button" onClick={() => setCount((prev) => prev - 1)}>
          Decrementar
        </button>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Incrementar
        </button>
      </div>
    </div>
  );
}

export default Count;
