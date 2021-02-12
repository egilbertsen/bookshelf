import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import './style.css';
import BookSpine from "../../components/BookSpine";

class Shelf extends Component {
  state = {
    books: []
  };

  // Setting saved books to books state variable
  componentDidMount = () => {
    this.loadSavedBooks();
  }
  // Loads all books saved books and sets them to books
  loadSavedBooks() {
    API.getBooks()
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  handleDelete = id => {
    API.deleteBook(id)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid >
        <Row>
          <Col size="md-12" className= "bookcase">
            <Jumbotron>
              <h1>Bookshelf</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <div>
                {this.state.books.map(book => (
                  <BookSpine 
                    key={book._id}
                    title={book.title}
                    authors={book.authors}
                    handleDelete={() => this.handleDelete(book._id)}
                  />  

                ))}
              </div>
            ) : (
                <h3>No saved books to display</h3>
              )}
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Shelf;
