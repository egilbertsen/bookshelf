import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";


class Shelf extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.getBooks();
    };

    getBooks() {
        API.getBooks()
            .then(res =>
                this.setState({ savedBooks: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteBook(id) {
        API.deleteBook(id)
            .then(res => this.getBooks())
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Your Bookshelf</h1>
                        </Jumbotron>
                        {this.state.savedBooks.length ? (
                            <List>
                                {this.savedBooks.map(book => (
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
                                                <p>Description: {book.description} </p>
                                                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                            </Col>
                                        </Row>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <div></div>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Shelf;