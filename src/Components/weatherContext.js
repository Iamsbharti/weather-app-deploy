import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class WeatherContextProvider extends Component {
  state = {
    weather: {},
  };

  //this.setState({ query: "", weather: data })
  search = (query) => {
    let url = process.env.REACT_APP_WEATHER_API_URL;
    let key = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(`${url}weather?q=${query}&appid=${key}`);
    fetch(`${url}weather?q=${query}&appid=${key}`)
      .then((response) => response.json())
      .then((data) => this.setState({ weather: data }));
  };

  render() {
    return (
      <Provider
        value={{
          search: this.search,
          weather: this.weather,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { WeatherContextProvider, Consumer as WeatherContextConsumer };
