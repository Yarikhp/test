import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddBookModal.css';

import Input from './../Input/Input';

class AddBookModal extends Component {
  state = {
    book: {
      title: this.props.bookToEdit.title,
      author: this.props.bookToEdit.author,
      year: this.props.bookToEdit.year,
      image: this.props.bookToEdit.image,
      id: this.props.bookToEdit.id,
    }
  }

  handleInputChange = (e) => {
    this.setState({
      book: {
        ...this.state.book,
        [e.target.id]: e.target.value,
      }
    });
  }

  render() {
    const book = this.state.book;

    return (
      <form className="add-book" onSubmit={(e) => this.props.onSubmit(e, book)}>
        <div className="add-book__container">
          <h2 className="add-book__title">{book.id ? 'Редактирование книги' : 'Добавление книги'}</h2>

          <Input id="title" title="Наименование" onChange={this.handleInputChange} value={book.title} required type="text" placeholder="Введите название книги" />

          <Input id="author" title="Автор" onChange={this.handleInputChange} value={book.author} required type="text" placeholder="Введите имя автора" />

          <Input id="year" title="Год выпуска" onChange={this.handleInputChange} value={book.year} required type="number" placeholder="Введите год выпуска" />

          <Input id="image" title="Изображение" onChange={this.handleInputChange} value={book.image} type="url" placeholder="Введите ссылку на изображение" />

          <div className="add-book__button-block">
            <button className="btn btn--save" type="submit">Сохранить</button>
            <button className="btn btn--cancel" onClick={this.props.onClose} type="reset">Отменить</button>
          </div>
        </div>
      </form>
    );
  }
}

AddBookModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  bookToEdit: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
}

export default AddBookModal;
