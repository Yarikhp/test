import React, { Component } from 'react';

import Header from './components/Header/Header'
import Book from './components/Book/Book';
import AddAndEditBookModal from './components/AddBookModal/AddBookModal';

import './index.css';
import './buttons.css';

class App extends Component {
  state = {
    books: [],
    isOpenModal: false,
    bookToEdit: {
      title: '',
      author: '',
      year: '',
      image: '',
      id: '',
    },
  }

  bookId = 0;

  addAndEditBook = (e, book) => {
    e.preventDefault();

    let books = this.state.books;

    if (!book.id) {
      book.id = ++this.bookId;
      books.push(book);
    } else {
      const index = books.indexOf(books.filter(el => el.id === book.id)[0]);
      books[index] = book;
    }

    this.setState({
      books,
      bookToEdit: {
        title: '',
        author: '',
        year: '',
        image: '',
        id: '',
      }
    });
    this.toggleModal();
  }

  deleteBook = (bookId) => {
    const books = this.state.books.filter(book => book.id !== bookId);
    this.setState({ books });
  }

  setEditBook = (bookToEdit) => {
    this.setState({ bookToEdit });
    this.toggleModal();
  }

  onClose = () => {
    this.setState({
      bookToEdit: {
        title: '',
        author: '',
        year: '',
        image: '',
        id: '',
      }
    });
    this.toggleModal();
  }

  toggleModal = () => this.setState({ isOpenModal: !this.state.isOpenModal });

  render() {
    const isBooks = this.state.books.length > 0;

    return (
      <main className="main">
        <Header toggleModal={this.toggleModal} />
        <section className="book-list">
          { isBooks ? this.state.books.map(book =>
            <Book
              book={book}
              key={book.id}
              onEdit={this.setEditBook}
              onDelete={this.deleteBook}
            />)
            :
            <div className="book-list__placeholder">Вы ещё не добавляли книги, пожалуйста нажмите + чтобы добавить книгу.</div>
            }
        </section>
        {this.state.isOpenModal ?
          <AddAndEditBookModal
            onClose={this.onClose}
            onSubmit={this.addAndEditBook}
            bookToEdit={this.state.bookToEdit}
          />
          :
          null}
      </main>
    );
  }
}

export default App;
