import React from "react";
import { WeatherContextConsumer } from "./weatherContext";
export default function Weather() {
  return (
    <WeatherContextConsumer>
      {({ weather }) =>
        weather.weather && (
          <div className="weather-box">
            <div className="temp">{`${weather.main.temp} F`}</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        )
      }
    </WeatherContextConsumer>
  );
}
