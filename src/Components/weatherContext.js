import React, { useState } from "react";
const { Provider, Consumer } = React.createContext();

function WeatherContextProvider(props) {
  const [weather, setWeather] = useState({});

  //this.setState({ query: "", weather: data })
  const search = (query) => {
    let url = process.env.REACT_APP_WEATHER_API_URL;
    let key = process.env.REACT_APP_WEATHER_API_KEY;
    //console.log(`${url}weather?q=${query}&appid=${key}`);
    fetch(`${url}weather?q=${query}&appid=${key}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  return (
    <Provider
      value={{
        search: search,
        weather: weather,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { WeatherContextProvider, Consumer as WeatherContextConsumer };
