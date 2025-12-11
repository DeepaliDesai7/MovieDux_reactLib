import React, { useEffect, useState } from "react";

// Tip 1: Remember to use the useState hook to create your state.
// Tip 2: Initialize your state with a list of 3(!) book titles as strings.
export default function Books() {
  const [Books, setBooks] = useState([]);
  // Tip 3: Define your state here using useState.
  useEffect(() => {
    const lstB = ["a", "b", "c"];
    setBooks(lstB);
  }, []);

  return (
    <div>
      <h1>Books list goes here</h1>
      {
        /* Tip 4: Use the map function to render your list of books within a <ul>. */
        Books.map((book) => (
          <ul>
            <li key="book.titles">{book}</li>
          </ul>
        ))
      }
    </div>
  );
}
