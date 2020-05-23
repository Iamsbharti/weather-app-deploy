import React from "react";
import Location from "./Components/Location";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <div className="app">
      <main>
        <SearchBox />
        <Location />
      </main>
    </div>
  );
}

export default App;
