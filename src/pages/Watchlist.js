import React, { useContext, useState } from "react";
import FetchContext from "../context/fetch-context";
import Detailedview from "../Components/Detailedview";

const Watchlist = () => {
  const ctx = useContext(FetchContext);
  const [currentSelection, setCurrentSelection] = useState("");

  const handleSelectionChange = (e) => {
    setCurrentSelection(e.target.value);
  };

  return (
    <FetchContext.Provider>
      <div className="watchlist">
        <section>
          <h2>Select Your Watched Coins</h2>
          <div>
            <select id="selection" onChange={handleSelectionChange}>
              {ctx.current.map((element) => (
                <option value={element}>{element}</option>
              ))}
            </select>
          </div>
        </section>
        <div className="details">
          <Detailedview currentSelection={currentSelection} />
        </div>
      </div>
    </FetchContext.Provider>
  );
};

export default Watchlist;
