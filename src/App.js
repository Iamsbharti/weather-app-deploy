import React from "react";

function App() {
  return (
    <div className="app">
      <main>
        <form className="search-box">
          <input
            type="text"
            placeholder="search..."
            name="search"
            className="search-bar"
            onChange={(e) => console.log(e.target.value)}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
