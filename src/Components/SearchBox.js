import React, { useState } from "react";
export default function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="search..."
        name="search"
        className="search-bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
