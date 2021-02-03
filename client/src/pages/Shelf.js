import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

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
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadSavedBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Bookshelf</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Row>
                      <Col size="md-3">
                        <img src={book.image} />
                      </Col>
                      <Col size="md-9">
                        <Link to={book.link}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </Link>
                        <p>Description: {book.description}</p>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </Col>
                    </Row>

                  </ListItem>
                ))}
              </List>
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
