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
      <div className="w-full max-w-3xl p-6">
        <form className="mt-6 flex items-center w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="flex-grow px-4 py-2 mt-2 bg-white border-2 border-black rounded-l-md focus:outline-none focus:border-blue-500"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-7 py-2 text-lg tracking-wide font-bold text-black bg-yellow-500 rounded-r-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
