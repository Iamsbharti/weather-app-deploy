import React, { useState } from "react";
import { WeatherContextConsumer } from "./weatherContext";
export default function SearchBox() {
  const [query, setQuery] = useState("");
  return (
    <WeatherContextConsumer>
      {({ search }) => (
        <div className="search-box">
          <input
            type="text"
            placeholder="search..."
            name="search"
            className="search-bar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => search(query)}
          />
        </div>
      )}
    </WeatherContextConsumer>
  );
}
