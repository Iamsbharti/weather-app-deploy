import React from "react";
import Location from "./Components/Location";
import Weather from "./Components/Weather";
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="search..."
            name="search"
            className="search-bar"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <Location />
        <Weather />
      </main>
    </div>
  );
}

export default App;
