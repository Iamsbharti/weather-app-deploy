import React from "react";
import Location from "./Components/Location";
import Weather from "./Components/Weather";
import SearchBox from "./Components/SearchBox";
function App() {
  return (
    <div className="app">
      <main>
        <SearchBox />
        <Location />
        <Weather />
      </main>
    </div>
  );
}

export default App;
