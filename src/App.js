import React from "react";
import Location from "./Components/Location";
import SearchBox from "./Components/SearchBox";
import { WeatherContextConsumer } from "./Components/weatherContext";
function App() {
  return (
    <WeatherContextConsumer>
      {({ weather }) => (
        <div
          className={
            typeof weather.main !== "undefined"
              ? Math.round(weather.main.temp - 273.15) > 16
                ? "app warm"
                : "app cold"
              : "app"
          }
        >
          <main>
            <SearchBox />
            <Location />
          </main>
        </div>
      )}
    </WeatherContextConsumer>
  );
}

export default App;
