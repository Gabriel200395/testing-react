import React, { useState } from "react";
import "./styles.css";

function Toogle() {
  const [toogleElement, setToogleElement] = useState(false);

  const handleClickToogle = () => setToogleElement((element) => !element);

  return (
    <div className="toogle-c">
      <div>
        {toogleElement && <h2>Open</h2>}
        <button type="button" onClick={handleClickToogle}>{toogleElement ? "Open" : "Close"}</button>
      </div>
    </div>
  );
}

export default Toogle;
