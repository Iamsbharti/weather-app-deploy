import React from "react";
import Location from "./Components/Location";
import Weather from "./Components/Weather";
import SearchBox from "./Components/SearchBox";
import { WeatherContextProvider } from "./Components/weatherContext";
function App() {
  return (
    <div className="app">
      <main>
        <WeatherContextProvider>
          <SearchBox />
          <Location />
          <Weather />
        </WeatherContextProvider>
      </main>
    </div>
  );
}

export default App;
