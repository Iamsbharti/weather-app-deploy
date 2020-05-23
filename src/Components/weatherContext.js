import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class WeatherContextProvider extends Component {
  state = {
    query: "",
    weather: {},
  };
  setQuery = (newQuery) => {
    this.setState({ query: newQuery });
  };
  search = (e) => {
    let url = process.env.REACT_APP_WEATHER_API_URL;
    let key = process.env.REACT_APP_WEATHER_API_KEY;
    fetch(`${url}/weather?q=${this.query}&appid=${key}`)
      .then((response) => response.json())
      .then((data) => this.setState({ query: "", weather: data }));
  };

  render() {
    return (
      <Provider value={{ setQuery: this.setQuery, search: this.search }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { WeatherContextProvider, Consumer as WeatherContextConsumer };
