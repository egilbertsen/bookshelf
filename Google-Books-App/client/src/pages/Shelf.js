import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";


class Shelf extends Component {
    state = {
        savedBooks: [],
    };

    componentDidMount() {
        this.getBooks();
    };

    getBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({savedBooks: res.data})
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => getBooks())
            .catch(err => console.log(err));
    }


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
                                {savedBooks.map(book => (
                                    <ListItem key={book._id}>
                                        <Row>
                                            <Col size="md-3">
                                                <div style={{ backgroundImage: "url({book.image}" }}></div>
                                            </Col>
                                            <Col size="md-9">
                                                <Link to={book.link}>
                                                    <strong>
                                                        {book.title} by {book.author}
                                                    </strong>
                                                </Link>
                                                <p>Description: {book.description} </p>
                                                <DeleteBtn onClick={() => deleteBook(book._id)} />
                                            </Col>
                                        </Row>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Shelf;