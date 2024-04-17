import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Implement your search logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-4">
        <form className="flex items-center w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-non p-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
