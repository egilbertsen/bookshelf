import React from "react";
import { Col, Row } from "../Grid";
import SaveBtn from "../SaveBtn"
const SearchedBook = props => {
    return (
        <div>
            <Row>
                    <Col size="md-3">
                        <img src= {props.image} alt = "bookcover thumbnail"/>
                    </Col>
                    <Col size="md-9">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <strong>
                                {props.title} by {props.author}
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