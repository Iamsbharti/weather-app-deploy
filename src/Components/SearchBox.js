import React from "react";
import { WeatherContextConsumer } from "./weatherContext";
export default function SearchBox() {
  //const [query, setQuery] = useState("");
  return (
    <WeatherContextConsumer>
      {({ search, query, updateQuery }) => (
        <div className="search-box">
          <input
            type="text"
            placeholder="search..."
            name="search"
            className="search-bar"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            onKeyPress={(e) => search(query)}
          />
        </div>
      )}
    </WeatherContextConsumer>
  );
}
