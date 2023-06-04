import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch search results when the search term changes
    // Replace this with your actual API call or data source logic
    const fetchSearchResults = async () => {
      // Mocking data for demonstration purposes
      const response = await fetch(`https://api.example.com/books?search=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search for books..." />
      <div className="search-results">
        {searchResults.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;