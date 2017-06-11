import React from 'react';
import PropTypes from 'prop-types';

import './Book.css';

const Book = (props) => (
  <article className="book-item">
    <img src={props.book.image || './placeholder.jpg'} alt={props.book.title} className="book-item__image" />
    <div className="book-item__description-block">
      <h3 className="book-item__title">{props.book.title}</h3>
      <p className="book-item__author">{props.book.author}</p>
      <p className="book-item__year">{`${props.book.year} г.`}</p>
    </div>
    <div className="book-item__button-block">
      <button className="btn btn--edit" onClick={() => props.onEdit(props.book)}>Редактировать</button>
      <button className="btn btn--remove" onClick={() => props.onDelete(props.book.id)}>Удалить</button>
    </div>
  </article>
);

Book.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

Book.defaultProps = {
  image: './placeholder.jpg',
}

export default Book;
