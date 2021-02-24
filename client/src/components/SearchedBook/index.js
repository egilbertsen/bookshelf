import React from "react";
import { Col, Row } from "../Grid";
import SaveBtn from "../SaveBtn"
const SearchedBook = props => {

    let formattedAuthors;

    if ( props.authors.length < 1 ) {
        formattedAuthors = "Unknown"
    } else if (props.authors.length === 1 ) {
        formattedAuthors = props.authors;
    } else if (props.authors.length === 2 ) {
        const rawAuthors = props.authors;
        formattedAuthors = rawAuthors.join(' and ')
    } else if (props.authors.length > 2) {
        const rawAuthors = props.authors;
        const lastGuy = rawAuthors.pop();
        formattedAuthors = rawAuthors.join(', ') + ', and ' + lastGuy;
    }

    return (
        <div>
            <Row>
                    <Col size="md-3">
                        <img src= {props.image} alt = "bookcover thumbnail"/>
                    </Col>
                    <Col size="md-9">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <strong>
                                {props.title} by {formattedAuthors}
                            </strong>
                        </a>
                        <p>Description: {props.description} </p>
                        <SaveBtn onClick={props.handleSave}/>
                    </Col>
                </Row>
        </div>
    )
}

export default SearchedBook;