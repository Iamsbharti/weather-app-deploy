import React from "react";
export default function SearchBox() {
  //05208a7ae8a057ad963e621015916646
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="search..."
        name="search"
        className="search-bar"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
