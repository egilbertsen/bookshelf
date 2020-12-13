import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
    state = {
        books: [],
        query: ""
    }


    searchGoogle = event => {
        event.preventDefault();
        let query = this.state.query
        API.searchGoogle(query)
            .then(res => 
                this.setState({
                    books: res.data.items,
                    query: ""
                })
            )
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        this.setState({query: event.target.value});
    };

    saveBook = bookData => {
        API.saveBook(bookData)
            .then(res => this.setState({books: res.data.items}))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Search Google Books</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="form-group">
                            <input type="text" className = "form-control" id="query" name = "query" placeholder="search" onChange= {this.handleInputChange} />
                        </div>
                        <button type = "submit" onClick={this.searchGoogle}>Search</button>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div>
                            <h1>Results: </h1>
                        </div>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <Row>
                                            <Col size="md-3">
                                                <img src={book.volumeInfo.imageLinks.thumbnail} />
                                            </Col>
                                            <Col size="md-9">
                                                <Link to={book.volumeInfo.infoLink}>
                                                    <strong>
                                                        {book.volumeInfo.title} by {book.volumeInfo.authors}
                                                    </strong>
                                                </Link>
                                                <p>Description: {book.volumeInfo.description} </p>
                                                <SaveBtn onClick={() => this.saveBook({
                                                    title: book.volumeInfo.title,
                                                    authors: book.volumeInfo.authors,
                                                    image: book.volumeInfo.imageLinks.thumbnail,
                                                    description: book.volumeInfo.description,
                                                    link: book.volumeInfo.infoLink
                                                })} />
                                            </Col>
                                        </Row>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (<div> No Results to Display </div>)}
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Search;