import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import BookCard from './Components/BookCard';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <BookCard />
    </div>
  );
};

export default App;