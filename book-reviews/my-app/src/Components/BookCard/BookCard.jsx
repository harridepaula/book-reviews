import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, coverImage }) => {
  return (
    <div className="book-card">
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <p>Author: {author}</p>
    </div>
  );
};

export default BookCard;