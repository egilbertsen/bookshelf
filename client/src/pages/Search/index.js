import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { BiGlasses } from "react-icons/bi";
import { Col, Row, Container } from "../../components/Grid";
import SearchedBook from "../../components/SearchedBook";
import './style.css'

class Search extends Component {
    state = {
        books: [],
        query: ""
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({ query: event.target.value });
    };

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

    saveBook = bookData => {
        API.saveBook(bookData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        let formStyle = {
            borderBottom: "3px solid gray"
        };

        if (this.state.query.length > 0) {
            formStyle = { borderBottom: "3px solid #324383" }
        }

        return (

            <Container fluid>
                {this.state.books.length ? (
                    <div>
                        <Row>
                            <Col size="md-12">
                                <Row>
                                    <form onSubmit={this.searchGoogle} className="form-container">
                                        <input type="text" className="text-box" id="query" name="query" style={formStyle} placeholder="Search for books to add to your shelf" onChange={this.handleInputChange} />
                                        <button type="submit" className="search-button"><BiGlasses></BiGlasses></button>
                                    </form>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <div>
                                    <Jumbotron>
                                        <h1 >Results: </h1>
                                    </Jumbotron>
                                    {this.state.books.map(book => (
                                        <SearchedBook
                                            // error fixed thanks to https://stackoverflow.com/questions/51692323/google-books-api-cannot-read-property-thumbnail-of-undefined
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            image={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`}
                                            description={book.volumeInfo.description}
                                            link={book.volumeInfo.infoLink}
                                            handleSave={() => this.saveBook({
                                                title: book.volumeInfo.title,
                                                authors: book.volumeInfo.authors,
                                                image: book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`,
                                                description: book.volumeInfo.description,
                                                link: book.volumeInfo.infoLink
                                            })}
                                        />


                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </div>
                ) : (
                        <div>
                            <Row>
                                <Col size="md-12">
                                    <Jumbotron>
                                        <h1>Search</h1>
                                    </Jumbotron>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-12">
                                    <Row>
                                        <form onSubmit={this.searchGoogle} className="form-container">
                                            <input type="text" className="text-box" id="query" name="query" style={formStyle} placeholder="Search for books to add to your shelf" onChange={this.handleInputChange} />
                                            <button type="submit" className="search-button"><BiGlasses></BiGlasses></button>
                                        </form>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    )}

            </Container >
        )

    }

}

export default Search;