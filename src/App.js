import React, { useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Watchlist from "./pages/Watchlist";
import NavBar from "./Components/Navbar";
import FetchContext from "./context/fetch-context";

const App = () => {
  const watchlistArrRef = useRef([]);

  return (
    <FetchContext.Provider value={watchlistArrRef}>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </FetchContext.Provider>
  );
};

export default App;
